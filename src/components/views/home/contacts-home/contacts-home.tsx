import classNames from 'classnames';
import styles from './contacts-home.module.scss';

// Importing Images
// import { Phone } from '../../../svgComponents/PhoneSVG';
import { ReactComponent as Phone} from '../../../../assets/TET_images/phone.svg'
import { ReactComponent as CallCenter} from '../../../../assets/TET_images/call_centre.svg'
import { ReactComponent as Message} from '../../../../assets/TET_images/message.svg'

// importing the component that makes the objects fadein from the bottom
import { LfadeIn } from '../../../extras/BottomFadeIn';

// Props for this component
export interface ContactsHomeProps {
    className?: string;
}

export const ContactsHome = ({ className }: ContactsHomeProps) => {
    // Array ( DataBase ) for the card slider in this component
    const icons = [
        {
            id: 1,
            heading: 'Active Hours',
            alt: 'Picture of a man speaking at a seminar',
            paragraph: 'Monday-Friday : 9am-5pm',
            url: <CallCenter/> ,
        },
        {
            id: 2,
            heading: 'Email',
            alt: 'Picture of a group of people speaking',
            paragraph: 'tethubcommunity@gmail.com',
            url: <Message/>,
        },
        {
            id: 3,
            heading: 'Phone',
            alt: 'Picture of a group of people speaking',
            paragraph: '+234-901-377-4696',
            url: <Phone/>,
        },
    ];

    return (
        <div className={classNames(styles.root, className)}>
            {/* Heading and Subheading */}
            <LfadeIn>
                <section className={styles.heading}>
                    <h1>Contact Us</h1>
                    <h6>For any inquiries or questions </h6>
                </section>
            </LfadeIn>
            {/* Heading and Subheading */}

            {/* Icon Images */}
            <section className={styles.contacts}>
                {icons.map((icon) => (
                    <LfadeIn>
                        
                        {/* icon images */}
                        <div className={styles.icon}>
                            <h3>{icon.heading}</h3>

                            {/* image itself */}
                            {icon.url}
                            {/* image itself */}

                            <p>{icon.paragraph}</p>
                        </div>
                        {/* icon images */}

                    </LfadeIn>
                ))}
            </section>
            {/* Icon Images */}

        </div>
    );
};
