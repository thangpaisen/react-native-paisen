import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import * as resources from './Languages'
import { NativeModules, Platform } from 'react-native'

// const getLanguageCode = () => {
//   let locale = 'en'
//   if (Platform.OS === 'android') {
//     locale = NativeModules.I18nManager.localeIdentifier
//   } else {
//     locale = NativeModules.SettingsManager.settings.AppleLocale
//   }

//   if (!locale) {
//     locale = NativeModules.SettingsManager.settings.AppleLanguages[0]
//   }

//   return locale.replace('_', '-')
// }

i18n.use(initReactI18next).init({
  resources: {
    ...Object.entries(resources).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: {
          translation: value,
        },
      }),
      {}
    ),
  },
  lng: 'vi',
  compatibilityJSON: 'v3',
})

export default i18n
