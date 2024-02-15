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
                    <h2>Have Questions ?</h2>

                    <p style={{ margin: '24px 0' }}>Explore our FAQ section for commonly asked questions</p>
                    <a href="#" className="btn btn-primary fw-semibold mb-2" data-bs-toggle="modal" data-bs-target="#kt_modal_create_campaign">
                        Explore FAQ's
                    </a>
                </div>
            </div>
        </a>
    );
};

export { TilesWidget9 };
