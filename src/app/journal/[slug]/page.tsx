import Breadcrumbs from '@/components/blocks/Breadcrumbs';
import Image from 'next/image';

type tParams = Promise<{ slug: string[] }>;
import { notFound } from 'next/navigation';

import type { Metadata } from 'next';
export const metadata: Metadata = {
    title: '',
    description: '',
    keywords: '',
};

export default async function JournalPageArticle({ params }: { params: tParams }) {
    const { slug } = await params;

    let article;
    try {
        article = (await import(`@/data/articles/${slug}.json`)).default;
    } catch (error) {
        return notFound();
    }

    const breadcrumbItems = [
        { label: 'Главная страница', href: '/' },
        { label: 'Журнал', href: '/journal' },
        { label: article.title, href: `/journal/${slug}` },
    ];

    return (
        <main className='JournalPageArticle'>
            <div className="container">
                <h1 className="h2 safe-top" style={{ textAlign: 'start' }}>
                    {article.title}
                </h1>
            </div>
            <Breadcrumbs items={breadcrumbItems} />
            <div className="container article">
                <div className="image">
                    <Image src={article.img} priority alt="" fill />
                </div>
                <div className="content">
                    <div dangerouslySetInnerHTML={{ __html: article.text }}/>
                    <p>Опубликовано: <strong>{article.date}</strong></p>
                </div>
                <div className="logo">
                    <img src="/images/redaction.png" loading='lazy' alt="" width={150} height={150}/>
                    <p>редакция рускеальского экспресса</p>
                </div>
            </div>
        </main>
    );
}
