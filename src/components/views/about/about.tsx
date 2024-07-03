import classNames from 'classnames';
import styles from './about.module.scss';

export interface AboutProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const About = ({ className }: AboutProps) => {
    return <div className={classNames(styles.root, className)}>About</div>;
};
