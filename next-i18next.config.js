module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'de'],
  },
  localePath:
    typeof window === 'undefined' ? require('path').resolve('./public/locales') : '/locales',
};
