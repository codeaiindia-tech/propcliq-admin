import { useEffect, useRef, useState } from 'react';
import { KTIcon } from '../../../_metronic/helpers';
import { Step1 } from './AddPropertyDetail';
import { Step2 } from './AddAddressDetail';
import {Step3} from './AddPhoto';
import {Step4} from   './ReviewPropertyDetail';
// import { Previews } from './PhotoUpload';
// import { Step3 } from './steps/Step3';
// import { Step4 } from './steps/Step4';
// import { Step5 } from './steps/Step5';
import { StepperComponent } from '../../../_metronic/assets/ts/components';
import { Form, Formik, FormikValues } from 'formik';
// import { createAccountSchemas, ICreateAccount, inits } from './CreateAccountWizardHelper';
import { Toolbar } from '../../../_metronic/layout/components/toolbar/Toolbar';
import { Content } from '../../../_metronic/layout/components/Content';

import { useNavigate } from 'react-router-dom';
const AddPropertyLayout = () => {
    const [stepNumber, setStepNumber] = useState('1');
    const [propertyType, setPropertyType] = useState('Residential');
    const [reviewData, setReviewData] = useState();
    const stepperRef = useRef<HTMLDivElement | null>(null);
    const [stepper, setStepper] = useState<StepperComponent | null>(null);
    // const [currentSchema, setCurrentSchema] = useState(createAccountSchemas[0]);
    // const [initValues] = useState<ICreateAccount>(inits);
    // const navigate = useNavigate();
    const loadStepper = () => {
      setStepper(StepperComponent.createInsance(stepperRef.current as HTMLDivElement));
    };

    // const prevStep = () => {
    //   if (!stepper) {
    //     return;
    //   }

    //   stepper.goPrev();

    //   setCurrentSchema(createAccountSchemas[stepper.currentStepIndex - 1]);
    // };

    // const submitStep = (values: ICreateAccount, actions: FormikValues) => {
    //   if (!stepper) {
    //     return;
    //   }

    //   if (stepper.currentStepIndex !== stepper.totalStepsNumber) {
    //     stepper.goNext();
    //   } else {
    //     stepper.goto(1);
    //     actions.resetForm();
    //   }

    //   console.log(values);

    //   setCurrentSchema(createAccountSchemas[stepper.currentStepIndex - 1]);
    // };
    const handleCommSubmitStep1 = (val: string): any => {
        setPropertyType(val);
    };

    const handleSubmitStep1 = () => {
        setStepNumber('2');
    };

    const handleSubmitStep2 = () => {
        setStepNumber('3'); 
    }

    const handleSubmitStep3 = () => {
        setStepNumber('4'); 
    }

    const sendDataToReview =(data:any) => {
console.log('data',data)
setReviewData(data)
    }
    useEffect(() => {
      if (!stepperRef.current) {
        return;
      }

      loadStepper();
    }, [stepperRef]);
   


    const RenderComponent = (stepNum:any) => {
        if(stepNum === '1'){
            return (
                <Step1 handleSubmitStep1={handleSubmitStep1} handleCommSubmitStep1={handleCommSubmitStep1} />
            )
        } else if (stepNum === '2') {
            return (
            <Step2  handleSubmitStep2 = {handleSubmitStep2} />
            )
        }  else if (stepNum === '3'){
            return (
                <Step3 handleSubmitStep3 = {handleSubmitStep3} sendDataToReview = {sendDataToReview} />
                )
        } else {
            return (
            <Step4 reviewData = {reviewData} /> 
            )
        }
       
      }
    

    return (
        <>
            {/* <Toolbar /> */}
            <Content>
                <div
                    className="stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid"
                    id="kt_create_account_stepper"
                    style={{ marginTop: '80px' }}
                >
                    {/* begin::Aside*/}
                    <div className="card d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px w-xxl-400px me-9">
                        {/* begin::Wrapper*/}
                        <div className="card-body px-6 px-lg-10 px-xxl-15 py-20">
                            {/* begin::Nav*/}
                            <div className="stepper-nav">
                                {/* begin::Step 1*/}
                                <div className="stepper-item current" data-kt-stepper-element="nav">
                                    {/* begin::Wrapper*/}
                                    <div className="stepper-wrapper">
                                        {/* begin::Icon*/}
                                        <div className="stepper-icon w-40px h-40px">
                                            <i className="stepper-check fas fa-check"></i>
                                            <span className="stepper-number">1</span>
                                        </div>
                                        {/* end::Icon*/}

                                        {/* begin::Label*/}
                                        <div className="stepper-label">
                                            <h3 className="stepper-title">{propertyType === 'Residential' ? 'Property Details' : 'BasicDetails'}</h3>
                                            <div className="stepper-desc fw-semibold">In progress</div>
                                        </div>
                                        {/* end::Label*/}
                                    </div>
                                    {/* end::Wrapper*/}

                                    {/* begin::Line*/}
                                    <div className="stepper-line h-40px"></div>
                                    {/* end::Line*/}
                                </div>
                                {/* end::Step 1*/}

                                {/* begin::Step 2*/}
                                <div className="stepper-item" data-kt-stepper-element="nav">
                                    {/* begin::Wrapper*/}
                                    <div className="stepper-wrapper">
                                        {/* begin::Icon*/}
                                        <div className="stepper-icon w-40px h-40px">
                                            <i className="stepper-check fas fa-check"></i>
                                            <span className="stepper-number">2</span>
                                        </div>
                                        {/* end::Icon*/}

                                        {/* begin::Label*/}
                                        <div className="stepper-label">
                                            <h3 className="stepper-title">{propertyType === 'Residential' ? 'Address' : 'Property detail'}</h3>
                                            <div className="stepper-desc fw-semibold">Pending</div>
                                        </div>
                                        {/* end::Label*/}
                                    </div>
                                    {/* end::Wrapper*/}

                                    {/* begin::Line*/}
                                    <div className="stepper-line h-40px"></div>
                                    {/* end::Line*/}
                                </div>
                                {/* end::Step 2*/}

                                {/* begin::Step 3*/}
                                <div className="stepper-item" data-kt-stepper-element="nav">
                                    {/* begin::Wrapper*/}
                                    <div className="stepper-wrapper">
                                        {/* begin::Icon*/}
                                        <div className="stepper-icon w-40px h-40px">
                                            <i className="stepper-check fas fa-check"></i>
                                            <span className="stepper-number">3</span>
                                        </div>
                                        {/* end::Icon*/}

                                        {/* begin::Label*/}
                                        <div className="stepper-label">
                                            <h3 className="stepper-title">{propertyType === 'Residential' ? 'Photos' : 'Aminities'} </h3>
                                            <div className="stepper-desc fw-semibold">Pending</div>
                                        </div>
                                        {/* end::Label*/}
                                    </div>
                                    {/* end::Wrapper*/}

                                    {/* begin::Line*/}
                                    <div className="stepper-line h-40px"></div>
                                    {/* end::Line*/}
                                </div>
                                {/* end::Step 3*/}

                              

                                {/* begin::Step 5*/}
                                <div className="stepper-item" data-kt-stepper-element="nav">
                                    {/* begin::Wrapper*/}
                                    <div className="stepper-wrapper">
                                        {/* begin::Icon*/}
                                        <div className="stepper-icon w-40px h-40px">
                                            <i className="stepper-check fas fa-check"></i>
                                            <span className="stepper-number">4</span>
                                        </div>
                                        {/* end::Icon*/}

                                        {/* begin::Label*/}
                                        <div className="stepper-label">
                                            <h3 className="stepper-title">Review</h3>
                                            <div className="stepper-desc fw-semibold">Woah, we are here</div>
                                        </div>
                                        {/* end::Label*/}
                                    </div>
                                    {/* end::Wrapper*/}
                                </div>
                                {/* end::Step 5*/}
                            </div>
                            {/* end::Nav*/}
                        </div>
                        {/* end::Wrapper*/}
                    </div>
                    {/* begin::Aside*/}

                    <div className="d-flex flex-row-fluid flex-center bg-body rounded py-20  px-9" style={{ overflowY: 'scroll', height: stepNumber === '1' ? '700px' :'0%' }} >
                        <div className="current" style ={{width:'100%'}}  data-kt-stepper-element="content">

                            {RenderComponent(stepNumber)}
                            {/* {stepNumber === '1' ? (
                                <Step1 handleSubmitStep1={handleSubmitStep1} handleCommSubmitStep1={handleCommSubmitStep1} />
                            ) : (
                                <Step2  handleSubmitStep2 = {handleSubmitStep2} />
                            )} */}
                        </div>

                        {/* <div data-kt-stepper-element='content'>
              <Step2 />
            </div> */}

                        <div data-kt-stepper-element="content"><Step2 /></div>

                        {/* <div data-kt-stepper-element="content"><Step4 /></div> */}

                        <div data-kt-stepper-element="content">{/* <Step5 /> */}</div>

                        <div className="d-flex flex-stack pt-10">
                            <div className="mr-2">
                                <button type="button" className="btn btn-lg btn-light-primary me-3" data-kt-stepper-action="previous">
                                    <KTIcon iconName="arrow-left" className="fs-4 me-1" />
                                    Back
                                </button>
                            </div>
                        </div>
                        {/* </Form>
              )}
            </Formik> */}
                    </div>
                </div>
            </Content>
        </>
    );
};

export { AddPropertyLayout };
