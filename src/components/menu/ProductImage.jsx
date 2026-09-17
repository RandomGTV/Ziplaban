import React, { useId, useState } from 'react';
const SOURCES = {bowls:'/images/menu-bowls.png',arrivals:'/images/menu-arrivals.png',classics:'/images/theme_board_2.jpg'};
export default function ProductImage({ product, className='', priority=false }) {
  const [failed,setFailed]=useState(false);
  const [loaded,setLoaded]=useState(false);
  const clipId=useId();
  const cols=product.imageAsset==='arrivals'?2:3;
  const canvas=product.imageAsset==='arrivals'?1024:1536;
  const crop=product.imageCrop || [(product.imageCell%cols)*512,Math.floor(product.imageCell/cols)*512,512,512];
  return <div className={`menu-product-image ${!loaded&&!failed?'is-loading':''} ${product.imageAsset==='classics'?'menu-product-image--original':''} ${className}`}>
    {failed ? <span className="menu-image-fallback">{product.name}</span> : <svg viewBox={crop.join(' ')} role="img" aria-label={product.name} preserveAspectRatio="xMidYMid meet">
      <defs><clipPath id={clipId}><rect x={crop[0]} y={crop[1]} width={crop[2]} height={crop[3]} /></clipPath></defs>
      <image clipPath={`url(#${clipId})`} href={SOURCES[product.imageAsset]} width={product.imageAsset==='classics'?1024:canvas} height={product.imageAsset==='classics'?682:canvas} onLoad={()=>setLoaded(true)} onError={()=>setFailed(true)} />
    </svg>}
    {priority && <link rel="preload" as="image" href={SOURCES[product.imageAsset]} />}
  </div>;
}
