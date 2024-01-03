import React, { useEffect } from 'react';
import DynamicForm from "@components/modal/DynamicForm";
import { FetchData, FormField } from '@utils/models/struc';
import gsap from 'gsap'
interface ModalProps {
    authOverlayRef: React.RefObject<HTMLDivElement>;
    isModalOpen: boolean;
    handleFormClick: () => void;
    fields: FormField[];
    formData: FetchData;
}

const Modal: React.FC<ModalProps> = ({ authOverlayRef, isModalOpen, handleFormClick, fields, formData }) => {
    useEffect(() => {
        const animateModal = () => {
            if (isModalOpen) {
                gsap.timeline({ defaults: { ease: 'power2.inOut' } })
                    .to(authOverlayRef.current, { scaleY: 0.01, x: 1, opacity: 1, display: 'flex', duration: 0.4 })
                    .to(authOverlayRef.current, { scaleY: 1, background: 'rgba(255,255,255,0.16)', duration: 0.6 })
                    .to(authOverlayRef.current?.querySelector('.modal-content') as Element, { scaleY: 1, opacity: 1, duration: 0.6 }, '-=0.4')
                    .to(authOverlayRef.current?.querySelector('.modal-inner') as Element, { scaleY: 1, opacity: 1, duration: 0.4 }, '-=0.2')
                    .to(authOverlayRef.current?.querySelector('.modal-overlay') as Element, { background: 'rgba(255,255,255,0.3)', border: '1px solid rgba(255,255,255,0.3)', duration: 0.8 }, '-=0.4');
            } else {
                gsap.timeline({ defaults: { ease: 'power2.inOut' } })
                    .to(authOverlayRef.current?.querySelector('.modal-overlay') as Element, { background: 'rgba(255,255,255,0)', border: '1px solid rgba(255,255,255,0)', duration: 0.4 })
                    .to(authOverlayRef.current?.querySelector('.modal-inner') as Element, { scaleY: 0, opacity: 0, duration: 0.6 }, '-=0.2')
                    .to(authOverlayRef.current?.querySelector('.modal-content') as Element, { scaleY: 0, opacity: 0, duration: 0.4 }, '-=0.4')
                    .to(authOverlayRef.current, { scaleY: 0, x: -1, opacity: 0, display: 'none', duration: 0.8 });
            }
        };

        animateModal();
    }, [isModalOpen, authOverlayRef]);
    return (
        <div ref={authOverlayRef} className={`modal-overlay fixed inset-0 z-20 overflow-y-auto ${isModalOpen ? 'block' : 'hidden'}`} onClick={handleFormClick}>
            <div className="modal-inner fixed inset-0 w-full h-full bg-black/40 " >
                <div className="flex justify-center items-center h-full px-4 py-8">
                    <div className="modal-content" onClick={(event) => event.stopPropagation()}>
                        <DynamicForm fields={fields} FetchData={formData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
