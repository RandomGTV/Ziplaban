import React, { useEffect, useRef } from 'react';

export default function LiquidHeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Liquid surface nodes (spring grid)
    const nodeCount = Math.floor(width / 24);
    const nodes = [];
    const baseHeight = height * 0.72;

    for (let i = 0; i <= nodeCount; i++) {
      nodes.push({
        x: (i / nodeCount) * width,
        y: baseHeight,
        targetY: baseHeight,
        vy: 0,
      });
    }

    // Floating Cream & Pistachio Flecks
    const particles = [];
    const fleckColors = ['#10B981', '#34D399', '#D97706', '#FFFFFF', '#E0F2FE'];
    for (let i = 0; i < 28; i++) {
      particles.push({
        x: Math.random() * width,
        y: baseHeight + (Math.random() * 80 - 40),
        size: Math.random() * 6 + 3,
        color: fleckColors[Math.floor(Math.random() * fleckColors.length)],
        vx: (Math.random() - 0.5) * 0.6,
        vy: 0,
        bobPhase: Math.random() * Math.PI * 2,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 2,
      });
    }

    // Splash drops
    const splashes = [];

    // Mouse tracking with velocity
    let mouse = { x: -1000, y: -1000, lastX: -1000, lastY: -1000, speed: 0 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const newX = e.clientX - rect.left;
      const newY = e.clientY - rect.top;
      const dx = newX - mouse.x;
      const dy = newY - mouse.y;
      mouse.speed = Math.sqrt(dx * dx + dy * dy);
      mouse.lastX = mouse.x;
      mouse.lastY = mouse.y;
      mouse.x = newX;
      mouse.y = newY;

      // Disturb nearest water nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        const dist = Math.abs(node.x - mouse.x);
        if (dist < 80 && Math.abs(mouse.y - node.y) < 140) {
          node.vy += (dy * 0.15) * (1 - dist / 80);
        }
      }
    };

    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      // Big ripple
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        const dist = Math.abs(node.x - clickX);
        if (dist < 120) {
          node.vy -= 18 * (1 - dist / 120);
        }
      }

      // Erupt milky splash droplets
      for (let j = 0; j < 14; j++) {
        const angle = -Math.PI / 2 + (Math.random() - 0.5) * 1.6;
        const velocity = Math.random() * 9 + 4;
        splashes.push({
          x: clickX,
          y: Math.min(clickY, baseHeight),
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity,
          radius: Math.random() * 5 + 3,
          color: Math.random() > 0.3 ? '#FFFFFF' : '#009BE8',
          alpha: 1,
        });
      }
    };

    const handleTouchMove = (e) => {
      if (!e.touches || e.touches.length === 0) return;
      const touch = e.touches[0];
      const rect = canvas.getBoundingClientRect();
      const newX = touch.clientX - rect.left;
      const newY = touch.clientY - rect.top;
      const dy = newY - (mouse.y === -1000 ? newY : mouse.y);
      mouse.x = newX;
      mouse.y = newY;

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        const dist = Math.abs(node.x - newX);
        if (dist < 90 && Math.abs(newY - node.y) < 160) {
          node.vy += (dy * 0.2) * (1 - dist / 90);
        }
      }
    };

    const handleTouchStart = (e) => {
      if (!e.touches || e.touches.length === 0) return;
      const touch = e.touches[0];
      handleClick({ clientX: touch.clientX, clientY: touch.clientY });
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });

    // Main animation loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Spring physics constant
      const tension = 0.035;
      const damping = 0.045;
      const spread = 0.22;

      // Update node springs
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        const diff = node.targetY - node.y;
        node.vy += diff * tension - node.vy * damping;
        node.y += node.vy;
      }

      // Wave spread to neighbors
      for (let pass = 0; pass < 2; pass++) {
        for (let i = 0; i < nodes.length; i++) {
          if (i > 0) {
            nodes[i - 1].vy += spread * (nodes[i].y - nodes[i - 1].y);
          }
          if (i < nodes.length - 1) {
            nodes[i + 1].vy += spread * (nodes[i].y - nodes[i + 1].y);
          }
        }
      }

      // Draw creamy liquid body
      const gradient = ctx.createLinearGradient(0, baseHeight - 40, 0, height);
      gradient.addColorStop(0, 'rgba(0, 155, 232, 0.07)');
      gradient.addColorStop(0.3, 'rgba(240, 249, 255, 0.85)');
      gradient.addColorStop(1, 'rgba(255, 253, 247, 0.98)');

      ctx.beginPath();
      ctx.moveTo(0, height);
      ctx.lineTo(nodes[0].x, nodes[0].y);

      for (let i = 0; i < nodes.length - 1; i++) {
        const xc = (nodes[i].x + nodes[i + 1].x) / 2;
        const yc = (nodes[i].y + nodes[i + 1].y) / 2;
        ctx.quadraticCurveTo(nodes[i].x, nodes[i].y, xc, yc);
      }
      ctx.lineTo(nodes[nodes.length - 1].x, nodes[nodes.length - 1].y);
      ctx.lineTo(width, height);
      ctx.closePath();

      ctx.fillStyle = gradient;
      ctx.fill();

      // Top glistening milk crest line
      ctx.lineWidth = 3;
      ctx.strokeStyle = 'rgba(0, 155, 232, 0.28)';
      ctx.stroke();

      // Second soft highlight crest line
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.stroke();

      // Draw floating flecks
      particles.forEach((p) => {
        p.x += p.vx;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        p.bobPhase += 0.03;
        p.rotation += p.rotSpeed;
        const currentY = baseHeight + Math.sin(p.bobPhase) * 16;

        ctx.save();
        ctx.translate(p.x, currentY);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.shadowColor = 'rgba(0, 155, 232, 0.2)';
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.ellipse(0, 0, p.size, p.size * 0.65, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Update & Draw splash drops
      for (let s = splashes.length - 1; s >= 0; s--) {
        const drop = splashes[s];
        drop.x += drop.vx;
        drop.y += drop.vy;
        drop.vy += 0.35; // gravity
        drop.alpha -= 0.02;

        if (drop.alpha <= 0 || drop.y > height) {
          splashes.splice(s, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = drop.alpha;
        ctx.fillStyle = drop.color;
        ctx.beginPath();
        ctx.arc(drop.x, drop.y, drop.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto z-0 select-none"
      style={{ touchAction: 'none' }}
    />
  );
}
