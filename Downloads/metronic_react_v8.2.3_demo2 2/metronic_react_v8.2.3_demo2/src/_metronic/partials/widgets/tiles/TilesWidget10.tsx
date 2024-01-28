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
    <a href='#' className={clsx('card', className)}>
      <div className='card-body d-flex flex-column justify-content-between'>
        <div className='bg-white'>
          <h2>Looking for Help or Support ?</h2>
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
    </a>
  );
};

export { TilesWidget10 };
