import clsx from 'clsx';
import { KTIcon, toAbsoluteUrl } from '../../../helpers';
import { TilesWidget1 } from './TilesWidget1';
type Props = {
    className?: string;
    svgIcon?: string;
    titleClass?: string;
    descriptionClass?: string;
    iconClass?: string;
    title?: string;
    description?: string;
};
const TilesWidget11 = (props: Props) => {
    const { className, svgIcon, titleClass, descriptionClass, iconClass, title, description } = props;
    return (
        <div style={{height:"370px"}} className={clsx('card self_verify-container', className)}>
            <div className="card-body d-flex flex-column justify-content-between">
                <div className=" row ">
                    <div className="col-xl-4 self_verify-card">
                        <div className="d-flex align-items-center">
                            <KTIcon iconName="check-circle" className="fs-3x text-primary" />
                            <h2 className="pl-2">Self-verify</h2>
                        </div>

                        <p>
                            Now, You can verify listings <strong>in 10 mins</strong>
                            using your <strong>phone's camera !</strong>
                        </p>
                        <div>Verified listings appear at the top in searches</div>
                    </div>
                    <div className="col-xl-4">
                        <img className="verify_image" src={toAbsoluteUrl('media/custom/verify.svg')} alt="" />
                    </div>
                    <div className="col-xl-4 ">
                        <div className="verify_card">
                            <p>Only 0 %</p>
                            <div className="py-3"> listings are verified</div>
                            <div className="verify_card-container">
                                <div className="verify_card-circle1">
                                    <div className="verify_card-circle2"></div>
                                </div>
                                <div className="verify_card-circle3">
                                    <div className="verify_card-circle4"></div>
                                </div>
                                <div className="verify_card-circle5">
                                    <div className="verify_card-circle6">0/0</div>
                                    <div className="verify_card-circle7">Listings</div>
                                </div>
                            </div>

                            <a
                                href="#"
                                className="btn btn-primary fw-semibold mt-3"
                                data-bs-toggle="modal"
                                data-bs-target="#kt_modal_create_campaign"
                            >
                                Verify now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { TilesWidget11 };
