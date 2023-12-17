import classNames from 'classnames';
import styles from './cta-div.module.scss';

export interface Cta_divProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Cta_div = ({ className }: Cta_divProps) => {
    return <div className={styles.cta_div}>
        <span className={styles.cta_div_text}>See Our Work</span><button className={styles.cta_div_button}></button>
    </div>;
};
