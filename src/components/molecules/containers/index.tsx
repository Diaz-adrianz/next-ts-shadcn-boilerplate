import { cn } from '@/utils';

type Props = {
  children: JSX.Element | JSX.Element[];
  className?: string;
  wrapperClassName?: string;
};

const Container: React.FC<Props> = (props) => {
  return (
    <div className={cn('w-full overflow-x-hidden', props.className)}>
      <div className={cn('mx-auto w-full max-w-5xl p-4 sm:p-6', props.wrapperClassName)}>
        {props.children}
      </div>
    </div>
  );
};

export default Container;
