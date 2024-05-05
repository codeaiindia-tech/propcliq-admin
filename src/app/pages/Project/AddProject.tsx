import { FC } from "react";
import { Toolbar } from '../../../_metronic/layout/components/toolbar/Toolbar'
import { Content } from '../../../_metronic/layout/components/Content'
import {AddProjectFormPage} from './AddProjectFormPage';

const AddProject: FC<any> = (props: any) => {
 
  const ProjectPage = () => (
    <>
      <Toolbar />
      <Content>
        {/* begin::Row */}
        <div className='row gy-5 gx-xl-8' style={{height:'2000px'}}>
          <div className='col-xl-12'>
            <AddProjectFormPage className='card-xxl-stretch mb-5 mb-xl-8' />
          </div>
        </div>
        {/* end::Row */}
      </Content>
    </>
  )

  return (
    <div style={{ padding: "0px 50px" }}>
      <ProjectPage />
    </div>
  );
};

export { AddProject };
