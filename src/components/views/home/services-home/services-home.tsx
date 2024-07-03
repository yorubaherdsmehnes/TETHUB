import classNames from 'classnames';
import styles from './services-home.module.scss';

// importing the component that makes the objects fadein from the bottom
import { LfadeIn } from '../../../extras/BottomFadeIn';

// Props for this component
export interface ServicesHomeProps {
    className?: string;
}

export const ServicesHome = ({ className }: ServicesHomeProps) => {
    // Array ( DataBase ) for the card slider in this component
    const cards = [
        {
            id: 1,
            heading: 'Knowledge Oasis',
            alt: 'Picture of the Knowledge Oasis Event',
            paragraph:
                'Knowledge Oasis is a monthly online discussion series dedicated to exploring insights on specific topics, current issues, and recent events.  Each installment highlights a distinguished guest speaker who possesses expertise and eloquence in a particular field of interest. ',
            url: 'src/assets/TET_images/Hero_img1.png',
        },
        {
            id: 2,
            heading: 'Buzz',
            alt: 'Picture of the Buzz happening at TetHub',
            paragraph:
                'Buzz, an educational platform that aims to enhance self-learning and ensure academic success for students across diverse institutions.',
            url: 'src/assets/TET_images/Hero_img2.png',
        },
        {
            id: 3,
            heading: 'Cases with TETHub',
            alt: 'Picture of Cases with TetHub',
            paragraph:
                'This recorded physical event, akin to TEDx, is specifically designed for young fellows. Serving as a platform for the expression of innovative ideas, solutions to problems, and the showcasing of skills.',
            url: 'src/assets/TET_images/Hero_img3.png',
        },
    ];

    return (
        <div className={classNames(styles.root, className)}>
            
            {/* Heading and Subheading */}
            <LfadeIn>
                <section className={styles.heading}>
                    <h1>Our Services</h1>
                    <h6>
                        We offer a range of activities that strives to educate and impact students
                        and young people
                    </h6>
                </section>
            </LfadeIn>
            {/* Heading and Subheading */}

            {/* Long span image */}
            <LfadeIn>
                <section className={styles.image_div}>
                    <img src="src/assets/TET_images/Hero_img3.png" alt="" />
                </section>
            </LfadeIn>
            {/* Long span image */}
            
            {/* Image Cards */}
            <section className={styles.card_div}>
                {cards.map((card) => (
                    <LfadeIn>

                        {/* image card */}
                        <div className={styles.card}>
                            <h3>{card.heading}</h3>

                            {/* image itself */}
                            <img src={card.url} alt={card.alt} />
                            {/* image itself */}
                            
                            <p>{card.paragraph}</p>
                        </div>
                        {/* image card */}

                    </LfadeIn>
                ))}
            </section>
            {/* Image Cards */}

        </div>
    );
};
