# Connect enquiries when services are ready

The existing email-draft flow works without configuration. The website offers direct submission only when `/api/enquiries` reports that all three server settings are present. Nothing is sent by the current unconfigured installation.

## Hosting and configuration

The endpoint is a Vercel Node function (`api/enquiries.js`). Other hosts need an equivalent Node function route; Vite's static preview alone does not execute it. The routing configuration serves generated page HTML and keeps API requests out of the SPA fallback.

Set these server environment variables in the hosting dashboard, never as `VITE_` variables:

- `ENQUIRY_ALLOWED_ORIGIN`: exact website origin, such as `https://your-domain.example` (no trailing slash).
- `ENQUIRY_WEBHOOK_URL`: HTTPS endpoint owned by your enquiry service.
- `ENQUIRY_WEBHOOK_TOKEN`: shared secret accepted by that endpoint as a Bearer token.

Set public `VITE_SITE_URL` to the canonical site origin and rebuild for absolute sharing URLs. Vercel builds also use `VERCEL_PROJECT_PRODUCTION_URL` as a fallback for generated HTML.

## Receiving service contract

The website sends JSON `{ id, enquiry, consent: true, receivedAt }`. `enquiry` contains `type` (`contact` or `franchise`), `name`, `email`, `phone`, `subject`, `message`, `city`, and `format`. The same `id` is sent as the `Idempotency-Key` header. Verify the Bearer token, persist the enquiry, and queue notification email before returning a 2xx response. Deduplicate by `id`; retries must not send duplicate emails. Store enquiry text as data, escape it in HTML email/templates, and never use user text as raw mail headers.

The UI confirms receipt, not mailbox delivery. If the receiver fails or times out, the form preserves the draft and offers a retry. A timeout may occur after the receiver has accepted the enquiry, so idempotency is required.

The repository deliberately contains no invented database or email credentials and no pretend persistence. Storage, email delivery, sender verification, retention policy, and service monitoring must be configured in the receiving service before enabling it.

## Abuse controls

The endpoint validates types, lengths, required fields, content type, consent and origin; it rejects a filled honeypot and limits request bodies to 12 KB after platform parsing. It applies a five-per-minute per-IP limit in each warm function instance. This is a best-effort guard, not a distributed rate limit. Configure a hosting firewall or durable rate limiter on `/api/enquiries` before public activation; the receiver should enforce its own quotas too. Do not log enquiry contents or tokens. Apply the hosting platform's request-body limits as well.

## Verification

`node --test tests/enquiries.test.mjs` uses a mocked receiver; no emails are sent. Before enabling production, use a staging receiver to check storage, notifications, duplicate retries, rejection, timeout, and invalid origins. Confirm browser requests hit the function rather than returning SPA HTML.

Platform references: [Node functions](https://vercel.com/docs/functions/runtimes/node-js), [routing configuration](https://vercel.com/docs/project-configuration/vercel-json).
