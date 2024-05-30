import { cn } from '@/lib/utils';

type Props = {
	children: JSX.Element | JSX.Element[];
	className?: string;
	wrapperClassName?: string;
};

const Container: React.FC<Props> = (props) => {
	return (
		<div className={cn('w-full', props.className)}>
			<div className={cn('w-full mx-auto max-w-5xl p-4 sm:p-6', props.wrapperClassName)}>{props.children}</div>
		</div>
	);
};

export default Container;