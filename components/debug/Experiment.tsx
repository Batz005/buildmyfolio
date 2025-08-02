'use client';

import { useEffect } from 'react';

export default function Experiment() {
  console.log('[1] This logs during rendering');

  if (typeof window === 'undefined') {
    console.log('[2] Server: window is undefined');
  } else {
    console.log('[3] Client: window is defined');
  }

  const domAction = () => {
    console.log('[4] Trying DOM access...');
    const el = document.getElementById('non-existent');
    console.log('[5] Got element:', el);
  };

  useEffect(() => {
    console.log('[6] useEffect running on client');
    domAction();
  }, []);

  return (
    <div className="p-6 border border-primary rounded-xl">
      <h2 className="text-xl font-bold">Experiment</h2>
      <p>This component logs messages to console.</p>
    </div>
  );
}