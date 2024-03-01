
import clsx from 'clsx'
import React from 'react'
import {KTIcon} from '../../../_metronic/helpers';
import {useThemeMode} from '../../../../src/_metronic/partials/layout/theme-mode/ThemeModeProvider'
import RadioButtonBox from '../../../../src/app/modules/wizards/components/RadioBox/RadioBox';
import { useRadioGroup } from '@mui/material/RadioGroup';

type Props = {
  className: string
}





const PropertyListMainFilter: React.FC<Props> = ({className}) => {
    const {mode} = useThemeMode();
    const lockInPeriod = ['test', 'non-test'];
    const  sectorList = ['Residential', 'Commercial' ];
    const serviceList = ['Buy', 'Rent', 'PG'];
    const propertyType = ['Apartment', 'Independent Floor', 'Independent House', 'Villa', 'Plot', 'Agricultural Land']
  const bhk = ['2 BHK', '3 BHK', '3+ BHK', 'Plot'];
  const saleType = ['New project', 'Resale Properties'];
  const listedBy = ['Investor Delights(Myself) (430)', 'Rakesh kumar(55)'];
    return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0'>
        <h3 className='card-title fw-bold text-gray-900'>Show</h3>
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
      <div className='add_property-group' style={{ marginTop: '30px' }}>
           
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
          <label className='form-label fw-semibold'>Sub - Category</label>

          <div>
            <select
              className='form-select form-select-solid'
              data-kt-select2='true'
              data-placeholder='Select option'
              data-allow-clear='true'
              defaultValue={'1'}
            >
              <option></option>
              <option value='1'>Buy (77)</option>
              <option value='2'>Reported(0)</option>
              <option value='3'>Active(0)</option>
              <option value='4'>Expired(32)</option>
              <option value='4'>Under Review (0)</option>
              <option value='4'>Rejected (0)</option>
              <option value='5'>Delted (34)</option>
              <option value='6'>Expiring Soon (0)</option>
            </select>
          </div>
        </div>

 
      </div>
      {/* end::Body */}
    </div>
  )
}

export {PropertyListMainFilter}
