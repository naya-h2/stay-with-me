import BarIcon from '~/icon/signup-progress.svg';
import { StepType } from '../page';

interface Props {
  step: StepType;
}

const SELETED_STYLE = {
  default: '#989ba2',
  selected: '#00C7BE',
};

function ProgressBar({ step }: Props) {
  return (
    <div className="flex gap-6 w-[200px] m-auto">
      <BarIcon fill={step === 'account' ? '#00C7BE' : '#989ba2'} />
      <BarIcon fill={step === 'address' ? '#00C7BE' : '#989ba2'} />
    </div>
  );
}

export default ProgressBar;
