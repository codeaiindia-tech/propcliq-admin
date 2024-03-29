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
const TilesWidget10 = (props: Props) => {
    const { className, svgIcon, titleClass, descriptionClass, iconClass, title, description } = props;
    return (
        <a href="#" className={clsx('card', className)}>
            <div className="card-body d-flex flex-column justify-content-between" style={{ height: '222px' }}>
            <div className="bg-white">
                <h2>Active Package</h2>
                  <div>
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
                                <strong style={{ fontSize: '25px', lineHeight: '33px' }}>02 Dec 24</strong>
                                <div style={{ fontSize: '12px', color: '#1F82F6' }}>Expiry</div>
                            </div>
                            <div>
                                {' '}
                                <KTIcon iconName="text-circle" className="fs-3x text-warning" />
                            </div>
                        </div>

                        <div className="d-flex">
                            <div>
                                <strong style={{ fontSize: '28px', lineHeight: '33px' }}>30</strong>
                                <div style={{ fontSize: '12px', color: '#1F82F6' }}>Listing Cap</div>
                            </div>
                            <div>
                                {' '}
                                <KTIcon iconName="text-circle" className="fs-3x text-warning" />
                            </div>
                        </div>

                        <div className="d-flex">
                            <div>
                                <strong style={{ fontSize: '28px', lineHeight: '33px' }}>1</strong>
                                <div style={{ fontSize: '12px', color: '#1F82F6' }}>Used</div>
                            </div>
                            <div>
                                {' '}
                                <KTIcon iconName="text-circle" className="fs-3x text-warning" />
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                
            </div>
        </a>
    );
};

export { TilesWidget10 };
