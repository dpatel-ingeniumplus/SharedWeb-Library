module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'footer-max-line-length': [0, 'always'], // Make sure there is never a max-line-length by disabling the rule
    'body-max-line-length': [0, 'always', 100],
  },
  parserPreset: {
    parserOpts: {
      noteKeywords: ['link:'], // Create a custom keyword to distinguish the footer
    },
  },
};
