import classNames from 'classnames';
import styles from './hero.module.scss';
import { Cta_div } from '../cta-div/cta-div';

export interface HeroProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Hero = ({ className }: HeroProps) => {
    return <div className={classNames(styles.root, className)}>
        <div className={styles.grey_div}>
            <div className="root_container">
                <div className="div_sizer">
                    <div className={styles.hero_div}>
                        <img src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" alt="" className={styles.hero_image} />
                        <div className={styles.hero_titles_container}>
                            <div className={styles.hero_titles_div}>
                                <h5 className={styles.hero_header_text_title}>We are Civil Suites</h5>
                                <h1 className={styles.hero_header_text_subtitle}>INNOVATIVE DESIGNS</h1>
                                <h1 className={classNames(styles.light, styles.hero_header_text_subtitle)}>WORLD CLASS ARCHITECTURE</h1>
                                <Cta_div />
                            </div>
                            <div className={styles.hero_title_background} />
                        </div>
                    </div></div></div>
        </div></div>;
};
