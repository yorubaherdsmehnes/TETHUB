import classNames from 'classnames';
import styles from './service-card.module.scss';

export interface Service_CardProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Service_Card = ({ className }: Service_CardProps) => {
    return <div className={classNames(styles.root, className)}>Service_Card</div>;
};
