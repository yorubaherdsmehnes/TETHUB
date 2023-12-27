import classNames from 'classnames';
import styles from './service-card.module.scss';


export interface Service_CardProps {
    className?: string;
    id?: number;
    name?: string;
    imgURL?: string;
}



function Service_Card({ className, id, name, imgURL }: Service_CardProps) {
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
}

export default Service_Card