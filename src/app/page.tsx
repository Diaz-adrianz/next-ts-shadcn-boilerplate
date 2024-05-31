import { Card, CardDescription, CardHeader, CardTitle } from '@/components/atoms/card';
import { Separator } from '@/components/atoms/separator';
import { Container } from '@/components/molecules';
import { MainLayout } from '@/components/templates';
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

  return (
    <MainLayout>
      <Container className="py-8">
        <h1 className="mb-4 text-center">
          {/* Next + Typescript + Shadcn UI
          <br /> Project Boilerplate */}
          {t('title')}
        </h1>

        <p className="text-center text-muted-foreground">Designed and built by Diaz in 2024</p>

        <Separator className="my-12" />

        <h4 className="mb-3 text-muted-foreground">Features</h4>

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

        <h4 className="mb-3 text-muted-foreground">Development Features</h4>

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
