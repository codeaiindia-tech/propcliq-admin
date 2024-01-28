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

const TilesWidget6 = (props: Props) => {
  const { className, svgIcon, titleClass, descriptionClass, iconClass, title, description } = props;
  return (
    <a href='#' className={clsx('card', className)}>
      <div className='card-body d-flex flex-column justify-content-between'>
        <div>
          <div className='d-flex justify-content-between'>
            <h2 className='fw-600'>Leads Summary</h2>
            <p className=''>
              Last Week <i className='bi bi-caret-down'></i>
            </p>
          </div>
          <div className='d-flex justify-content-between'>
            <div className='col bg-light-warning px-6 py-8 rounded-2 me-7 mb-7'>
              <KTIcon iconName='chart-simple' className='fs-3x text-warning d-block my-2' />
              <a href='#' className='text-warning fw-semibold fs-6'>
                Residential
              </a>
            </div>
            <div className='col bg-light-primary px-6 py-8 rounded-2 mb-7'>
              <KTIcon iconName='plus' className='fs-3x text-primary d-block my-2' />
              <a href='#' className='text-primary fw-semibold fs-6'>
                Commercial
              </a>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export { TilesWidget6 };
