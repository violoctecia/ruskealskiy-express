'use client';
import { usePopupStore } from '@/stores/popupStore';

import '@/styles/blocks/trains.scss';
import Button from '../buttons/Button';

export default function Component() {
    const open = usePopupStore((s) => s.open);
    const trains = [
        {
            h3: 'Ретропоезд',
            num: 'Поезд под № 925/926/933',
            texts: [
                {
                    title: 'Общий стилизованный вагон',
                    text: 'Место в шестиместном стилизованном купе от 3 220 ₽',
                },
                {
                    title: 'Вип-купе в вагоне № 2',
                    text: 'В цену билета входит: игристое, фруктовая тарелка, персональный официант. <br/> Стоимость за 4 пассажиров: от 13 110 ₽',
                },
                {
                    title: 'Детский вагон',
                    text: 'Вагон оборудован игровой зоной',
                },
                {
                    title: 'Финский вагон-ресторан № 20',
                    text: 'В летнее время финский вагон-ресторан № 20 отсутствует',
                },
            ],
            img: '/images/trains1.png',
        },
        {
            h3: 'Рускеальский экспресс',
            num: 'Поезд под № 921/922/923/924',
            texts: [
                {
                    title: 'Общий стилизованный вагон',
                    text: 'Место в шестиместном стилизованном купе от 3 220 ₽',
                },
                {
                    title: 'Купе I класса в вагоне № 1',
                    text: 'В стоимость билета входят: фруктовая тарелка и бутылка игристого. <br/> Стоимость купе (до 4 человек): от 13 110 ₽',
                },
                {
                    title: 'Вагон-ресторан царский № 3',
                    text: 'Билеты не продаются. Вход свободный, занять место можно при наличии свободных столов',
                },
                {
                    title: 'Старорусский вагон-ресторан № 30',
                    text: 'Стоимость 3 800 ₽',
                },
            ],
            img: '/images/trains2.png',
        },
    ];

    return (
        <section className="trains-section">
            <div className="container">
                <h2 className="h2">Поезда</h2>
                {trains.map((train, index) => (
                    <div className="train" key={index}>
                        <div className="img">
                            <img src={train.img} loading="lazy" alt="" />
                        </div>
                        <div className="content">
                            <h3>{train.h3}</h3>
                            <p className="num">{train.num}</p>
                            {train.texts.map((text, idx) => (
                                <div className="text" key={idx}>
                                    <h4>{text.title}</h4>
                                    <p dangerouslySetInnerHTML={{ __html: text.text }} />
                                </div>
                            ))}
                            <Button onClick={open}>Оставить заявку на бронирование</Button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
