'use client';

import { useUserStore } from '@/stores/formStore';
import "@/styles/buttons/Input.scss";
import { InputMask } from '@react-input/mask';

type Props = {
    className?: string; 
};

export default function Component({ className = '' }: Props) {
    const phone = useUserStore((state) => state.phone);
    const setPhone = useUserStore((state) => state.setPhone);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    };

    return (
        <InputMask
            mask="+7 (___) ___-__-__"
            replacement={{ _: /\d/ }}
            value={phone}
            name="phone"
            autoComplete="tel"
            onChange={handleChange}
            required
            placeholder="+7 (999) 999-99-99"
            className={`main-input ${className}`}
        />
    );
}
