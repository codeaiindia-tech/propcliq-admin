
import clsx from 'clsx'
import React from 'react'
import {KTIcon} from '../../../_metronic/helpers';
// import {FilterDropdown} from '../ListProperty/ListFilter';
import {useThemeMode} from '../../../_metronic/partials/layout/theme-mode/ThemeModeProvider'
import RadioButtonBox from '../../modules/wizards/components/RadioBox/RadioBox';

type Props = {
  className: string
}





const ListPackageFilterMain: React.FC<Props> = ({className}) => {
    const {mode} = useThemeMode();
    const lockInPeriod = ['test', 'non-test'];
    const  sectorList = ['Residential', 'Commercial' ];
    const serviceList = ['Buy', 'Rent', 'PG'];
    const propertyType = ['Apartment', 'Independent Floor', 'Independent House', 'Villa', 'Plot', 'Agricultural Land']
  const bhk = ['2 BHK', '2.5 BHK', '3 BHK', '3.5 BHK', '3+ BHK', 'Plot'];
  const saleType = ['New project', 'Resale Properties'];
  const listedBy = ['Investor Delights(Myself) (430)', 'Rakesh kumar(55)'];
    return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0'>
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
          <label className='form-label fw-semibold'>Package status:</label>

          <div  className='d-flex justify-content-end'>
            <select
              className='form-select form-select-solid'
              data-kt-select2='true'
              data-placeholder='Select option'
              data-allow-clear='true'
              defaultValue={'1'}
            >
              
              <option value='Active'>Active product</option>
              <option value='Upcoming'>Upcoming Product</option>
              <option value='Expired'>Expired Product</option>
            </select>
            <button type='submit' className='btn btn-sm btn-primary' data-kt-menu-dismiss='true'>
            Apply
          </button>
          </div>
          
        </div>






        <div>
         

        
        </div>
      </div>
      {/* end::Body */}
    </div>
  )
}

export {ListPackageFilterMain}
