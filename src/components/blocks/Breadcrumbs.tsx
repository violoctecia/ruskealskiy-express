import Link from 'next/link';

type BreadcrumbItem = {
    label: string;
    href?: string;
};

type BreadcrumbsProps = {
    items: BreadcrumbItem[];
};

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    return (
        <div className="container breadcrumbs">
            <nav aria-label="breadcrumbs">
                <ul>
                    {items.map((item, index) => {
                        const isLast = index === items.length - 1;
                        return (
                            <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
                                {!isLast && item.href ? (
                                    <Link href={item.href}>
                                        {item.label}
                                    </Link>
                                ) : (
                                    <span>{item.label}</span>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
}
