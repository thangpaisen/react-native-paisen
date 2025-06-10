# 🚀 React Native Paisen Template

> A modern, production-ready React Native template with TypeScript, Redux Toolkit, React Navigation, and many pre-configured features to kickstart your mobile app development.

[![npm downloads](https://img.shields.io/npm/dm/react-native-template-paisen)](https://www.npmjs.com/package/react-native-template-paisen)
[![npm version](https://img.shields.io/npm/v/react-native-template-paisen)](https://www.npmjs.com/package/react-native-template-paisen)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

### 🏗️ Architecture & State Management

- **TypeScript** - Type safety and better development experience
- **Redux Toolkit** - Modern Redux with simplified store management
- **React Navigation v7** - Stack and Bottom Tab navigation
- **Custom Hooks** - Reusable logic with hooks pattern

### 🎨 UI & Styling

- **Custom Components** - Pre-built reusable UI components
- **Typography System** - Consistent text styling
- **Color Palette** - Organized color constants
- **Icon System** - SVG icon components
- **Fast Image** - Optimized image loading

### 🌐 Internationalization & Services

- **i18next** - Multi-language support
- **HTTP Client** - Axios-based API service layer
- **Async Storage** - Persistent local data storage

### 🧪 Development Tools

- **ESLint** - Code linting and formatting
- **Jest** - Unit testing framework
- **React Native DevSettings** - Development utilities
- **Metro Config** - Optimized bundler configuration

## 🚀 Quick Start

### Create a new project

```bash
npx @react-native-community/cli init MyApp --template react-native-template-paisen
```

**Alternative methods:**

```bash
# Using GitHub URL
npx @react-native-community/cli init MyApp --template https://github.com/thangpaisen/react-native-paisen.git

# Using local template
npx @react-native-community/cli init MyApp --template file:///path/to/react-native-template-paisen
```

### Navigate to your project

```bash
cd MyApp
```

## 📱 Running the Application

### Prerequisites

Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions.

### iOS

```bash
# Install iOS dependencies
cd ios && pod install && cd ..

# Run on iOS simulator
npm run ios

# Clean iOS build
npm run ios:clean
```

### Android

```bash
# Run on Android emulator/device
npm run android

# Build release APK
npm run android:release

# Build release AAB
npm run android:aab

# Clean Android build
npm run android:clean
```

### Development

```bash
# Start Metro bundler
npm start

# Run tests
npm test

# Lint code
npm run lint
```

## 📁 Project Structure

```
src/
├── Assets/          # Static assets (fonts, icons, images)
├── Components/      # Reusable UI components
├── Constants/       # App constants (colors, fonts, texts)
├── Hooks/          # Custom React hooks
├── I18n/           # Internationalization setup
├── Models/         # TypeScript type definitions
├── Navigators/     # Navigation configuration
├── Redux/          # State management (store, slices, thunks)
├── Screens/        # Screen components
├── Services/       # API services and HTTP client
└── Utils/          # Utility functions
```

### 🧩 Components Structure

- **Button** - Customizable button component
- **CheckBox** - Checkbox input component
- **Header** - Navigation header component
- **IconSvg** - SVG icon wrapper
- **Loading** - Loading indicator component
- **Text** - Typography component with theme support
- **Input** - Customizable TextInput component

### 🔄 Redux Structure

- **Store** - Centralized state management
- **Slices** - Feature-based state slices
- **Thunks** - Async action creators

### 🌐 API Services

- **BaseServices** - Common API functionality
- **httpClient** - Axios configuration and interceptors
- **MovieServices** - Example movie API service
- **UserServices** - Example user API service

## 🛠️ Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
API_BASE_URL=https://your-api-url.com
API_KEY=your-api-key
```

### Customization

1. **App Name & Bundle ID**: Update in `app.json`
2. **Colors**: Modify `src/Constants/Colors.ts`
3. **Fonts**: Update `src/Constants/Fonts.ts`
4. **Languages**: Add translations in `src/I18n/Languages/`

## 📦 Key Dependencies

### Core

- React Native 0.75.5
- TypeScript
- React 18.3.1

### Navigation

- @react-navigation/native
- @react-navigation/stack
- @react-navigation/bottom-tabs

### State Management

- @reduxjs/toolkit
- react-redux

### UI & Animation

- react-native-animatable
- react-native-fast-image
- react-native-gesture-handler
- react-native-safe-area-context
- react-native-screens

### Utilities

- axios
- i18next
- react-i18next
- @react-native-async-storage/async-storage
- lodash

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Thang Paisen**

- GitHub: [@thangpaisen](https://github.com/thangpaisen)
- NPM: [react-native-template-paisen](https://www.npmjs.com/package/react-native-template-paisen)

## 🙏 Acknowledgments

- React Native team for the amazing framework
- React Navigation team for the navigation solution
- Redux Toolkit team for simplified state management

---

⭐ **If this template helped you, please give it a star!** ⭐
