'use client';


import Button from '../buttons/Button';
import { scrollTo } from '@/composables/scrollTo';
import '@/styles/blocks/excother.scss';
// Тип для одного пункта времени
type TimeItem = {
    time: string;
    timeText?: string;
    title: string;
    text?: string;
};

// Тип для временного блока (например, times[1] или times[2])
type TimeBlock = {
    title: string;
    items: TimeItem[];
};

// Тип для маршрутов
type Routes = {
    title: string;
    items: string[][];
};

// Общий тип для items
type Items = {
    times: TimeBlock[];
    routes: Routes;
};

// Тип пропсов
type Props = {
    id: string;
    title: string;
    items: Items;
};

export default function Component({ id, title, items }: Props) {
    return (
        <>
            <section className="exc-other" id={id}>
                <div className="container">
                    <h2 className="h2">{title}</h2>
                    <div className="list times">
                        {items.times.map((i, idx) => (
                            <div className="col" key={idx}>
                                <h3 className="h2 title">{i.title}</h3>
                                <div className="times-list">
                                    {i.items.map((ii, idx2) => (
                                        <div className="row" key={idx2}>
                                            <div className="time">
                                                <p className='time-value'>{ii.time}</p>
                                                {ii.timeText && <p className="thin-text">{ii.timeText}</p>}
                                            </div>

                                            <div className="text">
                                                <p className="time-title">{ii.title}</p>
                                                {ii.text && <p className="time-text">{ii.text}</p>}
                                            </div>
                                        </div>
                                    ))}
                                    <Button onClick={() => scrollTo(`route-${i.title}`)}>Смотреть маршрут</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="routes">
                        <h3 className="h2 title">{items.routes.title}</h3>
                        <div className="list">
                            {items.routes.items.map((i, key) => (
                                <div className="col" key={key} id={`route-${items.times[key].title}`}>
                                    <span>{items.times[key].title}:</span>
                                    {i.map((ii, key) => (
                                        <p key={key}>{ii}</p>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
