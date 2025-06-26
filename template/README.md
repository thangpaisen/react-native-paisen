# 🚀 React Native Base Project

> A modern, production-ready React Native template with TypeScript, Redux Toolkit, React Navigation and many pre-configured features to kickstart your mobile app development.

## ✨ Key Features

### 🏗️ Architecture & State Management

- **TypeScript** - Type safety and better development experience
- **Redux Toolkit** - Modern state management with simplified store setup
- **Redux Persist** - Persist state to local storage
- **React Navigation v7** - Navigation with Stack and Bottom Tab
- **Custom Hooks** - Reusable logic with hooks pattern

### 🎨 UI & Styling

- **Custom Components** - Pre-built reusable UI components
- **React Native Vector Icons** - Rich icon library
- **React Native SVG** - SVG icons support
- **React Native Fast Image** - Optimized image loading performance
- **React Native Animatable** - Simple animation effects

### 🛠️ Utilities & Tools

- **React Hook Form** - Efficient form management
- **Axios** - Pre-configured HTTP client
- **Lodash** - Utility functions library
- **i18next** - Internationalization support
- **Image Picker** - Pick images from library or camera
- **Permissions** - Access permissions management
- **Gesture Handler** - Advanced gesture handling
- **Reanimated** - High-performance animations

### 📱 Platform Support

- **iOS** - Xcode project configuration with CocoaPods
- **Android** - Gradle build system
- **Privacy Info** - Apple's privacy policy compliance

## 📁 Project Structure

```
template/
├── src/
│   ├── Assets/           # Resources (fonts, icons, images)
│   ├── Components/       # Reusable components
│   │   ├── Button/       # Button component
│   │   ├── CheckBox/     # Checkbox component
│   │   ├── Header/       # Header component
│   │   ├── IconSvg/      # SVG icon component
│   │   ├── Input/        # Input component
│   │   ├── InputField/   # Input field with validation
│   │   ├── Loading/      # Loading component
│   │   ├── Popup/        # Modal/Popup component
│   │   ├── Text/         # Text component with styling
│   │   └── Toast/        # Toast notification
│   ├── Constants/        # Constants (colors, fonts, texts)
│   ├── Hooks/           # Custom hooks
│   │   ├── usePickerImage.ts  # Image picker hook
│   │   ├── useStore.ts        # Redux store hook
│   │   └── useToast.ts        # Toast hook
│   ├── I18n/            # Internationalization
│   ├── Models/          # Type definitions & models
│   ├── Navigators/      # React Navigation setup
│   ├── Redux/           # Redux store, slices, thunks
│   │   ├── Slices/      # Redux slices
│   │   └── Thunks/      # Async thunks
│   ├── Screens/         # Application screens
│   │   ├── auth/        # Authentication screens
│   │   ├── example/     # Example screens
│   │   ├── home/        # Home screen
│   │   ├── profile/     # Profile screen
│   │   └── splash/      # Splash screen
│   ├── Services/        # API services
│   └── Utils/           # Utility functions
├── android/             # Android native code
├── ios/                 # iOS native code
└── __tests__/           # Test files
```

## 🚀 Getting Started

### System Requirements

- Node.js >= 16
- React Native CLI
- Xcode (for iOS development)
- Android Studio (for Android development)
- CocoaPods (for iOS dependencies)

### Install Dependencies

```bash
# Install npm packages
npm install

# Install iOS dependencies
cd ios && pod install
```

### Run Application

#### iOS

```bash
npm run ios
```

#### Android

```bash
npm run android
```

#### Start Metro Bundler

```bash
npm start
```

## 📝 Available Scripts

- `npm run android` - Run app on Android
- `npm run ios` - Run app on iOS
- `npm run start` - Start Metro bundler
- `npm run test` - Run tests
- `npm run lint` - Check code style with ESLint
- `npm run android:release` - Build Android release APK
- `npm run android:aab` - Build Android App Bundle
- `npm run android:clean` - Clean Android build
- `npm run ios:clean` - Clean iOS build

## 🎯 Usage

### Redux Store

Template includes pre-configured Redux store with basic slices:

