import classNames from 'classnames';
import styles from './features.module.scss';

export interface FeaturesProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Features = ({ className }: FeaturesProps) => {
    return <div className={classNames(styles.root, className)}>
        <div className="white_div">
            <div className="root_container">
                <div className="div_sizer">
                    <div className={styles.features_div}>
                        <div className={styles.features_images}>
                            <img src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" alt="" className={styles.features_image_large} />
                            <img src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" alt="" className={styles.features_image_smalll} />
                        </div>
                        <div className={styles.features_title}>
                            <h5 className={styles.brown_header}>Our Features</h5>
                            <h1 className={styles.bold_header}>We Make Finest Architectural Design With Great Passion</h1>
                            <p className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi  quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.  Aenean faucibusnibh et justo cursus id  rutrum lorem imperdiet. Nunc ut sem vitae risus tristique .Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <span className={styles.white_background_text}>FEATURE</span>
                    </div>
                </div>
            </div>
        </div></div>;
};
