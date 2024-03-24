
import clsx from 'clsx'
import React from 'react'
import {KTIcon} from '../../../_metronic/helpers';
import {FilterDropdown} from './ListFilter';
import {useThemeMode} from '../../../_metronic/partials/layout/theme-mode/ThemeModeProvider'
import RadioButtonBox from '../../modules/wizards/components/RadioBox/RadioBox';

type Props = {
  className: string
}





const ListPropertyFilterMain: React.FC<Props> = ({className}) => {
    const {mode} = useThemeMode();
    const lockInPeriod = ['test', 'non-test'];
    const  sectorList = ['Residential', 'Commercial' ];
    const serviceList = ['Buy', 'Rent', 'PG'];
    const propertyType = ['Apartment', 'Independent Floor', 'Independent House', 'Villa', 'Plot', 'Agricultural Land']
  const bhk = ['2 BHK', '2.5 BHK', '3 BHK', '3+ BHK', 'Plot'];
  const saleType = ['New project', 'Resale Properties'];
  const listedBy = ['Investor Delights(Myself) (430)', 'Rakesh kumar(55)'];
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
          <label className='form-label fw-semibold'>Sector:</label>

          <div>
            <select
              className='form-select form-select-solid'
              data-kt-select2='true'
              data-placeholder='Select option'
              data-allow-clear='true'
              defaultValue={'1'}
            >
              <option value='1'>Select</option>
              <option value='Residential'>Residential</option>
              <option value='Commercial'>Commercial</option>
             
            </select>
          </div>
        </div>

      <div className='mb-10'>
      <div className='add_property-group' style={{ marginTop: '30px' }}>
            <div className='label_for_label'>
              Sector<span className='mandatoryMarker'>*</span>
            </div>
            <div className='d-flex flex-wrap' style={{ gap: '16px' }}>
              {sectorList.map((val, index) => {
                return (
                  <RadioButtonBox
                    key={index}
                    label={val}
                    
                  />
                );
              })}
            </div>
           
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
          <label className='form-label fw-semibold'>Service:</label>

          <div className='d-flex'>
          {serviceList.map((val, index) => {
                return ( <label className='form-check form-check-sm form-check-custom form-check-solid me-5'>
              <input className='form-check-input' type='checkbox' value={index} />
              <span className='form-check-label'>{val}</span>
            </label>)})}
          </div>
        </div>

        <div className='mb-10'>
      <label className='form-label fw-semibold'>Locality:</label>
      <div className='d-flex align-items-center position-relative my-1'>
        <KTIcon iconName='magnifier' className='fs-1 position-absolute ms-6' />
        <input
          type='text'
          data-kt-user-table-filter='search'
          className='form-control form-control-solid w-250px ps-14'
          placeholder='Enter Locality here'
          // value={searchTerm}
          // onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      </div>

      <div className='mb-10'>
      <label className='form-label fw-semibold'>Project:</label>
      <div className='d-flex align-items-center position-relative my-1'>
        <KTIcon iconName='magnifier' className='fs-1 position-absolute ms-6' />
        <input
          type='text'
          data-kt-user-table-filter='search'
          className='form-control form-control-solid w-250px ps-14'
          placeholder='Enter Project here'
          // value={searchTerm}
          // onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      </div>

      <div className='mb-10'>
          <label className='form-label fw-semibold'>Property Type:</label>

          <div className='d-flex' style ={{overflow: 'auto'}}>
          {propertyType.map((val, index) => {
                return ( <label className='form-check form-check-sm form-check-custom form-check-solid me-5'>
              <input className='form-check-input' type='checkbox' value={index} />
              <span className='form-check-label'>{val}</span>
            </label>)})}
          </div>
        </div>

        <div className='mb-10'>
          <label className='form-label fw-semibold'>BHK:</label>

          <div className='d-flex'>
          {bhk.map((val, index) => {
                return ( <label className='form-check form-check-sm form-check-custom form-check-solid me-5'>
              <input className='form-check-input' type='checkbox' value={index} />
              <span className='form-check-label'>{val}</span>
            </label>)})}
          </div>
        </div>

        <div className='mb-10'>
          <label className='form-label fw-semibold'>Sale type:</label>

          <div className='d-flex'>
          {saleType.map((val, index) => {
                return ( <label className='form-check form-check-sm form-check-custom form-check-solid me-5'>
              <input className='form-check-input' type='checkbox' value={index} />
              <span className='form-check-label'>{val}</span>
            </label>)})}
          </div>
        </div>

        
        <div className='mb-10'>
          <label className='form-label fw-semibold'>Listed By:</label>

          <div className='d-flex'>
          {listedBy.map((val, index) => {
                return ( <label className='form-check form-check-sm form-check-custom form-check-solid me-5'>
              <input className='form-check-input' type='checkbox' value={index} />
              <span className='form-check-label'>{val}</span>
            </label>)})}
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
