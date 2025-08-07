'use client';

import { usePopupStore } from '@/stores/popupStore';
import '@/styles/modals/form.scss';
import { useEffect, useState } from 'react';
import { lockBodyScroll, unlockBodyScroll } from '@/composables/bodyScrollLock';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Component() {
    const { isGalleryOpen, closeGallery } = usePopupStore();
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (!isGalleryOpen) return;

        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        const originalPaddingRight = document.body.style.paddingRight;

        lockBodyScroll();
        if (scrollbarWidth > 0) {
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        }
        const timeout = setTimeout(() => setIsActive(true), 0);

        return () => {
            clearTimeout(timeout);
            unlockBodyScroll();
            document.body.style.paddingRight = originalPaddingRight;
            setIsActive(false);
        };
    }, [isGalleryOpen]);

    if (!isGalleryOpen) return null;

    const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            closeGallery();
        }
    };

    return (
        <div className={`modal ${isActive ? 'modal--active' : ''}`}>
            <div className={`modal__wrapper gallery`} onClick={handleBackgroundClick}>
                <div className="modal__content">
                    <button onClick={closeGallery} className="close" aria-label="Закрыть модалку">
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L16 16M1 16L16 1" stroke="#ed7144" />
                        </svg>

                    </button>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                    >
                        <SwiperSlide>
                            <img src="/images/galleryMenu1.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/galleryMenu2.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/galleryMenu3.png" alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
