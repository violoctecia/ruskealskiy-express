'use client';

import { usePopupStore } from '@/stores/popupStore';
import '@/styles/modals/form.scss';
import InputText from '../buttons/InputText';
import InputPhone from '../buttons/InputPhone';
import InputCheckbox from '../buttons/InputCheckbox';
import Button from '../buttons/Button';
import { useEffect, useState } from 'react';
import { lockBodyScroll, unlockBodyScroll } from '@/composables/bodyScrollLock';
import { handleSubmit } from '@/composables/formSubmit';

export default function Component() {
    const { isOpen, close } = usePopupStore();
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (!isOpen) return;

        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        const originalPaddingRight = document.body.style.paddingRight;

        lockBodyScroll();
        if (scrollbarWidth > 0) {
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        }

        const timeout = setTimeout(() => setIsActive(true), 0);

        return () => {
            clearTimeout(timeout);
            unlockBodyScroll();
            document.body.style.paddingRight = originalPaddingRight;
            setIsActive(false);
        };

    }, [isOpen]);

    if (!isOpen) return null;

    const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            close();
        }
    };

    return (
        <div className={`modal ${isActive ? 'modal--active' : ''}`}>
            <div className="modal__wrapper" onClick={handleBackgroundClick}>
                <div className="modal__content">
                    <button onClick={close} className="close" aria-label="Закрыть модалку">
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L16 16M1 16L16 1" stroke="#ed7144" />
                        </svg>
                    </button>
                    <p className="title">забронируйте экскурсию онлайн</p>
                    <p className="subtitle">Оставьте свои данные и мы свяжемся с вами</p>

                    <form name="form2" onSubmit={handleSubmit}>
                        <input type="hidden" name="form-name" value="form2" />
                        <div className="inputs">
                            <InputText placeholder="Введите имя" type="name" id="name" />
                            <InputText placeholder="Введите фамилию" type="surname" id="surname" />
                        </div>
                        <InputPhone className="phone" />
                        <InputCheckbox />
                        <Button type="submit">Отправить заявку</Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
