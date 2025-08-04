'use client'
import '@/styles/blocks/hero.scss';
import Image from 'next/image';
import Button from '../buttons/Button';
import InputText from '../buttons/InputText';
import InputPhone from '../buttons/InputPhone';
import { handleSubmit } from '@/composables/formSubmit';

export default function Component() {
    return (
        <section className="hero" id="hero">
            <Image src="/images/herobg.png" alt="" fill priority quality={80} sizes="100vw" style={{ objectFit: 'cover', zIndex: -1 }} />

            <div className="container">
                <h1>
                    Рускеальский экспресс <br />и Ретропоезд купить билеты на экскурсии онлайн
                </h1>
                <div className="form-wrapper">
                    <p>
                        Рускеальский экспресс и Ретропоезд курсируют по маршруту Сортавала — Горный парк Рускеала. Актуальное расписание,
                        стоимость билетов и бронирование экскурсий онлайн доступны на нашем сайте и по телефону
                    </p>
                    <form name="form1" onSubmit={handleSubmit}>
                        <input type="hidden" name="form-name" value="form1" />
                        <InputText placeholder="Как вас зовут?" type="name" id="name" />
                        <InputPhone />
                        <Button type="submit">Отправить заявку</Button>
                    </form>
                </div>
            </div>
            
        </section>
    );
}
