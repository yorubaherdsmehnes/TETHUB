import classNames from 'classnames';
import styles from './home.module.scss';
import Astyles from '../../../App.module.scss'
import { Hero } from './hero/hero';
import { AboutUsHome } from './about-us-home/about-us-home';
import { ServicesHome } from './services-home/services-home';
import { JoinUsHome } from './join-us-home/join-us-home';
import { ContactsHome } from './contacts-home/contacts-home';
import { PartnerWithUs } from './partner-with-us/partner-with-us';

export interface HomeProps {
    className?: string;
    setSignUpVisible?: any;
}





export const Home = ({ className, setSignUpVisible }: HomeProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <section  >
                <Hero setSignupVisible={setSignUpVisible}/>
            </section>
            <section className={Astyles.slider_section}>
                <AboutUsHome />
            </section>
            <section className={Astyles.blue_section}>
                <ServicesHome />

            </section>
            <section className={Astyles.slider_section}>
                <JoinUsHome />

            </section>
            <section className={Astyles.blue_section}>
                <ContactsHome />

            </section>
            <section className={Astyles.slider_section}>
                <PartnerWithUs />

            </section>
        </div>
    );
};
