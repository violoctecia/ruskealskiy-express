import Breadcrumbs from '@/components/blocks/Breadcrumbs';
import ForSchool from '@/components/blocks/ForSchool';
import FormSection from '@/components/blocks/FormSection';
import Gallery from '@/components/blocks/Gallery';
import SchoolAdvantages from '@/components/blocks/SchoolAdvantages';

import type { Metadata } from 'next';
export const metadata: Metadata = {
    title: '',
    description: '',
    keywords: '',
};

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
            <SchoolAdvantages/>
            <FormSection />
            <Gallery title="ваш отдых запомнится надолго!" images={[
                '/images/gallery-school-desktop.png',
                '/images/gallery-school1.png',
                '/images/gallery-school2.png',
                '/images/gallery-school3.png',
                '/images/gallery-school4.png',
            ]} />
        </main>
    );
}
