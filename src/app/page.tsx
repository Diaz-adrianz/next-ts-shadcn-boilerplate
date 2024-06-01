'use client';

import { Button } from '@/components/atoms';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/atoms/card';
import { Separator } from '@/components/atoms/separator';
import { Container } from '@/components/molecules';
import { MainLayout } from '@/components/templates';
import { Connections } from '@/config';
import { axiosApi } from '@/lib';
import { TmainApiResponse } from '@/types/api';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Home');

  const features = [
    {
      ic: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
      name: 'Next 14',
      desc: 'Powerful React framework, with Typescript.',
    },
    {
      ic: 'https://avatars.githubusercontent.com/u/139895814?s=200&v=4',
      name: 'Shadcn UI',
      desc: 'Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.',
    },
    {
      ic: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
      name: 'Tailwind CSS',
      desc: 'A utility-first CSS framework packed with classes',
    },
    {
      ic: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg',
      name: 'Redux',
      desc: 'A JS library for predictable and maintainable global state management.',
    },
    {
      ic: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg',
      name: 'Axios',
      desc: 'a promise-based HTTP Client for node.js and the browser.',
    },
    {
      name: 'i18n',
      desc: 'Internationalization-framework written in and for JavaScript',
    },
  ];

  const devFeatures = [
    {
      ic: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eslint/eslint-original.svg',
      name: 'Eslint',
      desc: 'The pluggable linting utility for JavaScript and JSX',
    },
    {
      ic: '',
      name: 'Husky',
      desc: 'Modern native git hooks made easy. Husky enhances your commits and more woof!.',
    },
    {
      ic: '',
      name: 'Conventional Commit',
      desc: 'Commitlint checks if your commit messages meet the conventional',
    },

    {
      ic: '',
      name: 'Prettier',
      desc: 'An opinionated code formatter',
    },
  ];

  const testGet = () => {
    type data = {
      id: number;
      name: string;
    };

    axiosApi.get<TmainApiResponse<data[]>>('/post/category').then((res) => {
      res.data.data.forEach((dat) => console.log(dat.name));
    });
  };

  const testPost = () => {};

  return (
    <MainLayout>
      <Container className="py-8">
        <h1 className="mb-4 text-center">{t('title')}</h1>

        <p className="mb-8 text-center text-muted-foreground">
          {t('subtitle', { name: 'Diaz', year: '2024' })}
        </p>

        <div className="flex justify-center gap-3">
          <Button variant={'secondary'} onClick={testGet}>
            Get request
          </Button>
          <Button variant={'secondary'} onClick={testPost}>
            Post request
          </Button>
          <Button variant={'secondary'}>Increment</Button>
          <Button variant={'secondary'}>Decrement</Button>
        </div>

        <Separator className="my-12" />

        <h4 className="mb-3 text-muted-foreground">{t('features')}</h4>

        <div className="mb-6 grid grid-cols-2 gap-6 md:grid-cols-3">
          {features.map((feat, i) => (
            <Card key={i} className="flex flex-col items-start sm:flex-row">
              {feat.ic && (
                <div className="ps-4 pt-5">
                  <img src={feat.ic} alt="" className="min-w-8 max-w-8" />
                </div>
              )}
              <CardHeader className="!mt-0">
                <CardTitle>{feat.name}</CardTitle>
                <CardDescription>{feat.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <h4 className="mb-3 text-muted-foreground">{t('development_features')}</h4>

        <div className="mb-6 grid grid-cols-2 gap-6 md:grid-cols-3">
          {devFeatures.map((feat, i) => (
            <Card key={i} className="flex flex-col items-start sm:flex-row">
              {feat.ic && (
                <div className="ps-4 pt-5">
                  <img src={feat.ic} alt="" className="min-w-8 max-w-8" />
                </div>
              )}
              <CardHeader className="!mt-0">
                <CardTitle>{feat.name}</CardTitle>
                <CardDescription>{feat.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Container>
    </MainLayout>
  );
}
