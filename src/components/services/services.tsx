import classNames from 'classnames';
import styles from './services.module.scss';
import { Carousel } from '../carousel/carousel';

export interface ServicesProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Services = ({ className }: ServicesProps) => {
    return <div className={classNames(styles.root, className)}>
        <div className="grey_div">
            <div className="root_container">
                <div className="div_sizer">

                    <div className="general_titles_div">
                        <h5 className="brown_header">Heading 5</h5>
                        <h1 className="black_header">Service We’re Offering  to Our Customers</h1>
                    </div>
                    <Carousel />
                </div>
            </div>
        </div>
    </div>;
};
