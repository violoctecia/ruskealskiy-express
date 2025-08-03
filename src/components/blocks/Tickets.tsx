'use client';
import { usePopupStore } from '@/stores/popupStore';
import Button from '@/components/buttons/Button';
import { constants } from '@/constants';
import "@/styles/blocks/tickets.scss"

type Ticket = {
    title: string;
    included: string[];
    priceCurrent: string;
    priceOld?: string;
    discount?: string;
};

type TicketsSectionProps = {
    heading: string;
    tickets: Ticket[];
    id: string;
};

export default function TicketsSection({ heading, tickets, id }: TicketsSectionProps) {
      const open = usePopupStore((s) => s.open);

    return (
        <section className="tickets-section" id={id}>
            <div className="container">
                <h2 className="h2">{heading}</h2>
                <div className="tickets-wrapper">
                    {tickets.map((ticket, index) => (
                        <div className="ticket" key={index}>
                            <h3>
                                <span>Тариф </span> {ticket.title}
                            </h3>
                            <div className="info">
                                <p>В стоимость включено:</p>
                                <ul>
                                    {ticket.included.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="last">
                                <div className="price">
                                    <span className="price-current">{ticket.priceCurrent}</span>
                                    {ticket.priceOld && ticket.discount && (
                                        <div className="discount">
                                            <span className="price-old">{ticket.priceOld}</span>
                                            <span className="discount-value">{ticket.discount}</span>
                                        </div>
                                    )}
                                </div>
                                <Button onClick={open}>Перейти к бронированию</Button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="dates">
                    <div className="title">
                        <h3>Даты экскурсий</h3>
                    </div>
                    <div className="col">
                        <div className="block">
                            <p className="month">Июль</p>
                            <p className='date'>
                                Актуальные даты уточняйте в WhatsApp <br />
                                <a href={constants.whatsappUrl} target="_blank">
                                    {constants.phoneValue}
                                </a>
                            </p>
                        </div>
                        <div className="block">
                            <p className="month">Сентябрь</p>
                            <p className='date'>
                                Актуальные даты уточняйте в WhatsApp <br />
                                <a href={constants.whatsappUrl} target="_blank">
                                    {constants.phoneValue}
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="col sec">
                        <div className="block">
                            <p className="month">Август</p>
                            <p className='date'>
                                Актуальные даты уточняйте в WhatsApp <br />
                                <a href={constants.whatsappUrl} target="_blank">
                                    {constants.phoneValue}
                                </a>
                            </p>
                        </div>
                        <div className="block">
                            <p className="month">Октябрь</p>
                            <p className='date'>
                                Актуальные даты уточняйте в WhatsApp <br />
                                <a href={constants.whatsappUrl} target="_blank">
                                    {constants.phoneValue}
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
