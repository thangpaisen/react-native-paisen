const presets = ['module:@react-native/babel-preset']
const plugins = [
  [
    'module-resolver',
    {
      root: ['./'],
      extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
      alias: {
        '@Assets': './src/Assets',
        '@Components': './src/Components',
        '@Constants': './src/Constants',
        '@Screens': './src/Screens',
        '@Hooks': './src/Hooks',
        '@I18n': './src/I18n',
        '@Model': './src/Model',
        '@Utils': './src/Utils',
        '@Services': './src/Services',
        '@Store': './src/Store',
        '@Type': './src/Type',
        '@Navigators': './src/Navigators',
      },
    },
  ],
  'react-native-reanimated/plugin',
  [
    'babel-plugin-inline-import',
    {
      extensions: ['.svg'],
    },
  ],
]

module.exports = {
  presets,
  plugins,
}
