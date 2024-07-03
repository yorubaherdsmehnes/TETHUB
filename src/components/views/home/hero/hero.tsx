import classNames from 'classnames';
import styles from './hero.module.scss';

// Importing styles from App scss module
import Astyles from '../../../../App.module.scss'

// Importing sign up button from extras
import { SignUpButton } from '../../../extras/Button';

// Imports for Swiper JS
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

// Props for this component
export interface HeroProps {
    className?: string;
    setSignupVisible?: any;
}



export const Hero = ({ className, setSignupVisible }: HeroProps) => {



    // Array ( DataBase ) for the card slider in the hero
    const images = [
        {
            id: 1,
            name: 'Picture of a man speaking at a seminar',
            imgURL: 'src/assets/TET_images/Hero_img1.png',
        },
        {
            id: 2,
            name: 'Picture of a woman speaking at a seminar',
            imgURL: 'src/assets/TET_images/Hero_img2.png',
        },
        {
            id: 3,
            name: 'Picture of a group of people speaking',
            imgURL: 'src/assets/TET_images/Hero_img3.png',
        },
    ];

    return (
        <>

           {/* Main hero container */}
            <div className={styles.hero}>
                {/* Hero background image slider */}
                <section className={styles.hero_bg_image_div}>
                    {/* Semi-Transparent blue foreground with blur */}
                    <div className={Astyles.blur_mask} />
                    <div className={Astyles.transparent_blue_bg} />
                    {/* Semi-Transparent blue foreground with blur */}

                    {/* Swiper Component */}
                    <Swiper
                        spaceBetween={0}
                        loop={true}
                        autoplay={{
                            delay: 5000,
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
                                <img
                                    className={styles.heroBG}
                                    src={image.imgURL}
                                    alt={image.name}
                                />
                                {/* image itself */}
                                
                            </SwiperSlide>
                        ))}
                        {/* image looping */}

                    </Swiper>
                    {/* Swiper Component */}
                </section>
                {/* Hero background image slider */}

                {/* Text on the Hero */}
                <section className={styles.hero_title_div}>
                    {/* TetHub Logo */}
                    <div className={styles.tetHub_div}>
                        <strong>TET</strong>Hub
                    </div>
                    {/* TetHub Logo */}
                    {/* Head and Sub-head */}
                    <span>MAKING AN IMPACT,</span>
                    ONE EDUCATED MIND AT A TIME
                    {/* Head and Sub-head */}
                    {/* CTA */}
                    <div className={styles.navbar_CTA}>
                        <SignUpButton
                            onClick={onclick}
                            setSignupVisible={setSignupVisible}
                            className="SignUp"
                        >
                            JOIN OUR COMMUNITY
                        </SignUpButton>
                    </div>
                    {/* CTA */}

                </section>
                {/* Text on the Hero */}

            </div>
           {/* Main hero container */}

        </>
    );
};
