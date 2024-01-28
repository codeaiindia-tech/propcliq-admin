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
    <a href='#' className={clsx('card', className)}>
      <div className='card-body d-flex flex-column justify-content-between'>
        <div className='bg-white'>
          <h2>Have Questions ?</h2>

          <p>Explore our FAQ section for commonly asked questions</p>
          <a
            href='#'
            className='btn btn-primary fw-semibold mb-2'
            data-bs-toggle='modal'
            data-bs-target='#kt_modal_create_campaign'
          >
            Explore FAQ's
          </a>
        </div>
      </div>
    </a>
  );
};

export { TilesWidget9 };
