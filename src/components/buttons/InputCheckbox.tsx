'use client';

import { useUserStore } from '@/stores/formStore';
import '@/styles/buttons/Input.scss';
import Link from 'next/link';

export default function CheckboxConsent() {
    const checkbox = useUserStore((state) => state.checkbox);
    const setCheckbox = useUserStore((state) => state.setCheckbox);

    return (
        <div className="checkboxWrapper">
            <input
                type="checkbox"
                id="checkbox"
                name="checkbox"
                required
                checked={checkbox}
                onChange={(e) => setCheckbox(e.target.checked)}
            />
            <label htmlFor="checkbox" onClick={(e) => e.preventDefault()}>
                Я соглашаюсь на обработку своих персональных данных и с условиями <Link href='/privacy-policy'>Политики конфиденциальности</Link>
            </label>
        </div>
    );
}
