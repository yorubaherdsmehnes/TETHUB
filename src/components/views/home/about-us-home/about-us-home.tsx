import classNames from 'classnames';
import styles from './about-us-home.module.scss';

// Importing styles from App scss module
import AStyles from '../../../../App.module.scss';

// Importing Images
import { ReactComponent as Book } from '../../../../assets/TET_images/book_flipping.svg';

// Imports for Swiper JS
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

// Props for this component
export interface AboutUsHomeProps {
    className?: string;
}

export const AboutUsHome = ({ className }: AboutUsHomeProps) => {
    // Array ( DataBase ) for the image slider in this component
    const images = [
        {
            id: 1,
            name: 'Architecture',
            imgURL: 'src/assets/TET_images/AuWwa1.png',
        },
        {
            id: 2,
            name: 'Architecture',
            imgURL: 'src/assets/TET_images/AuWwa1.png',
        },
    ];

    return (
        <div className={classNames(styles.root, className)}>
            {/* Section for the text  */}
            <section className={styles.text_div}>

                {/* Text div to centralize the header and paragraph */}
                <div className={styles.info_div_container}>
                    
                {/* Information 'about us' */}
                <div className={styles.info_div}>
                    <h3>About Us</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                {/* Information 'about us' */}

                {/* Information about 'what we do' */}

                <div className={styles.info_div}>
                    <h3>What We Do </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                {/* Information about 'what we do' */}
                </div>
                {/* Text div to centralize the header and paragraph */}

                {/* Backgroung SVG */}
                <div className={styles.bg_SVG}>
                    <Book />
                </div>
                {/* Backgroung SVG */}
            </section>
            {/* Section for the text  */}

            {/* Section for the image slider */}
            <section className={styles.image_div}>
                {/* inner shadow */}
                <div className={classNames(styles.shadow, AStyles.shadow)} />
                {/* inner shadow */}

                {/* Swiper Component */}
                <Swiper
                    spaceBetween={0}
                    loop={true}
                    autoplay={{
                        delay: 10000,
                        pauseOnMouseEnter: true,
                    }}
                    grabCursor={true}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    speed={1000}
                    modules={[Autoplay]}
                    className={styles.swiper}
                >
                    {/* image looping */}
                    {images.map((image) => (
                        <SwiperSlide key={image.id}>
                            {/* image itself */}
                            <img src={image.imgURL} alt={image.name} />
                            {/* image itself */}

                            {/* On hover tooltip (text that appears when the image is hovered over) */}
                            <span>{image.name}</span>
                            {/* On hover tooltip (text that appears when the image is hovered over) */}
                        </SwiperSlide>
                    ))}
                    {/* image looping */}
                </Swiper>
                {/* Swiper Component */}
            </section>
            {/* Section for the image slider */}
        </div>
    );
};
