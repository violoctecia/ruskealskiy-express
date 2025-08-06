import Certificate from '@/components/blocks/Certificate';
import Breadcrumbs from '@/components/blocks/Breadcrumbs';
import FormSection from '@/components/blocks/FormSection';
import Gallery from '@/components/blocks/Gallery';
import CertConditions from '@/components/blocks/CertConditions';

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
            <CertConditions/>
            <FormSection />
            <Gallery title="ваш отдых запомнится надолго!" images={[
                '/images/gallery-cert-desktop.png',
                '/images/gallery-cert1.png',
                '/images/gallery-cert2.png',
                '/images/gallery-cert3.png',
                '/images/gallery-cert4.png',
            ]} />
        </main>
    );
}
