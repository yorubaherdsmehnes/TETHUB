import classNames from 'classnames';
import styles from './carousel.module.scss';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// @ts-ignore
import { servicesSlides } from '../slides.js';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Sevice_card } from '../sevice-card/sevice-card';

const servicesSlides = [
    {
        id: 1,
        name: 'Architecture',
        imgURL: 'https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg',
    },
    {
        id: 2,
        name: 'Construction',
        imgURL: 'https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg',
    },
    {
        id: 3,
        name: 'Interior Design',
        imgURL: 'https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg',
    },
    {
        id: 4,
        name: 'Interior Design',
        imgURL: 'https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg',
    },
];

export interface CarouselProps {
    className?: string;
}

export const Carousel = ({ className }: CarouselProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <section className={styles.main_body}>
                <div className={styles.swiper_div}>
                    <div className="div_sizer">
                        <Swiper
                            // install Swiper modules
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={30}
                            loop={true}
                            grabCursor={true}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                                dynamicMainBullets: 4,
                                bulletClass: 'swiper-pagination-bullet',
                            }}
                            breakpoints={{
                                // the page is wider than 0px
                                0: {
                                    slidesPerView: 1,
                                },
                                // the page is wider than 640px
                                640: {
                                    slidesPerView: 2,
                                },
                                // the page is wider than 1440px
                                1440: {
                                    slidesPerView: 3,
                                },
                            }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                            style={{
                                '--swiper-pagination-color': '#FFBA08',
                                '--swiper-pagination-bullet-active-size': '100px',
                                '--swiper-pagination-bullet-size': '20px',
                                '--swiper-pagination-bullet-inactive-color': '#999999',
                                '--swiper-pagination-bullet-inactive-opacity': '.5',
                                '--swiper-pagination-bullet-horizontal-gap': '35px',
                                '--swiper-pagination-bullet-active-border': '2px solid #000000',
                            } as React.CSSProperties}
                        >
                            {servicesSlides.map((servicesSlides) => (
                                <SwiperSlide>
                                    <Sevice_card
                                        name={servicesSlides.name}
                                        imgURL={servicesSlides.imgURL}
                                    />
                                </SwiperSlide>
                            ))}

                            <div className={styles.swiper_pagination}></div>
                        </Swiper>
                    </div></div>
            </section>
        </div>
    );
};
