## Next TS Shadcn Boilerplate

A ready to go boilerplate for starting Web Development project especially with NextJS. Focused on Simplifies the development process, enhancing efficiency and maintainability. Ensures comprehensive coverage of fundamental and common needs. Continuously striving to stay updated.

## Run Locally

Clone the project

```bash
  git clone < repository link >
```

Go to the project directory

```bash
  cd next-ts-shadcn-boilerplate
```

Install dependencies

```bash
  npm install
```

Prepare dependencies, optional. Currently just to prepare husky.

```bash
  npm run prepare
```

Start the development server at port 3000

```bash
  npm run start:dev
```

## Tech Stack

- [next 14](https://nextjs.org)
- [react 18](https://reactjs.org/)
- [shadcn ui](https://ui.shadcn.com/)
- [tailwindcss](https://tailwindcss.com/)
- [react-redux](https://react-redux.js.org/)
- [redux-toolkit](https://redux-toolkit.js.org)
- [axios](https://axios-http.com/docs/intro)
- [react-i18next](https://github.com/i18next/react-i18next)
- [react-lucide](https://lucide.dev/)
- [eslint](https://eslint.org/)
- [prettier](https://prettier.io/)
- [husky](https://typicode.github.io/husky/#/)/[lint-staged](https://github.com/okonet/lint-staged)
- [commitlint](https://commitlint.js.org/)

## Project Structure

```sh
public
├── fonts             # Assets for custom fonts
├── images            # Assets for images
src
├── app               # Next app routing
├── components
  ├── atoms           # Shadcn components here
  ├── molecules
  ├── organisms
  └── templates       # layout components
├── config            # App configuration and setting (redux, i18n, etc.)
├── constant          # Constant values (e.g for dropdown data)
├── hooks             # React hooks
├── langs             # languange translation data
├── lib               # Services for axios, browser storage, thirdparty, etc.
├── store             # Redux state management
  └── [feature name]
    ├── index.ts      # Redux feature's slice
    └── extras.ts     # Redux toolkit query for API fetching
├── types             # Typescript data type definition
├── utils             # Utility / helper functions
└── middleware.ts
```

## Authors

- [@Diaz-Adrianz](https://github.com/Diaz-adrianz)

## Feedback

If you have any feedback, please reach out me at [email](mailto:diazz.developer@gmail.com)

## License

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
