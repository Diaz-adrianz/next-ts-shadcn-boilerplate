import { GithubIcon } from 'lucide-react';
import { Button } from '../atoms/button';
import Image from 'next/image';

type Props = {
	children: JSX.Element | JSX.Element[];
};

const MainLayout: React.FC<Props> = (props) => {
	return (
		<main className="w-screen min-h-screen">
			<div className="flex px-6 py-2 items-center gap-3 bg-stone-100">
				<Image src={'/images/logo-colored.svg'} alt="Chocoding.in logo" width={20} height={20} />
				<p className="text-large me-auto">Chocoding</p>
				<Button asChild variant={'link'} size={'fit'}>
					<a href="https://github.com/Diaz-adrianz" target="_blank">
						Github
					</a>
				</Button>
			</div>
			{props.children}
		</main>
	);
};

export default MainLayout;
