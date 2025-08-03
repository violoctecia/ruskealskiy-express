import Breadcrumbs from '@/components/blocks/Breadcrumbs';
import Journal from '@/components/blocks/Journal';

export default function JournalPage() {
    const breadcrumbItems = [
        { label: 'Главная страница', href: '/' },
        { label: 'Журнал', href: '' },
    ];
    return (
        <main>
            <div className="container">
                <h1 className="h2 safe-top" style={{textAlign: 'start'}}>Журнал «Вестник экспресса»</h1>
            </div>
            <Breadcrumbs items={breadcrumbItems} />
            <Journal isCleared />
        </main>
    );
}
