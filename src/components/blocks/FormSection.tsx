import Button from '../buttons/Button';
import InputText from '../buttons/InputText';
import InputPhone from '../buttons/InputPhone';
import InputCheckbox from '../buttons/InputCheckbox'
import '@/styles/blocks/formsection.scss';

export default function Component() {
    return (
        <section className="form-section">
            <div className="container">
                <h2 className="h2">Забронируйте экскурсию прямо сейчас, заполнив заявку онлайн</h2>
                <form>
                    <div className="inputs">
                        <InputText placeholder="Введите имя" type="name" id="name" />
                        <InputText placeholder="Введите фамилию" type="surname" id="surname" />
                    </div>
                    <InputPhone className="phone"/>
                    <InputCheckbox/>
                    <Button type="submit">Отправить заявку</Button>
                </form>
            </div>
        </section>
    );
}