```typescript
// src/Redux/store.ts
import { useAppDispatch, useAppSelector } from '@Hooks'

// In component
const dispatch = useAppDispatch()
const user = useAppSelector((state) => state.user)
```

### Navigation

```typescript
// src/Navigators/Application.tsx
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// Usage in component
import { useNavigation } from '@react-navigation/native'

const MyComponent = () => {
  const navigation = useNavigation()

  const goToProfile = () => {
    navigation.navigate('Profile')
  }
}
```

### API Services

Template includes BaseServices to handle API calls. Here are examples of using Services in different screens:

#### 1. Using Services in Screen with Redux Thunk

```typescript
// src/Screens/home/index.tsx
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@Hooks'
import { fetchMovies } from '@Redux/Thunks/movieThunk'

const HomeScreen = () => {
  const dispatch = useAppDispatch()
  const { movies, loading, error } = useAppSelector((state) => state.movie)

  useEffect(() => {
    // Call API through Redux Thunk
    dispatch(fetchMovies())
  }, [dispatch])

  return (
    // Render UI with API data
    <View>
      {loading && <LoadingCM />}
      {error && <Text>Error: {error}</Text>}
      {movies.map((movie) => (
        <Text key={movie.id}>{movie.title}</Text>
      ))}
    </View>
  )
}
```

#### 2. Using Services directly in Component

```typescript
// src/Screens/profile/index.tsx
import React, { useState, useEffect } from 'react'
import { UserServices } from '@Services'

const ProfileScreen = () => {
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(false)

  const loadProfile = async () => {
    try {
      setLoading(true)
      const response = await UserServices.getProfile()
      setProfile(response.data)
    } catch (error) {
      console.error('Load profile error:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadProfile()
  }, [])

  return (
    <View>
      {loading && <LoadingCM />}
      {profile && (
        <View>
          <Text>{profile.name}</Text>
          <Text>{profile.email}</Text>
        </View>
      )}
    </View>
  )
}
```

## 🔧 Configuration

### Alias Paths

Template includes pre-configured alias paths in `babel.config.js`:

- `@Assets` → `./src/Assets`
- `@Components` → `./src/Components`
- `@Constants` → `./src/Constants`
- `@Screens` → `./src/Screens`
- `@Hooks` → `./src/Hooks`
- `@I18n` → `./src/I18n`
- `@Models` → `./src/Models`
- `@Utils` → `./src/Utils`
- `@Services` → `./src/Services`
- `@Redux` → `./src/Redux`
- `@Navigators` → `./src/Navigators`

### TypeScript

The `tsconfig.json` file is configured with corresponding paths to support IntelliSense.

### Metro Config

Metro bundler is configured to support SVG transform and other assets.

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm test -- --coverage
```

## 📱 Production Build

### Android

```bash
# Build APK
npm run android:release

# Build AAB (recommended for Google Play)
npm run android:aab
```

### iOS

1. Open project in Xcode
2. Select scheme "RNBaseProject"
3. Product → Archive

## 🔄 Update Dependencies

```bash
# Check outdated packages
npm outdated

# Update packages
npm update

# Update iOS dependencies
cd ios && pod update
```

## 🐛 Troubleshooting

### iOS build errors

```bash
# Clean and rebuild
npm run ios:clean
cd ios && pod install
npm run ios
```

### Android build errors

```bash
# Clean and rebuild
npm run android:clean
npm run android
```

### Metro bundler issues

```bash
# Reset cache
npx react-native start --reset-cache
```

## 📄 License

MIT

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

## 📞 Support

If you encounter any issues or have questions, please create an issue in this repository.

## 📋 Development Guidelines

Before contributing to this project, please read our development guidelines:

- **[Coding Conventions](./CODING_CONVENTIONS.md)** - Comprehensive coding standards and best practices
- **[Contributing Guidelines](./CONTRIBUTING.md)** - How to contribute to this project
- **[.editorconfig](./.editorconfig)** - Editor configuration for consistent formatting

### Quick Start for Developers

1. Follow the coding conventions outlined in `CODING_CONVENTIONS.md`
2. Use TypeScript for all new code
3. Run `npm run lint` before committing
4. Write tests for new features
5. Follow the established folder structure
