const nextraPkg = require('nextra');
const nextra = nextraPkg && nextraPkg.default ? nextraPkg.default : nextraPkg;

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx'
});

module.exports = withNextra({
  reactStrictMode: true,
  // ...other Next config...
});
