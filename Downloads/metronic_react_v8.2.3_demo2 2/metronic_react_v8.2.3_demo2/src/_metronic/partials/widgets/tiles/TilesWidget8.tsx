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
const TilesWidget8 = (props: Props) => {
  const { className, svgIcon, titleClass, descriptionClass, iconClass, title, description } = props;
  return (
    <a href='#' className={clsx('card', className)}>
      <div className='card-body d-flex flex-column justify-content-between'>
        <div className='question_card-container'>
          <h2 className=''>Answers the Questions raised by Customers</h2>
          <span>These are the questions raised by users who visited your listings</span>
          <hr />
          <p>You have not been asked any question</p>
        </div>
      </div>
    </a>
  );
};

export { TilesWidget8 };
