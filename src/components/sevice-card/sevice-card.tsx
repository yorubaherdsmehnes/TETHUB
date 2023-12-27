import classNames from 'classnames';
import styles from './sevice-card.module.scss';


export interface Service_cardProps {
    className?: string;
    id?: number;
    name?: string;
    imgURL?: string;
}

export const Sevice_card = ({ className, id, name, imgURL }: Service_cardProps, ) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.service_card}>
                <div className={styles.service_card_title_div}>
                    <span className={styles.service_card_title}>{name}</span>
                </div>
                <img src={imgURL} alt="" className={styles.service_card_image} />
            </div>
        </div>
    );
};
