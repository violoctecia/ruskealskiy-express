'use client';
import { usePopupStore } from '@/stores/popupStore';
import Button from '../buttons/Button';
import '@/styles/blocks/indexcsection.scss';

export default function Component() {
    const open = usePopupStore((s) => s.open);
    return (
        <section className="ind-exc-section">
            <div className="container">
                <h2 className="h2">Индивидуальная экскурсия</h2>
                <p className="subtitle">
                    Для тех, кто хочет индивидуальное обслуживание, мы можем предложить множество уникальных маршрутов с полностью
                    индивидуальным трансфером: вы отправитесь в уникальный тур к таёжным просторам Карелии, чтобы по-настоящему открыть
                    красоту северной природы сразу со всех ракурсов — с воздуха, воды и земли
                </p>
                <div className="wrapper">
                    <div className="block">
                        <p className="title">У вас будет возможность:</p>
                        <ul>
                            <li className="thin-text">Насладиться красотой Карелии в своей компании</li>
                            <li className="thin-text">
                                Добавить в программу то, что хотите посмотреть (обсуждается с гидом в индивидуальном порядке)
                            </li>
                            <li className="thin-text">Внимание гида и экскурсия только для вас</li>
                        </ul>
                    </div>
                    <div className="block">
                        <div className="title">
                            Группы <span className="thin-text">любого размера</span>
                        </div>
                        <div className="title">
                            Стоимость на человека: <span className="thin-text">от 25 760 руб. без учета транспорта</span>
                        </div>
                        <div className="title">
                            Даты: <span className="thin-text">Уточняйте по телефону</span>
                        </div>
                    </div>
                    <Button onClick={open}>Оставить заявку</Button>
                </div>
            </div>
        </section>
    );
}
