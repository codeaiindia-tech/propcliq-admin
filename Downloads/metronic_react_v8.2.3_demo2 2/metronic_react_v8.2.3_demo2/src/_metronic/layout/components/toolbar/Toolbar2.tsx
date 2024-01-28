import React, { FC } from 'react';
import clsx from 'clsx';
import { useLayout } from '../../core';
import { KTIcon, toAbsoluteUrl } from '../../../helpers';
const Toolbar2: FC = () => {
  const { classes } = useLayout();
  return (
    <>
      <div className='toolbar py-5 py-lg-15' id='kt_toolbar'>
        {/* begin::Container */}
        <div
          id='kt_toolbar_container'
          className={clsx(classes.toolbarContainer.join(' '), 'd-flex flex-stack')}
        >
          {/* <DefaultTitle /> */}
          <div className='user_profile-container'>
            <div className='symbol symbol-45px me-5'>
              <img src={toAbsoluteUrl('media/avatars/300-23.jpg')} alt='' />
            </div>
            <div>
              <h3>Hi Investor Delights</h3>
              <span>Hope you're having a great day !</span>
            </div>
          </div>

          {/* begin::Actions */}
          <div className='d-flex align-items-center py-1'>
            {/* begin::Wrapper */}
            <div className='me-4'>
              {/* begin::Menu */}
              {/* <a
                href='#'
                className='btn btn-custom btn-active-white btn-flex btn-color-white btn-active-color-white'
                data-kt-menu-trigger='click'
                data-kt-menu-placement='bottom-end'
                data-kt-menu-flip='top-end'
              >
                <KTIcon iconName='filter' className='fs-5 me-1' />
                Filter
              </a> */}

              {/* end::Menu */}
            </div>
            {/* end::Wrapper */}

            {/* begin::Button */}

            {/* <a
              className='btn bg-body btn-active-color-primary'
              id='kt_toolbar_primary_button'
              data-bs-theme='light'
              onClick={() => setShowCreateAppModal(true)}
            >
              Create
            </a> */}
            {/* end::Button */}
          </div>
          {/* end::Actions */}
        </div>
        {/* end::Container */}
      </div>
    </>
  );
};

export { Toolbar2 };
