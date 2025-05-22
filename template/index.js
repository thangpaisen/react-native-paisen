/**
 * @format
 */

import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'
import '@I18n'
import 'react-native-devsettings'

AppRegistry.registerComponent(appName, () => App)
