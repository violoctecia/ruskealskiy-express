'use client';

import { lockBodyScroll, unlockBodyScroll } from '@/composables/bodyScrollLock';
import { usePopupStore } from '@/stores/popupStore';
import '@/styles/blocks/header.scss';
import Link from 'next/link';
import Button from '../buttons/Button';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Component() {
    const open = usePopupStore((s) => s.open);
    const pathname = usePathname();
    const navLinks = [
        { name: 'Школам', url: '/school-excursion' },
        {
            name: 'Маршруты',
            options: [
                { name: 'Экскурсия в Рускеала на Ретропоезде из Москвы', href: '/#exc-msc' },
                { name: 'Экскурсия на Рускеальском экспрессе из Санкт-Петербурга', href: '/#exc-spb' },
                { name: 'Экскурсии в Карелию без туристического поезда', href: '/#exc-no-train' },
            ],
        },
        {
            name: 'Билеты',
            options: [
                { name: 'Экскурсия в Рускеала на Ретропоезде из Москвы', href: '/#tickets-msc' },
                { name: 'Экскурсия на Рускеальском экспрессе из Санкт-Петербурга', href: '/#tickets-spb' },
                { name: 'Экскурсии в Карелию без туристического поезда', href: '/#tickets-no-train' },
            ],
        },
        { name: 'О нас', url: '/#about' },
        { name: 'Вопросы', url: '/#faq' },
        { name: 'Журнал', url: '/journal' },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleClick = () => {
            setIsOpen(false);
        };

        if (isOpen) {
            lockBodyScroll();
            setTimeout(() => {
                document.addEventListener('click', handleClick, { once: true });
            }, 0);
        } else {
            unlockBodyScroll();
        }

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [isOpen]);

    useEffect(() => {
        const checkScroll = () => {
            const scrollY = window.scrollY || window.pageYOffset;
            setIsScrolled(scrollY > 100);
        };

        if (pathname !== '/') {
            setIsScrolled(true);
            return;
        }

        checkScroll();
        window.addEventListener('scroll', checkScroll);

        return () => window.removeEventListener('scroll', checkScroll);
    }, [pathname]);

    return (
        <>
            <header className={`header ${isOpen ? 'open' : ''} ${isScrolled ? 'scrolled-past-hero' : ''}`}>
                <Link href="/" className="logo">
                    РУCКЕАЛЬСКИЙ ЭКСПРЕСС
                </Link>
                <div className="nav-wrapper">
                    <nav>
                        {navLinks.map((link, index) => (
                            <div key={index} className="nav-item">
                                {link.url ? (
                                    <Link href={link.url || '#'} className="nav-link">
                                        {link.name}
                                    </Link>
                                ) : (
                                    <button className="nav-link">
                                        {link.name}
                                        {link.options && (
                                            <svg width="6" height="5" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M-0.0100098 0L2.78533 4.39083L5.58065 2.44274e-07L-0.0100098 0Z"
                                                    fill="#F7ECE3"
                                                    fillOpacity="0.8"
                                                />
                                            </svg>
                                        )}
                                    </button>
                                )}

                                {link.options && (
                                    <div className="options">
                                        <div className="options-wrapper">
                                            {link.options.map((option, optionIndex) => (
                                                <Link href={option.href} key={optionIndex} className="option-link">
                                                    {option.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="nav-buttons">
                            <Button className="reservation" onClick={open}>
                                Отдел бронирования
                            </Button>
                            <Button href="https://wa.me/79951447659" target="_blank" isWhite className="phone green">
                                +7 (995) 144-76-59
                            </Button>
                        </div>
                    </nav>
                </div>
                <div className="buttons">
                    <Button className="reservation" onClick={open}>
                        Отдел бронирования
                    </Button>
                    <Button href="https://wa.me/79951447659" target="_blank" isWhite className="phone">
                        +7 (995) 144-76-59
                    </Button>
                    <Button className="menu" isWhite onClick={toggleMenu}>
                        <span>Меню</span>
                        <svg width="21" height="10" viewBox="0 0 21 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.411743 0.5H21M0.411743 9.5H21" stroke="#F7ECE3" />
                        </svg>
                        <svg width="21" height="21" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.355957 0.5L15.356 15.5M0.355957 15.5L15.356 0.5" stroke="#ED7144" />
                        </svg>
                    </Button>
                </div>
            </header>
            <div className={`header-mobile-bg ${isOpen ? 'open' : ''}`}></div>
        </>
    );
}
