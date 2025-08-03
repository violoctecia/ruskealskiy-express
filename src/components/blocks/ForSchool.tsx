'use client';

import '@/styles/blocks/certificate.scss';
import Button from '../buttons/Button';
import { usePopupStore } from '@/stores/popupStore';
import Image from 'next/image';

export default function Component() {
    const open = usePopupStore((s) => s.open);

    return (
        <section className="school-section">
            <div className="container">
                <div className="wrapper">
                    <h2 className="h2">Оформите школьную экскурсию на Рускеальский Экспресс</h2>
                    <p>
                        Организуйте незабываемую школьную экскурсию в Карелию на Рускеальском Экспрессе! Увлекательное путешествие на
                        ретропоезде, посещение горного парка Рускеала и познавательные программы для учеников. Групповые скидки, удобное
                        бронирование и безопасные условия.
                    </p>
                    <div className="image">
                        <Image priority src="/images/forschools.png" alt="" fill />
                    </div>
                    <Button onClick={open}>Оставить заявку на оформление</Button>
                </div>
            </div>
        </section>
    );
}
