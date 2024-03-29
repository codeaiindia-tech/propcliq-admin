import clsx from 'clsx';
import { KTIcon } from '../../../helpers';

type Props = {
    className?: string;
    svgIcon?: string;
    titleClass?: string;
    descriptionClass?: string;
    iconClass?: string;
    title?: string;
    description?: string;
};
const TilesWidget8 = (props: Props) => {
    const { className, svgIcon, titleClass, descriptionClass, iconClass, title, description } = props;
    return (
        <a href="#" className={clsx('card', className)}>
            <div className="card-body d-flex flex-column justify-content-between">
                <div className="question_card-container">
                    <h2 style={{ fontSize: '16px', lineHeight: '19px' }}> Application hits </h2>
                    <span className="mt-4" style={{ fontSize: '12px', lineHeight: '14px', opacity: '0.54' }}>
                        We are growing as a team and your efforts are making us reach higher on web chart.
                    </span>
                    <hr />
                    <p style={{ fontSize: '16px', lineHeight: '19px' }}>We have <h1 className='text-warning'>2784</h1> hits today and still increasing</p>
                </div>
            </div>
        </a>
    );
};

export { TilesWidget8 };
