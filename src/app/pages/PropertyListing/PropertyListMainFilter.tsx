
import clsx from 'clsx'
import React , {useState} from 'react'
import {KTIcon} from '../../../_metronic/helpers';
import {useThemeMode} from '../../../../src/_metronic/partials/layout/theme-mode/ThemeModeProvider'


type Props = {
  className: string,
  sendFilterData: any
}





const PropertyListMainFilter: React.FC<Props> = (props:any ) => {
  console.log('propssss', props)
  const {className, sendFilterData} = props;
  
    const {mode} = useThemeMode();
    const lockInPeriod = ['test', 'non-test'];
    const  sectorList = ['Residential', 'Commercial' ];
    const serviceList = ['Buy', 'Rent', 'PG'];
    const propertyType = ['Apartment', 'Independent Floor', 'Independent House', 'Villa', 'Plot', 'Agricultural Land']
  const bhk = ['1RK', '2 BHK', '2.5 BHK', '3 BHK', '3.5 BHK', '3+ BHK', 'Plot'];
  const saleType = ['New project', 'Resale Properties'];
  const listedBy = ['Investor Delights(Myself) (430)', 'Rakesh kumar(55)'];


  const [sector, setSector] =  useState('');
  const [bhkValue, setBhkValue] =  useState('');
  const [propertyTypeValue, setPropertyTypeValue] =  useState('');

  const handleFilterProperty = () => {
    const data = {
      "category": sector,
      "property_type": propertyTypeValue,
      "bhk": bhkValue
    }
    sendFilterData(data)  
  }

  const handleResetFilterProperty = () => {
    setSector('')
    setBhkValue('')
    setPropertyTypeValue('')
    const data = {}
    
    sendFilterData(data)  
  }
  
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
          <label className='form-label fw-semibold'>Sector:</label>

          <div>
            <select
              className='form-select form-select-solid'
              data-kt-select2='true'
              data-placeholder='Select option'
              data-allow-clear='true'
              defaultValue={'1'}
              value={sector} 
              onChange={(e) => setSector(e.target.value)} 
            >
            <option value='1'>Select</option>
            {sectorList.map( (x) => (
              <option value={x} >{x}</option>
            )
              
              )}  
             
             
            </select>
          </div>
        </div>

        <div className='mb-10'>
          <label className='form-label fw-semibold'>Property Type:</label>

          <div>
            <select
              className='form-select form-select-solid'
              data-kt-select2='true'
              data-placeholder='Select option'
              data-allow-clear='true'
              defaultValue={'1'}
              value={propertyTypeValue} 
              onChange={(e) => setPropertyTypeValue(e.target.value)} 
            >
              <option value='1'>Select</option>
          
            {propertyType.map(x => (
               <option value={x} >{x}</option>
            )
              
              )}  
             
            </select>
          </div>
        </div>

        <div className='mb-10'>
          <label className='form-label fw-semibold'>BhK:</label>

          <div>
            <select
              className='form-select form-select-solid'
              data-kt-select2='true'
              data-placeholder='Select option'
              data-allow-clear='true'
              defaultValue={'1'}
              value={bhkValue} 
              onChange={(e) => setBhkValue(e.target.value)} 
            >
              <option value='1'>Select</option>
              {bhk.map(x => (
               <option value={x} >{x}</option>
            ))}
             
            </select>
          </div>
        </div>

        <div className='d-flex justify-content-end'>
          <button
            type='reset'
            className={clsx('btn btn-sm btn-active-light-primary me-2', {
              'btn-light ': mode === 'light',
            })}
            data-kt-menu-dismiss='true'
            onClick={handleResetFilterProperty}
          >
            Reset
          </button>
        
          <button onClick={handleFilterProperty} className='btn btn-sm btn-primary' data-kt-menu-dismiss='true'>
            Apply
          </button>
        </div>

 
      </div>
      {/* end::Body */}
    </div>
  )
}

export {PropertyListMainFilter}
