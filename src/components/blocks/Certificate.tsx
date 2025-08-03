'use client'

import '@/styles/blocks/certificate.scss';
import Button from '../buttons/Button';
import { usePopupStore } from '@/stores/popupStore';

type Props = {
    popupButton?: boolean;
};
export default function Component({ popupButton }: Props) {
    const open = usePopupStore((s) => s.open);

    return (
        <section className="certificate-section">
            <div className="container">
                <div className="wrapper">
                    <h2 className="h2">Подарочный Сертификат на Рускеальский Экспресс</h2>
                    <p>
                        Оригинальный подарок для тех, кого сложно удивить! Путешествие на Рускеальском Экспрессе можно подарить родным,
                        близким и коллегам. Вы можете легко оформить и оплатить подарочный сертификат
                    </p>
                    <img src="/images/podarochny-sertifikat.png" loading={popupButton ? 'eager' : 'lazy'} alt="" />
                    {!popupButton ? (
                        <Button href="/podarochnye-sertifikaty">Оформить подарочный сертификат</Button>
                    ) : (
                        <Button onClick={open}>Оставить заявку на оформление</Button>
                    )}
                </div>
            </div>
        </section>
    );
}
