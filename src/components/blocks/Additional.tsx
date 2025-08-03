import Button from '../buttons/Button';
import '@/styles/blocks/additional.scss';

export default function Component() {
    return (
        <section className="additional-section">
            <div className="container">
                <h2 className="h2">дополнительные услуги</h2>
                <div className="list">
                    <div className="block">
                        <h3 className="h2">фОТО-КУПЕ</h3>
                        <div className="info">
                            <p className="text">Фотографии с реквизитом, которые можно распечатать и забрать с собой</p>
                            <p className="price">250 руб.</p>
                        </div>
                    </div>
                    <div className="block">
                        <h3 className="h2">Билет в горный парк Рускеала</h3>
                        <div className="info">
                            <p className="text">Билет можно купить через специальный терминал прямо в поезде</p>
                            <p className="price">600 руб.</p>
                        </div>
                    </div>
                    <div className="block">
                        <h3 className="h2">Вагон-ресторан</h3>
                        <div className="info">
                            <p className="text">В наличии: горячие и холодные блюда, десерты, снеки и напитки</p>
                            <Button isWhite>Смотреть меню</Button>
                        </div>
                    </div>
                    <div className="block">
                        <h3 className="h2">индивидуальный запрос</h3>
                        <div className="info">
                            <p className="text">Сообщите о ваших пожеланиях и мы постараемся их осуществить</p>
                            <Button isWhite>Оставить заявку</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
