import '@/styles/blocks/journal.scss';
import Button from '../buttons/Button';
import Link from 'next/link';

type Props = {
    isCleared?: boolean;
};
export default function Component({ isCleared }: Props) {
    const items = [
        {
            img: '/images/journal1.png',
            title: 'Рускеальский экспресс: дыхание истории',
            desc: 'Вы уже слышали о Рускеальском экспрессе? Это поезд, движущийся с помощью паровозной тяги и курсирующий между Сортавалой и Рускеалой. Локомотив был выпущен в середине XX века, внутреннее убранство создано по образцу и подобию вагонов XVIII-XIX веков',
            href: '/journal/ruskealskii-ekspress-dihanie-istorii',
        },
        {
            img: '/images/journal2.png',
            title: 'В Карелию на Рускеальском экспрессе',
            desc: 'Экскурсионный тур в Карелию — это увлекательная возможность получить все и сразу. Да, это возможно, ведь с нашей компанией вы забываете обо всех невзгодах, связанных с поездкой. Мы организуем экскурсии из Санкт-Петербурга в Карелию на поезде.',
            href: '/journal/v-kareliyu-na-ruskealskom-ekspresse',
        },
        {
            img: '/images/journal3.png',
            title: 'Экскурсии в горный парк Рускеала на легендарном Ретропоезде',
            desc: 'Карелия — это место, куда стремятся путешественники со всей страны. Здесь каждый найдет, что посмотреть: Кижи и Валаам, Ладожские шхеры и водопад Кивач, Сортавала и горный парк Рускеала.',
            href: '/journal/ekskursii-v-gorny-park-ruskeala-na-legendarnom-retropoezde',
        },
    ];
    return (
        <section className="journal-section">
            <div className="container">
                {!isCleared && <h2 className="h2">журнал «вестник экспресса»</h2>}
                <div className="list">
                    {items.map((i, index) => (
                        <Link key={index} href={i.href}>
                            <div className="img">
                                <img src={i.img} loading={isCleared ? 'eager' : 'lazy'} alt="" />
                            </div>
                            <p className="title">{i.title}</p>
                            <p className="desc">{i.desc}</p>
                        </Link>
                    ))}
                </div>
                {!isCleared && (
                    <Button href="/journal" className="all-articles">
                        Читать все статьи
                    </Button>
                )}
            </div>
        </section>
    );
}
