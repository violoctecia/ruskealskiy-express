import Link from 'next/link';
import "@/styles/buttons/Button.scss"

type Props = {
    href?: string;
    target?: string;
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    type?: 'button' | 'submit';
    isWhite?: boolean;
};

export default function Button({ href, target, children, onClick, className = '', type = 'button', isWhite = false }: Props) {
    const classes = ['main-button', isWhite ? 'white' : '', className].filter(Boolean).join(' ');

    if (href) {
        return (
            <Link href={href} target={target} className={classes}>
                {children}
            </Link>
        );
    }
    return (
        <button type={type} onClick={onClick} className={classes}>
            {children}
        </button>
    );
}
