'use client';
import Button from '../buttons/Button';
import '@/styles/blocks/additional.scss';
import { usePopupStore } from '@/stores/popupStore';

export default function Component() {
    const open = usePopupStore((s) => s.open);

    return (
        <section className="additional-section">
            <div className="container">
                <h2 className="h2" style={{textAlign: 'center'}}>условия</h2>
                <div className="list">
                    <div className="block">
                        <h3 className="h2">любой тип сертификата</h3>
                        <div className="info">
                            <p className="text">Отправим электронный сертификат получателю за вас или подарите его сами, распечатав в любой студии печати. Сертификат применяется при любом виде обращения в службу бронирования.</p>
                            <div className="icon">
                                <img src="/images/gift.svg" loading="lazy" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="block">
                        <h3 className="h2">Остаток не сгорает!</h3>
                        <div className="info">
                            <p className="text">Если номинал подарочного сертификата на поездку или отдых больше стоимости заказа, остаток не сгорает: вы сможете воспользоваться им в будущих путешествиях. <span style={{textDecoration: 'underline'}}>Срок действия сертификата - бессрочный.</span></p>
                            <div className="icon">
                                <img src="/images/safe.svg" loading="lazy" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="block">
                        <h3 className="h2">ЛЮБОЕ КОЛИЧЕСТВО ГОСТЕЙ</h3>
                        <div className="info">
                            <p className="text">Ваш подарочный сертификат может быть групповым и может быть рассчитан на любое количество гостей!</p>
                            <Button onClick={open} isWhite>Оставить заявку</Button>
                        </div>
                    </div>
                    <div className="block">
                        <h3 className="h2">На все виды путешествий</h3>
                        <div className="info">
                            <p className="text">Распространяется на любой вид поездки: групповой, индивидуальный, школьный тур поездку на ретропоезде в любом направлении.</p>
                            <Button isWhite onClick={open}>Оставить заявку</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
