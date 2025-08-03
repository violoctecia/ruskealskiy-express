'use client';
import { usePopupStore } from '@/stores/popupStore';

import Button from '../buttons/Button';
import { constants } from '@/constants';
import "@/styles/blocks/formsection2.scss"
export default function Component() {
    const open = usePopupStore((s) => s.open);

    return (
        <section className="form-section2">
            <div className="container">
                <div className="wrapper">
                    <div className="text">
                        <h2 className="h2">забронируйте экскурсию прямо сейчас!</h2>
                        <p>Оставьте заявку онлайн или свяжитесь с нами по телефону</p>
                    </div>
                    <div className="buttons">
                        <Button onClick={open}>Заполнить форму</Button>
                        <Button isWhite href={`tel:${constants.phoneValueCleared}`}>
                            {constants.phoneValue}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
