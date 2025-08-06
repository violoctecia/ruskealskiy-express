'use client';

import '@/styles/blocks/formsection3.scss';
import Button from '../buttons/Button';
import { usePopupStore } from '@/stores/popupStore';
import {constants} from "@/constants";

export default function FormSection3() {
    const open = usePopupStore((s) => s.open);
    return (
        <section className="form-section3">
            <div className="container">
                <div className="wrapper">
                    <div className="text">
                        <h2 className="h2">забронируйте экскурсию
                            прямо сейчас!</h2>
                        <p>Оставьте заявку онлайн или свяжитесь с нами по телефону</p>
                        <div className="buttons">
                            <Button onClick={open}>Заполнить форму</Button>
                            <Button className="green" href={`tel:${constants.phoneValueCleared}`}>
                                {constants.phoneValue}
                            </Button>
                        </div>
                    </div>
                    <div className="image">
                        <img src="/images/formsection3.png" loading="lazy" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}