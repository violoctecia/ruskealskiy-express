'use client'

import { useUserStore } from '@/stores/formStore';
import "@/styles/buttons/Input.scss"

type Props = {
    placeholder: string;
    id: string;
    className?: string;
    type: 'name' | 'surname';
};

export default function Component({ placeholder, id, className, type }: Props) {
    const name = useUserStore((state) => state.name);
    const surname = useUserStore((state) => state.surname);

    const setName = useUserStore((state) => state.setName);
    const setSurname = useUserStore((state) => state.setSurname);

    // Выбор значения и функции обновления в зависимости от типа
    const value = type === 'name' ? name : surname;
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        if (type === 'name') setName(val);
        else if (type === 'surname') setSurname(val);
    };

    const classes = ['main-input', className].filter(Boolean).join(' ');
    return (
        <input
            type="text"
            id={id}
            name={id}
            className={classes}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            autoComplete={type === 'surname' ? 'family-name' : type}
            required
        />
    );
}
