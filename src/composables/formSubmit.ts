import { useUserStore } from '@/stores/formStore';
import { toast } from 'react-toastify';

export const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { name, surname, phone, checkbox } = useUserStore.getState();

    const isPhoneValid = (phone: string): boolean => {
        return !phone.includes('_') && phone.length === 18;
    };

    if (!isPhoneValid(phone)) {
        toast.error('Пожалуйста, полностью заполните номер телефона.');
        return;
    }

    const formData = new URLSearchParams();
    formData.append('name', `${name} ${surname}`);
    formData.append('phone', phone);
    // formData.append('checkbox', checkbox ? 'true' : 'false');

    try {
        const response = await fetch('/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData.toString(),
        });

        if (!response.ok) {
            throw new Error('Ошибка сети');
        }

        toast.success('Форма успешно отправлена!');

        // Очистка полей формы
        const store = useUserStore.getState();
        store.setName('');
        store.setSurname('');
        store.setPhone('');
        store.setCheckbox(false);

    } catch (error) {
        toast.error('Произошла ошибка при отправке формы. Попробуйте ещё раз.');
        console.error(error);
    }
};
