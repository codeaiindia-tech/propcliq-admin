
import { FC } from 'react'
import {KTIcon, toAbsoluteUrl} from '../../../_metronic/helpers';


type Props = {
  className: string
}

const ListTabularView: FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          {/* <span className='card-label fw-bold fs-3 mb-1'>Housing List</span> */}
          <span className='text-muted mt-1 fw-semibold fs-7'>Showing 485 <b> Buy </b>  lead </span>
        </h3>
        <div
          className='card-toolbar'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
          title='Click to download leads'
        >
          <a
            href='#'
            className='btn btn-sm btn-light-primary'
            // data-bs-toggle='modal'
            // data-bs-target='#kt_modal_invite_friends'
          >
            <KTIcon iconName='document' className='fs-3' />
            Download Leads
          </a>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bold text-muted'>
                <th className='w-25px'>
                
                </th>
                <th className='min-w-150px'></th>
                <th className='min-w-140px'></th>
                <th className='min-w-120px'></th>
                <th className='min-w-100px text-end'></th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              <tr>
                <td>
                
                </td>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-45px me-5'>
                      <img src={toAbsoluteUrl('media/avatars/300-20.jpg')} alt='' />
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-gray-900 fw-bold text-hover-primary fs-6'>
                        Tanuja Joshi
                      </a>
                      
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-gray-900 fw-bold text-hover-primary d-block fs-6'>
                    2 BHK Apartment
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>
                   Jaypee Aman, sector 51
                  </span>
                  <div style= {{paddingTop:'1%'}}>
                  <span className='badge badge-light-primary fs-8 fw-bold'>953 sq.ft</span>
                  <span className='badge badge-light-primary fs-8 fw-bold'>$49.1L</span>
                  <button
            type='button'
            className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            <KTIcon iconName='send' className='fs-2' />
          </button>
                  </div>
                </td>
                <td className='text-end'>
                <div
          className='card-toolbar'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
          title='Click to download leads'
        >
          <a
            href='#'
            className='btn btn-sm btn-primary'
            // data-bs-toggle='modal'
            // data-bs-target='#kt_modal_invite_friends'
          >
            <KTIcon iconName='' className='fs-3' />
           View contact
          </a>
        </div>
                </td>
                <td>
                  <div className='d-flex justify-content-end flex-shrink-0'>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>
                  17 Jan 24, 2:57 pm
                  </span>
                  </div>
                </td>
                </tr>
                <tr>
                <td>
                
                </td>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-45px me-5'>
                      <img src={toAbsoluteUrl('media/avatars/300-20.jpg')} alt='' />
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-gray-900 fw-bold text-hover-primary fs-6'>
                        Tanuja Joshi
                      </a>
                      
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-gray-900 fw-bold text-hover-primary d-block fs-6'>
                    2 BHK Apartment
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>
                   Jaypee Aman, sector 51
                  </span>
                  <div style= {{paddingTop:'1%'}}>
                  <span className='badge badge-light-primary fs-8 fw-bold'>953 sq.ft</span>
                  <span className='badge badge-light-primary fs-8 fw-bold'>$49.1L</span>
                  <button
            type='button'
            className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            <KTIcon iconName='send' className='fs-2' />
          </button>
                  </div>
                </td>
                <td className='text-end'>
                <div
          className='card-toolbar'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
          title='Click to download leads'
        >
          <a
            href='#'
            className='btn btn-sm btn-primary'
            // data-bs-toggle='modal'
            // data-bs-target='#kt_modal_invite_friends'
          >
            <KTIcon iconName='' className='fs-3' />
           View contact
          </a>
        </div>
                </td>
                <td>
                  <div className='d-flex justify-content-end flex-shrink-0'>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>
                  17 Jan 24, 2:57 pm
                  </span>
                  </div>
                </td>
                </tr>
                <tr>
                <td>
                
                </td>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-45px me-5'>
                      <img src={toAbsoluteUrl('media/avatars/300-20.jpg')} alt='' />
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-gray-900 fw-bold text-hover-primary fs-6'>
                        Tanuja Joshi
                      </a>
                      
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-gray-900 fw-bold text-hover-primary d-block fs-6'>
                    2 BHK Apartment
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>
                   Jaypee Aman, sector 51
                  </span>
                  <div style= {{paddingTop:'1%'}}>
                  <span className='badge badge-light-primary fs-8 fw-bold'>953 sq.ft</span>
                  <span className='badge badge-light-primary fs-8 fw-bold'>$49.1L</span>
                  <button
            type='button'
            className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            <KTIcon iconName='send' className='fs-2' />
          </button>
                  </div>
                </td>
                <td className='text-end'>
                <div
          className='card-toolbar'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
          title='Click to download leads'
        >
          <a
            href='#'
            className='btn btn-sm btn-primary'
            // data-bs-toggle='modal'
            // data-bs-target='#kt_modal_invite_friends'
          >
            <KTIcon iconName='' className='fs-3' />
           View contact
          </a>
        </div>
                </td>
                <td>
                  <div className='d-flex justify-content-end flex-shrink-0'>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>
                  17 Jan 24, 2:57 pm
                  </span>
                  </div>
                </td>
                </tr>
                <tr>
                <td>
                
                </td>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-45px me-5'>
                      <img src={toAbsoluteUrl('media/avatars/300-20.jpg')} alt='' />
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-gray-900 fw-bold text-hover-primary fs-6'>
                        Tanuja Joshi
                      </a>
                      
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-gray-900 fw-bold text-hover-primary d-block fs-6'>
                    2 BHK Apartment
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>
                   Jaypee Aman, sector 51
                  </span>
                  <div style= {{paddingTop:'1%'}}>
                  <span className='badge badge-light-primary fs-8 fw-bold'>953 sq.ft</span>
                  <span className='badge badge-light-primary fs-8 fw-bold'>$49.1L</span>
                  <button
            type='button'
            className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            <KTIcon iconName='send' className='fs-2' />
          </button>
                  </div>
                </td>
                <td className='text-end'>
                <div
          className='card-toolbar'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
          title='Click to download leads'
        >
          <a
            href='#'
            className='btn btn-sm btn-primary'
            // data-bs-toggle='modal'
            // data-bs-target='#kt_modal_invite_friends'
          >
            <KTIcon iconName='' className='fs-3' />
           View contact
          </a>
        </div>
                </td>
                <td>
                  <div className='d-flex justify-content-end flex-shrink-0'>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>
                  17 Jan 24, 2:57 pm
                  </span>
                  </div>
                </td>
                </tr>

            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}

export {ListTabularView}
