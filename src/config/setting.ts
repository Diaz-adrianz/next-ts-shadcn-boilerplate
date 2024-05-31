export const Setting = {
  name: 'next-ts-shadcn-boilerplate',
  displayName: 'Next TS Shadcn Boilerplate',
  //   site: 'https://chocoding.vercel.app/',

  versioning: {
    ver: '1.0',
    date: '31-May-2024',
  },

  api: {
    default: process.env.NEXT_API_DEFAULT_URL,
  },

  defaultLanguage: 'id',
  languageSupport: ['en', 'id'] as const,

  numberPrecision: 2,
  moneyPrecision: 0,

  author: {
    name: 'chocoding.in',
    displayName: 'Chocoding',
    github: 'https://github.com/Diaz-adrianz',
    insta: 'https://www.instagram.com/chocoding.in',
    logo: {
      default: 'logo.svg',
      onLight: 'logo-colored.svg',
      onDark: 'logo-white.svg',
    },
  },
};
