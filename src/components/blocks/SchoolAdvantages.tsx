'use client';
import Button from '../buttons/Button';
import '@/styles/blocks/additional.scss';
import { usePopupStore } from '@/stores/popupStore';

export default function Component() {
    const open = usePopupStore((s) => s.open);

    return (
        <section className="additional-section">
            <div className="container">
                <h2 className="h2" style={{textAlign: 'center'}}>НАШИ ПРЕИМУЩЕСТВА</h2>
                <div className="list">
                    <div className="block">
                        <h3 className="h2">ГАРАНТИЯ ЗАКОННОСТИ</h3>
                        <div className="info">
                            <p className="text">Строго соблюдаются все законодательные нормы при организации экскурсий:
                                оформляются официальные разрешения, согласовываются маршруты с ГИБДД и обеспечивается
                                полная безопасность.</p>
                            <div className="icon">
                                <img src="/images/protect.svg" loading="lazy" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="block">
                        <h3 className="h2">ПОЛНАЯ ПРОЗРАЧНОСТЬ</h3>
                        <div className="info">
                            <p className="text">Мы предоставляем полный набор всей информации для успешной организации
                                экскурсий: коммерческое предложение, фото с экскурсий и другие материалы, которые
                                помогут вам сделать выбор.</p>
                            <div className="icon">
                                <img src="/images/docs.svg" loading="lazy" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="block">
                        <h3 className="h2">ЛУЧШИЕ УСЛОВИЯ</h3>
                        <div className="info">
                            <p className="text">Наше многолетнее партнёрство с туристическими объектами Карелии позволяет предлагать вам экскурсии по выгодным для вас ценам.</p>
                            <Button onClick={open} isWhite>Оставить заявку</Button>
                        </div>
                    </div>
                    <div className="block">
                        <h3 className="h2">ГОСУДАРСТВЕННЫЕ ЗАКАЗЧИКИ</h3>
                        <div className="info">
                            <p className="text">Нам доверяют государственные заказчики! Мы профессионально организуем детские экскурсии для самых строгих клиентов.</p>
                            <Button isWhite onClick={open}>Оставить заявку</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
