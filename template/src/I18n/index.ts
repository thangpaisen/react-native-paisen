import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import * as resources from './Languages'

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
