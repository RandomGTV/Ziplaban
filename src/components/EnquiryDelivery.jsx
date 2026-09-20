import React, { useEffect, useRef, useState } from 'react';

export default function EnquiryDelivery({ enquiry }) {
  const [available, setAvailable] = useState(false);
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState('');
  const requestId = useRef(crypto.randomUUID());
  const pending = useRef(null);
  const fingerprint = JSON.stringify(enquiry);
  useEffect(() => {
    setStatus('idle'); setMessage(''); requestId.current = crypto.randomUUID();
    return () => pending.current?.abort();
  }, [fingerprint]);
  useEffect(() => {
    const controller = new AbortController();
    fetch('/api/enquiries', { signal: controller.signal }).then(response => response.ok ? response.json() : null).then(data => setAvailable(data?.available === true)).catch(() => {});
    return () => controller.abort();
  }, []);
  const submit = async () => {
    setStatus('sending'); setMessage('');
    const controller = new AbortController();
    pending.current = controller;
    try {
      const response = await fetch('/api/enquiries', { method: 'POST', headers: { 'Content-Type': 'application/json' }, signal: AbortSignal.any([controller.signal, AbortSignal.timeout(15_000)]), body: JSON.stringify({ ...enquiry, consent, website, requestId: requestId.current }) });
      const data = await response.json();
      if (!response.ok || data.accepted !== true) throw new Error(data.error || 'We could not confirm receipt. Please retry or use the email draft.');
      setStatus('sent'); setMessage(`Your enquiry was received. Reference: ${data.reference}`);
    } catch (error) { if (controller.signal.aborted) return; setStatus('error'); setMessage(error.name === 'TimeoutError' ? 'We could not confirm receipt. Retry or use the email draft.' : 'We could not confirm receipt. Please retry or use the email draft.'); }
  };
  if (!available) return null;
  return <div className="enquiry-delivery" style={{ padding: '16px', marginTop: '16px', border: '1px solid #07348730', borderRadius: '16px' }}>
    {status !== 'sent' && <><label style={{ display: 'flex', gap: '10px', fontSize: '13px' }}><input type="checkbox" checked={consent} onChange={event => setConsent(event.target.checked)} disabled={status === 'sending'}/>I agree to send these details to ZIP LABAN and be contacted about my enquiry.</label><div hidden><label>Website<input name="website" tabIndex={-1} autoComplete="off" value={website} onChange={event => setWebsite(event.target.value)}/></label></div><button type="button" className="franchise-primary" style={{ marginTop: '12px' }} onClick={submit} disabled={!consent || status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send enquiry directly'}</button></>}
    {message && <p role={status === 'error' ? 'alert' : 'status'} style={{ marginTop: '12px', fontSize: '13px' }}>{message}</p>}
  </div>;
}
