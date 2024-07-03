import classNames from 'classnames';
import styles from './join-us-home.module.scss';

// Importing styles from App scss module
import AStyles from '../../../../App.module.scss';

// Importing Images
import { ReactComponent as Group } from '../../../../assets/TET_images/group.svg';

// Importing submit button from extras
import { SubmitButton } from '../../../extras/Button';

// Imports for Swiper JS
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

// Props for this component
export interface JoinUsHomeProps {
    className?: string;
}

export const JoinUsHome = ({ className }: JoinUsHomeProps) => {
    // Array ( DataBase ) for the card slider in this component
    const images = [
        {
            id: 1,
            name: 'Girl',
            imgURL: 'src/assets/TET_images/random_girl.png',
        },
        {
            id: 2,
            name: 'Temi',
            imgURL: 'src/assets/TET_images/temi.png',
        },
        {
            id: 3,
            name: 'Tochi',
            imgURL: 'src/assets/TET_images/tochi.png',
        },
    ];

    // Array ( DataBase ) for the options in the submit element
    const options = [
        {
            id: 1,
            skill: 'PR Manager',
        },
        {
            id: 2,
            skill: 'Web Developer',
        },
        {
            id: 3,
            skill: 'Social Media Influencer',
        },
        {
            id: 4,
            skill: 'Cook Book Specialist',
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
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                        <input type="email" placeholder="Email" />
                        <input type="tel" placeholder="Phone Number" />

                        {/* Select Input */}
                        <select name="join_us_skill_selector">
                            <option value="1" disabled selected hidden>
                                What service/skill can you offer?
                            </option>

                            {options.map((option) => (
                                <option value={option.id - 1}>
                                    <h1>{option.skill}</h1>
                                </option>
                            ))}

                            {/* trying to add the input option for when the "other" option is selected */}
                            {/*                     
                    <option value="">Other</option> */}
                        </select>
                        {/* Select Input */}

                        {/* Submit Button */}
                        <SubmitButton className={styles.submit} type="submit">
                            JOIN US!
                        </SubmitButton>
                        {/* Submit Button */}
                    </form>
                    {/* Inputs */}
                </div>

                {/* Backgroung SVG */}
                <div className={styles.bg_SVG}>
                    <Group />
                </div>
                {/* Backgroung SVG */}
            </section>
            {/* Section for the inputs  */}

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
