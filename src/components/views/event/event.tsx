import classNames from 'classnames';
import styles from './event.module.scss';

export interface EventProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Event = ({ className }: EventProps) => {
    return <div className={classNames(styles.root, className)}>Event</div>;
};
