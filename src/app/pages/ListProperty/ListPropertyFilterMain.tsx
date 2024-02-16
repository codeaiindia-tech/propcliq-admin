
import clsx from 'clsx'
import React from 'react'
import {KTIcon} from '../../../_metronic/helpers';
import {FilterDropdown} from '../ListProperty/ListFilter';
import {useThemeMode} from '../../../../src/_metronic/partials/layout/theme-mode/ThemeModeProvider'
import RadioButtonBox from '../../../../src/app/modules/wizards/components/RadioBox/RadioBox';

type Props = {
  className: string
}





const ListPropertyFilterMain: React.FC<Props> = ({className}) => {
    const {mode} = useThemeMode();
    const lockInPeriod = ['test', 'non-test'];
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0'>
        <h3 className='card-title fw-bold text-gray-900'>Filter</h3>
        <div className='card-toolbar'>
          {/* begin::Menu */}
          <button
            type='button'
            className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            <KTIcon iconName='category' className='fs-2' />
          </button>
 
          {/* end::Menu */}
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body pt-2'>
      <div className='mb-10'>
      <label className='form-label fw-semibold'>Search:</label>
      <div className='d-flex align-items-center position-relative my-1'>
        <KTIcon iconName='magnifier' className='fs-1 position-absolute ms-6' />
        <input
          type='text'
          data-kt-user-table-filter='search'
          className='form-control form-control-solid w-250px ps-14'
          placeholder='Enter Property Id'
          // value={searchTerm}
          // onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      </div>
  <div className='mb-10'>
          <label className='form-label fw-semibold'>Status:</label>

          <div>
            <select
              className='form-select form-select-solid'
              data-kt-select2='true'
              data-placeholder='Select option'
              data-allow-clear='true'
              defaultValue={'1'}
            >
              <option></option>
              <option value='1'>Approved</option>
              <option value='2'>Pending</option>
              <option value='3'>In Process</option>
              <option value='4'>Rejected</option>
            </select>
          </div>
        </div>

        <div className='mb-10'>
          <label className='form-label fw-semibold'>Member Type:</label>

          <div className='d-flex'>
            <label className='form-check form-check-sm form-check-custom form-check-solid me-5'>
              <input className='form-check-input' type='checkbox' value='1' />
              <span className='form-check-label'>Author</span>
            </label>

            <label className='form-check form-check-sm form-check-custom form-check-solid'>
              <input className='form-check-input' type='checkbox' value='2' defaultChecked={true} />
              <span className='form-check-label'>Customer</span>
            </label>
          </div>
        </div>

        <div className='mb-10'>
          <label className='form-label fw-semibold'>Notifications:</label>

          <div className='form-check form-switch form-switch-sm form-check-custom form-check-solid'>
            <input
              className='form-check-input'
              type='checkbox'
              value=''
              name='notifications'
              defaultChecked={true}
            />
            <label className='form-check-label'>Enabled</label>
          </div>
        </div>

        <div className='add_property-group' style={{ marginTop: '30px' }}>
            <div className='label_for_label'>
              Lock-in Period<span className='mandatoryMarker'>*</span>
            </div>
            <div className='d-flex flex-wrap' style={{ gap: '16px' }}>
              {lockInPeriod.map((val, index) => {
                return (
                  <RadioButtonBox
                    key={index}
                    label={val}
                    
                  />
                );
              })}
            </div>
           
          </div>

        <div className='d-flex justify-content-end'>
          <button
            type='reset'
            className={clsx('btn btn-sm btn-active-light-primary me-2', {
              'btn-light ': mode === 'light',
            })}
            data-kt-menu-dismiss='true'
          >
            Reset
          </button>

          <button type='submit' className='btn btn-sm btn-primary' data-kt-menu-dismiss='true'>
            Apply
          </button>
        </div>
      </div>
      {/* end::Body */}
    </div>
  )
}

export {ListPropertyFilterMain}
