import classNames from 'classnames';
import styles from './blog.module.scss';

export interface BlogProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Blog = ({ className }: BlogProps) => {
    return <div className={classNames(styles.root, className)}>Blog</div>;
};
