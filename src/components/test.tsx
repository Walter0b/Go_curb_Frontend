import React, { useRef } from 'react';
import gsap from 'gsap';

const MyComponent: React.FC = () => {
    const authOverlayRef = useRef<HTMLDivElement>(null);

    let authAnimation: gsap.core.Timeline;

    const openAuthModal = () => {
        authAnimation = gsap.timeline({ defaults: { ease: 'power2.inOut' } })
            .to(authOverlayRef.current, { scaleY: 0.01, x: 1, opacity: 1, display: 'flex', duration: 0.4 })
            .to(authOverlayRef.current, { scaleY: 1, background: 'rgba(255,255,255,0.16)', duration: 0.6 })
            .to(authOverlayRef.current?.querySelector('#second') as Element, { scaleY: 1, opacity: 1, duration: 0.6 }, '-=0.4')
            .to(authOverlayRef.current?.querySelector('#third') as Element, { scaleY: 1, opacity: 1, duration: 0.4 }, '-=0.2')
            .to(authOverlayRef.current?.querySelector('#fourth') as Element, { background: 'rgba(255,255,255,0.3)', border: '1px solid rgba(255,255,255,0.3)', duration: 0.8 }, '-=0.4');
    };
    const closeAuthModal = () => {
        authAnimation.reverse().timeScale(-1.6);
    };

    return (
        <div className="w-full h-screen bg-gradient-to-tr from-cyan-400 to-cyan-700">
            <div ref={authOverlayRef} id="authOverlay" className="fixed z-10 left-0 top-0 h-full w-full flex items-center justify-center py-3 px-2 overflow-y-auto bg-white/80 backdrop-blur-sm scale-y-0 -translate-x-full opacity-0 origin-center">
                <div id="fourth" className="bg-white/0 max-w-sm m-auto mb-0 sm:mb-auto p-3 border border-white/0 rounded-2xl shadow-sm">
                   
                </div>
            </div>
            <div className="text-center">
                <button onClick={openAuthModal} className="bg-white text-cyan-400 font-semibold text-2xl rounded-md border-b-[3px] px-6 py-3 mt-16">Open</button>
            </div>
        </div>
    );
};

export default MyComponent;
