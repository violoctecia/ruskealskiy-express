'use client';
import '@/styles/buttons/accordion.scss'
import { useRef, useState, useEffect } from 'react';

type AccordionProps = {
    title: string;
    children: React.ReactNode;
};

export default function Accordion({ title, children }: AccordionProps) {
    const [isOpened, setIsOpened] = useState(false);
    const bodyRef = useRef<HTMLDivElement>(null);

    const toggleAccordion = () => {
        setIsOpened((prev) => !prev);
    };

    useEffect(() => {
        const el = bodyRef.current;
        if (!el) return;

        if (isOpened) {
            el.style.height = el.scrollHeight + 'px';
        } else {
            el.style.height = '0px';
        }
    }, [isOpened]);

    return (
        <div className="accordion-item">
            <button aria-expanded={isOpened} className="accordion-button" onClick={toggleAccordion}>
                <span className="accordion-title">{title}</span>

                <span className="accordion-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.858398 11.5684H22.8584" stroke="#ED7144" strokeLinecap="square" />
                        <path d="M11.8584 0.568359V22.5684" stroke="#ED7144" strokeLinecap="square" />
                    </svg>
                </span>
            </button>

            <div className="accordion-body" ref={bodyRef} style={{ overflow: 'hidden', transition: 'height 0.3s ease' }}>
                <div className="accordion-body__content">{children}</div>
            </div>
        </div>
    );
}
