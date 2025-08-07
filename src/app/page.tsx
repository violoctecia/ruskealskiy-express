import Hero from '@/components/blocks/Hero';
import Second from '@/components/blocks/Second';
import Trains from '@/components/blocks/Trains';
import ExcMsc from '@/components/blocks/ExcMsc';
import Tickets from '@/components/blocks/Tickets';
import FormSection from '@/components/blocks/FormSection';
import ExcOther from '@/components/blocks/ExcOther';
import About from '@/components/blocks/About';
import IndExc from '@/components/blocks/IndExc';
import FAQ from '@/components/blocks/FAQ';
import Journal from '@/components/blocks/Journal';
import Certificate from '@/components/blocks/Certificate';
import FormSection2 from '@/components/blocks/FormSection2';
import Additional from '@/components/blocks/Additional';
import FormSection3 from '@/components/blocks/FormSection3';
import Gallery from '@/components/blocks/Gallery';
import {
    ticketsDataMsc,
    ticketsDataSpb,
    ticketsDataSpb2,
    ExcSpb,
    ExcNoTrain,
    ticketsDataNoTrain,
    ticketsDataNoTrain2,
} from '@/data/homePageData';

import type { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'Ретропоезд «РУСКЕАЛЬСКИЙ ЭКСПРЕСС» КУПИТЬ БИЛЕТЫ | Официальный сайт',
    description: 'Официальный сайт Ретропоезд Рускеальский экcпресс: официальные цены, актуальное расписание, скидки и льготы для пенсионеров, детей, инвалидов, участников СВО и членов их семей, онлайн-бронирование билетов, туров и экскурсий на сайте',
    keywords: 'рускеальский экспресс, рускеальский экспресс билеты, рускеальский экспресс купить, рускеальский экспресс купить билеты, рускеальский экспресс расписание, рускеальский экспресс сортавала, рускеальский экспресс цена, сайт рускеальского экспресса',
};

export default function MainPage() {
    return (
        <main>
            <Hero />
            <Second />
            <Trains />
            <ExcMsc />
            <Tickets id="tickets-msc"
                     heading="Стоимость и даты экскурсии на Ретропоезде из Москвы"
                     tickets={ticketsDataMsc} />
            <FormSection />
            <ExcOther items={ExcSpb}
                      id="exc-spb"
                      title="Экскурсия на Рускеальском экспрессе из Санкт-Петербурга" />
            <Tickets id="tickets-spb"
                     heading="Стоимость и даты экскурсии на Ласточке из Санкт-петербурга"
                     tickets={ticketsDataSpb} />
            <Tickets id="tickets-spb2"
                     heading="Стоимость и даты экскурсии на Автобусе из Санкт-петербурга"
                     tickets={ticketsDataSpb2} />
            <Additional />
            <FormSection3 />
            <Gallery title="галерея фото" images={[
                '/images/gallery-desktop.png',
                '/images/gallery1.png',
                '/images/gallery2.png',
                '/images/gallery3.png',
                '/images/gallery4.png',
            ]} />
            <ExcOther
                items={ExcNoTrain}
                id="exc-no-train"
                title="Экскурсии в Карелию без туристического поезда" />
            <Tickets
                id="tickets-no-train"
                heading="Стоимость и даты экскурсии без туристического поезда из Санкт-петербурга"
                tickets={ticketsDataNoTrain}
            />
            <Tickets
                id="tickets-no-train2"
                heading="Стоимость и даты экскурсии без туристического поезда из москвы"
                tickets={ticketsDataNoTrain2}
            />
            <FormSection2 />
            <About />
            <IndExc />
            <Certificate />
            <FAQ />
            <Journal />
        </main>
    );
}
