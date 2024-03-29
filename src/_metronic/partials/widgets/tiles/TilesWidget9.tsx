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
const TilesWidget9 = (props: Props) => {
    const { className, svgIcon, titleClass, descriptionClass, iconClass, title, description } = props;
    return (
        <a href="#" className={clsx('card', className)}>
            <div className="card-body d-flex flex-column justify-content-between" style={{ height: '22px' }}>
          
               <div className="bg-white">
                    <h2 style={{ margin: '24px 0' }}>Want to enhance your reach?</h2>
                    <a href="#" className="btn btn-primary fw-semibold" data-bs-toggle="modal" data-bs-target="#kt_modal_create_campaign">
                        Upgrade to the cliq plus package.
                    </a>
                </div>
                </div>
        </a>
    );
};

export { TilesWidget9 };
