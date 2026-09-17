import React from 'react';
import GlobalNavbar from './navigation/GlobalNavbar';

export default function BrandNavigation({ onOpenSearch, light, home }) {
  return <GlobalNavbar onOpenSearch={onOpenSearch} light={light} />;
}
