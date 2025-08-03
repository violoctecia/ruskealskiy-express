import Certificate from '@/components/blocks/Certificate';
import Breadcrumbs from '@/components/blocks/Breadcrumbs';
import FormSection from '@/components/blocks/FormSection';

export default function Component() {
    const breadcrumbItems = [
        { label: 'Главная страница', href: '/' },
        { label: 'Подарочный сертификат', href: '' },
    ];
    return (
        <main>
            <div className="container">
                <h1 className="h2 safe-top" style={{ textAlign: 'start' }}>
                    Оформить подарочный сертификат
                </h1>
            </div>
            <Breadcrumbs items={breadcrumbItems} />
            <Certificate popupButton/>
            <FormSection />
        </main>
    );
}
