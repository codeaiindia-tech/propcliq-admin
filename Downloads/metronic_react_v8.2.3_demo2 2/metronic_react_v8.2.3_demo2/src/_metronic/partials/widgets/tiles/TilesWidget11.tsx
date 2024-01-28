import clsx from 'clsx';
import { KTIcon } from '../../../helpers';
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
    <a href='#' className={clsx('card', className)}>
      <div className='card-body d-flex flex-column justify-content-between'>
        <div className=' row '>
          <div className='col-xl-4 self_verify-card'>
            <h2>Self-verify</h2>
            <p>
              Now, You can verify listings <strong>in 10 mins</strong>
              using your <strong>phone's camera !</strong>
            </p>
            <span>Verified listings appear at the top in searches</span>
          </div>
          <div className='col-xl-4'>{/* <TilesWidget1 className='card-xl-stretch' /> */}</div>
          <div className='col-xl-4'>
            <p>Only 0 %</p>
            <p> listings are verified</p>

            <a
              href='#'
              className='btn btn-primary fw-semibold'
              data-bs-toggle='modal'
              data-bs-target='#kt_modal_create_campaign'
            >
              Visit Help Center
            </a>
          </div>
        </div>
      </div>
    </a>
  );
};

export { TilesWidget11 };
