import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-brand-bg text-white relative selection:bg-brand-accent/30 selection:text-brand-accent">
      
      {/* Advanced Global Ambient Nebula Fluid Vectors */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-purple/10 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[140px] pointer-events-none z-0" />
      
      {/* Persistent Interface Layout Controls */}
      <Navbar />

      {/* Structural Child Outlet Node View Contexts */}
      <main className="relative z-10 max-w-7xl mx-auto">
        <Outlet />
      </main>

    </div>
  );
}