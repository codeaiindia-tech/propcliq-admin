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
      <div className='card-body d-flex flex-column justify-content-between '>
        <div>
          <div className='d-flex justify-content-between align-items-center mb-2'>
            <h2 className='fw-600'>Leads Summary</h2>
            <div>
              <select
                name='status'
                data-control='select2'
                data-hide-search='true'
                className='form-select form-select-sm form-select-white w-125px'
                defaultValue='Active'
              >
                <option value='Active'>Last Week</option>
                <option value='Approved'>Last Month</option>
                <option value='In Progress'>Last Year</option>
              </select>
            </div>
          </div>
          <div className='d-flex justify-content-between mt-6'>
            <div className='col d-flex p-3 justify-content-between  align-items-center border border-secondary rounded-2 me-7 mb-7'>
              <div className='d-flex'>
                <KTIcon iconName='bi bi-house' className='fs-3x text-warning d-block my-2' />
                <div
                  style={{
                    marginLeft: '10px',
                  }}
                >
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: '28px',
                      lineHeight: '33px',
                      marginBottom: '4px',
                      color: 'rgb(34, 34, 34)',
                    }}
                  >
                    0
                  </div>
                  <div
                    style={{
                      color: 'rgb(127, 127, 127)',
                    }}
                    className='fw-semibold fs-6'
                  >
                    Residential
                  </div>
                </div>
              </div>

              <div>
                <KTIcon iconName='bi bi-caret-right' className='fs-3x text-primary d-block my-2' />
              </div>
            </div>
            <div className='col d-flex justify-content-between  align-items-center p-3 border border-secondary rounded-2 mb-7'>
              <div className='d-flex'>
                <KTIcon iconName='bi bi-house' className='fs-3x text-warning d-block my-2' />
                <div
                  style={{
                    marginLeft: '10px',
                  }}
                >
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: '28px',
                      lineHeight: '33px',
                      marginBottom: '4px',
                      color: 'rgb(34, 34, 34)',
                    }}
                  >
                    10
                  </div>
                  <div
                    style={{
                      color: 'rgb(127, 127, 127)',
                    }}
                    className='fw-semibold fs-6'
                  >
                    Commercial
                  </div>
                </div>
              </div>

              <div>
                <KTIcon iconName='bi bi-caret-right' className='fs-3x text-primary d-block my-2' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export { TilesWidget6 };
