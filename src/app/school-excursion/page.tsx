import Breadcrumbs from '@/components/blocks/Breadcrumbs';
import ForSchool from '@/components/blocks/ForSchool';
import FormSection from '@/components/blocks/FormSection';

export default function Component() {
    const breadcrumbItems = [
        { label: 'Главная страница', href: '/' },
        { label: 'Экскурсии для школьников', href: '/school-excursion' },
    ];
    return (
        <main>
            <div className="container">
                <h1 className="h2 safe-top" style={{ textAlign: 'start' }}>
                    Экскурсии для школьников
                </h1>
            </div>
            <Breadcrumbs items={breadcrumbItems} />
            <ForSchool/>
            <FormSection />
        </main>
    );
}
