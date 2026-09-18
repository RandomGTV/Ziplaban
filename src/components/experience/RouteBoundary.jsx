import React from 'react';
export default class RouteBoundary extends React.Component {
 state = { failed: false };
 static getDerivedStateFromError() { return { failed: true }; }
 render() {
  if (this.state.failed) return <div className="zip-route-loading" role="alert"><h1>This page couldn’t load.</h1><p>Please check your connection and try again.</p><button onClick={() => window.location.reload()}>Reload page</button></div>;
  return this.props.children;
 }
}
