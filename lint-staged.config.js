module.exports = {
  '*.(ts|tsx|js|jsx)': ['prettier --write', 'eslint --cache --fix'],
  '*.{yml,json,html}': ['prettier --write'],
}
