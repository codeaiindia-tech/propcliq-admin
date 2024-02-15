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
const TilesWidget7 = (props: Props) => {
    const { className, svgIcon, titleClass, descriptionClass, iconClass, title, description } = props;
    return (
        <a href="#" className={clsx('card', className)}>
            <div className="card-body d-flex flex-column justify-content-between">
                <div>
                    <div className="d-flex justify-content-between mb-2">
                        <h2 className="fw-600">Listings Summary</h2>
                    </div>
                    <div
                        style={{
                            borderRadius: '10px',
                            padding: '12px',
                            cursor: 'pointer',
                        }}
                        className="d-flex align-items-center justify-content-between border border-secondary h-74 mt-6"
                    >
                        <div className="d-flex">
                            <div>
                                <strong style={{ fontSize: '28px', lineHeight: '33px' }}>0</strong>
                                <div style={{ fontSize: '12px', color: 'rgb(127, 127, 127)' }}>Residential</div>
                            </div>
                            <div>
                                {' '}
                                <KTIcon iconName="text-circle" className="fs-3x text-warning" />
                            </div>
                        </div>
                        <div className="d-flex">
                            <div>
                                <strong style={{ fontSize: '28px', lineHeight: '33px' }}>0</strong>
                                <div style={{ fontSize: '12px', color: 'rgb(127, 127, 127)' }}>Commercial</div>
                            </div>
                            <div>
                                {' '}
                                <KTIcon iconName="text-circle" className="fs-3x text-warning" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
};

export { TilesWidget7 };
