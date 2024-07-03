import classNames from 'classnames';
import styles from './partner-with-us.module.scss';

// Importing styles from App scss module
import Astyles from '../../../../App.module.scss';

// Importing Images
import { ReactComponent as HandShake } from '../../../../assets/TET_images/hands_shaking.svg';

// Importing submit button from extras
import { SubmitButton } from '../../../extras/Button';

// Imports for Swiper JS
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

// Props for this component
export interface PartnerWithUsProps {
    className?: string;
}

export const PartnerWithUs = ({ className }: PartnerWithUsProps) => {
    // Array ( DataBase ) for the card slider in this component
    const images = [
        {
            id: 1,
            name: 'Nile University of Nigeria',
            imgURL: 'src/assets/TET_images/AuWwa1.png',
        },
        {
            id: 2,
            name: 'TEDX',
            imgURL: 'src/assets/TET_images/AuWwa1.png',
        },
    ];

    // Array ( DataBase ) for the options in the submit element
    const options = [
        {
            id: 1,
            skill: 'Eduction',
        },
        {
            id: 2,
            skill: 'Health and Wellness',
        },
        {
            id: 3,
            skill: 'Artificial Intelligence',
        },
        {
            id: 4,
            skill: 'Cook Book Design',
        },
    ];

    return (
        <div className={classNames(styles.root, className)}>
            {/* Section for the inputs  */}
            <section className={styles.text_div}>
                <div className={styles.text_div_child}>
                    {/* Header and Sub-head */}
                    <div className={styles.header}>
                        <h3>Join Now!</h3>
                        <h1>JOIN OUR COMMUNITY</h1>
                    </div>
                    {/* Header and Sub-head */}

                    {/* Inputs */}
                    <form className={styles.inputs}>
                        <input type="text" name="" id="" placeholder="Company Name" />
                        <input type="email" name="" id="" placeholder="Company Email" />

                        {/* Select Input */}
                        <select name="">
                            <option value="" disabled selected hidden>
                                Field of Expertise
                            </option>

                            {options.map((option) => (
                                <option value={option.id - 1}>
                                    <h1>{option.skill}</h1>
                                </option>
                            ))}
                        </select>
                        {/* Select Input */}

                        {/* Submit Button */}
                        <SubmitButton className="submit" type="submit">
                            JOIN US!
                        </SubmitButton>
                        {/* Submit Button */}
                    </form>
                    {/* Inputs */}
                </div>

                {/* Backgroung SVG */}
                <div className={styles.bg_SVG}>
                    <HandShake />
                </div>
                {/* Backgroung SVG */}
            </section>
            {/* Section for the inputs  */}

            {/* Section for the image slider */}
            <section className={styles.image_div}>
                {/* inner shadow */}
                <div className={classNames(styles.shadow, Astyles.shadow)} />
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
