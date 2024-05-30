'use client';

import { Button } from '../atoms/button';
import Image from 'next/image';
import { ThemeToggle } from '../molecules';
import { useTheme } from 'next-themes';

type Props = {
	children: JSX.Element | JSX.Element[];
};

const MainLayout: React.FC<Props> = (props) => {
	const { theme } = useTheme();

	return (
		<main className="w-screen min-h-screen">
			<div className="flex px-6 py-2 items-center gap-3 bg-stone-100 dark:bg-stone-900">
				<Image
					src={theme == 'light' ? '/images/logo-colored.svg' : '/images/logo-white.svg'}
					alt="Chocoding.in logo"
					width={20}
					height={20}
				/>
				<p className="text-large me-auto">Chocoding</p>

				<ThemeToggle />
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
