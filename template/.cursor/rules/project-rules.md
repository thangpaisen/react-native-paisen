# React Native Project Rules

## Project Overview
This is a React Native project using TypeScript, Redux Toolkit, React Navigation, and React Hook Form for building mobile applications.

## File Structure and Organization

### Folder Structure
```
src/
├── Assets/          # Static assets (images, fonts, icons)
├── Components/      # Reusable UI components
├── Constants/       # App constants (colors, fonts, texts)
├── Hooks/          # Custom React hooks
├── I18n/           # Internationalization files
├── Models/         # TypeScript interfaces and types
├── Navigators/     # Navigation configuration
├── Redux/          # State management (store, slices, thunks)
├── Screens/        # Screen components
├── Services/       # API services and external integrations
└── Utils/          # Utility functions
```

## Naming Conventions

### Files and Folders
- **Components**: Use PascalCase (e.g., `Button.tsx`, `UserProfile.tsx`)
- **Screens**: Use PascalCase with descriptive names (e.g., `HomeScreen.tsx`, `LoginScreen.tsx`)
- **Hooks**: Use camelCase with `use` prefix (e.g., `useAuth.ts`, `useToast.ts`)
- **Utils**: Use camelCase (e.g., `formatDate.ts`, `validation.ts`)
- **Constants**: Use PascalCase (e.g., `Colors.ts`, `Fonts.ts`)
- **Services**: Use PascalCase with `Services` suffix (e.g., `UserServices.ts`)

### Variables and Functions
- Use camelCase for variables, functions, and methods
- Use PascalCase for React components and TypeScript interfaces
- Use UPPER_SNAKE_CASE for constants

## Import Guidelines

### Import Order
1. React and React Native imports
2. Third-party library imports
3. Internal imports (using path aliases)
4. Relative imports
5. Type-only imports

### Path Aliases
Always use configured path aliases for cleaner imports:

```typescript
// ✅ Good
import { Button } from '@Components'
import { Colors } from '@Constants'
import { UserModel } from '@Models/UserModel'
import { UserServices } from '@Services'
import { useToast } from '@Hooks'

// ❌ Bad
import { Button } from '../../../Components/Button'
import { Colors } from '../../../Constants/Colors'
```

### Available Path Aliases
- `@Assets/*` → `src/Assets/*`
- `@Components` → `src/Components`
- `@Constants` → `src/Constants`
- `@Screens/*` → `src/Screens/*`
- `@Hooks` → `src/Hooks`
- `@I18n` → `src/I18n`
- `@Models/*` → `src/Models/*`
- `@Utils/*` → `src/Utils/*`
- `@Services` → `src/Services`
- `@Redux/*` → `src/Redux/*`
- `@Navigators/*` → `src/Navigators/*`

## TypeScript Guidelines

### Interface Definitions
- Use PascalCase for interface names
- Prefer interfaces over types for object shapes
- Use descriptive names that indicate purpose

```typescript
// ✅ Good
interface UserProfile {
  id: string
  name: string
  email: string
  avatar?: string
}

interface ApiResponse<T> {
  data: T
  message: string
  success: boolean
}
```

### Type Safety
- Always type props, state, and function parameters
- Use strict TypeScript configuration
- Avoid `any` type - use `unknown` or proper typing instead
- Use generic types for reusable components

## Available Components

### Priority: Use Existing Components First
Always prioritize using existing components from `@Components` before creating new ones or using basic React Native components:

#### Available Components:
- **ButtonCM** - Custom button with styling and states
- **TextCM** - Styled text with font management
- **InputCM** - Advanced input with floating labels and validation
- **InputFieldCM** - Form input with react-hook-form integration
- **HeaderCM** - Reusable header component
- **LoadingCM** - Loading spinner/indicator
- **CheckBoxCM** - Custom checkbox component
- **PopupCM** - Modal/popup component
- **IconSvgCM** - SVG icon renderer
- **ToastCM** - Toast notification component

#### Component Usage Examples:
```typescript
// ✅ Good - Use existing components
import { ButtonCM, TextCM, InputFieldCM } from '@Components'

// For buttons
<ButtonCM 
  label="Submit" 
  onPress={handleSubmit}
  backgroundColor={Colors.primary}
  bold
/>

// For text display
<TextCM fontSize={16} bold color={Colors.primary}>
  Welcome User
</TextCM>

// For form inputs with validation
<InputFieldCM
  name="email"
  control={control}
  label="Email Address"
  rules={validationRules.email}
  placeholder="Enter your email"
/>

// ❌ Bad - Don't use basic components when custom ones exist
<TouchableOpacity onPress={handleSubmit}>
  <Text>Submit</Text>
</TouchableOpacity>

<Text style={{ fontSize: 16, fontWeight: 'bold' }}>
  Welcome User
</Text>
```

#### When to Create New Components:
- Only create new components if existing ones don't meet requirements
- Extend existing components rather than creating from scratch
- Follow the same naming convention: `ComponentNameCM`
- Export from `@Components/index.ts`

## React/React Native Guidelines

### Component Structure
```typescript
// ✅ Good component structure
import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import type { ComponentProps } from './types'

interface Props {
  title: string
  onPress?: () => void
}

const MyComponent: React.FC<Props> = ({ title, onPress }) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Effect logic
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
})

export default MyComponent
```

### Hooks Usage
- Use built-in hooks appropriately
- Create custom hooks for reusable logic
- Follow hooks rules (only call at top level)

### State Management - Redux Toolkit

#### Always Use Typed Redux Hooks
```typescript
// ✅ Good - Use typed hooks from @Hooks
import { useAppDispatch, useAppSelector } from '@Hooks'

const MyComponent = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(state => state.user.user)
  const isLoading = useAppSelector(state => state.user.isLoading)
  
  // ❌ Bad - Don't use plain hooks
  // const dispatch = useDispatch()
  // const user = useSelector(state => state.user.user)
}
```

#### Available Redux State Structure
```typescript
// Current slices available:
// - user: UserState (tokens, user info, language, loading)
// - movie: MovieState 
// - toast: ToastState
```

#### Creating New Slices
```typescript
// ✅ Good slice structure
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface MyFeatureState {
  data: MyData[]
  isLoading: boolean
  error: string | null
}

const initialState: MyFeatureState = {
  data: [],
  isLoading: false,
  error: null,
}

const myFeatureSlice = createSlice({
  name: 'myFeature',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setData: (state, action: PayloadAction<MyData[]>) => {
      state.data = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    },
  },
  extraReducers: (builder) => {
    // Handle async thunks here
    builder.addCase(fetchMyData.fulfilled, (state, action) => {
      state.data = action.payload
      state.isLoading = false
    })
  },
})

export const { setLoading, setData, setError } = myFeatureSlice.actions
export default myFeatureSlice.reducer
```

#### Creating Async Thunks
```typescript
// ✅ Good thunk structure
import { createAsyncThunk } from '@reduxjs/toolkit'
import { MyFeatureServices } from '@Services'

export const fetchMyData = createAsyncThunk(
  'myFeature/fetchMyData',
  async (params: FetchParams, { rejectWithValue }) => {
    try {
      const response = await MyFeatureServices.getData(params)
      return response
    } catch (error: any) {
      return rejectWithValue(error.response)
    }
  }
)
```

#### Using Redux in Components

##### Option 1: Direct Services + Redux Actions (Recommended for Simple Cases)
```typescript
// ✅ Good - Direct service calls with Redux actions
import { useAppDispatch, useAppSelector } from '@Hooks'
import { UserServices } from '@Services'
import { setToken, updateUser, setLoading, logoutUser } from '@Redux/Slices'

const LoginScreen = () => {
  const dispatch = useAppDispatch()
  const isLoading = useAppSelector(state => state.user.isLoading)
  
  const handleLogin = () => {
    dispatch(setLoading(true))
    UserServices.login({
      username: username || 'emilys',
      password: password || 'emilyspass',
    })
      .then((res) => {
        dispatch(setToken({
          accessToken: res.accessToken,
          refreshToken: res.refreshToken,
        }))
        dispatch(updateUser(new UserModel(res)))
      })
      .catch((err) => {
        console.log('Login error:', err)
      })
      .finally(() => {
        dispatch(setLoading(false))
      })
  }
  
  const handleLogout = () => {
    dispatch(logoutUser())
  }
}
```

##### Option 2: Async Thunks (For Complex Logic or Reusability)
```typescript
// ✅ Good - Using thunks for complex operations
import { useAppDispatch, useAppSelector } from '@Hooks'
import { loginUser, fetchUserInfo } from '@Redux/Thunks'
import { setLanguage } from '@Redux/Slices'

const MyComponent = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(state => state.user.user)
  const isLoading = useAppSelector(state => state.user.isLoading)
  
  // Use thunk for complex login logic
  const handleLogin = (credentials: LoginCredentials) => {
    dispatch(loginUser(credentials))
  }
  
  // Use direct action for simple state updates
  const handleLanguageChange = (lang: string) => {
    dispatch(setLanguage(lang))
  }
  
  // Use thunk for data fetching
  useEffect(() => {
    dispatch(fetchUserInfo())
  }, [dispatch])
}
```

##### When to Use Each Approach:
- **Direct Services + Actions**: Simple operations, one-time use, immediate state updates
- **Async Thunks**: Complex logic, reusable operations, multiple components need same functionality

#### Adding New Slice to Store
```typescript
// In src/Redux/store.ts
const rootReducer = {
  movie: movieReducer,
  user: userReducer,
  toast: toastReducer,
  myFeature: myFeatureReducer, // Add new slice here
}

// In persistConfig - add to whitelist if need persistence
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user', 'myFeature'], // Add here if needed
}
```

#### State Management Guidelines
- Use Redux Toolkit for global state
- Use local state for component-specific data
- Prefer useSelector with specific selectors
- Use createSlice for Redux logic
- Always handle loading and error states
- **Choose approach based on complexity:**
  - Direct Services + Actions: For simple, one-time operations
  - Async Thunks: For complex logic or reusable operations
- Export actions and use typed dispatching
- Always handle loading states in UI (dispatch setLoading)
- Use try-catch-finally pattern for error handling

## Form Handling

### React Hook Form
- Use react-hook-form for all forms
- Create reusable validation rules
- Use Controller for custom components

```typescript
// ✅ Good form validation
const validationRules = {
  email: {
    required: 'Email là bắt buộc',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Email không hợp lệ',
    },
  },
}
```

## Styling Guidelines

### StyleSheet Usage
- Always use StyleSheet.create() for styles
- Define styles at the bottom of the component file
- Use descriptive style names
- Leverage Constants for colors and fonts

```typescript
// ✅ Good styling
import { Colors, Fonts } from '@Constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 18,
    fontFamily: Fonts.medium,
    color: Colors.text,
  },
})
```

## API and Services

### Service Structure
- Create separate service files for different API domains
- Use consistent naming patterns
- Handle errors appropriately
- Use TypeScript for request/response types

```typescript
// ✅ Good service structure
class UserServices extends BaseServices {
  login({ username, password }: { username: string; password: string }) {
    return this.post<LoginResponse>('/auth/login', { username, password })
  }
  
  getInfo() {
    return this.get<UserModel>('/auth/me')
  }
  
  refreshToken(refreshToken: string) {
    return this.post<LoginResponse>('/auth/refresh', { refreshToken })
  }
}

export default new UserServices()
```

## Error Handling

### Best Practices
- Always handle errors in async operations
- Use try-catch blocks appropriately
- Provide meaningful error messages
- Use Toast for user-facing error messages

## Internationalization

### i18n Usage
- Use translation keys for all user-facing text
- Organize translations by feature/screen
- Support Vietnamese and English languages

```typescript
// ✅ Good i18n usage
import { useTranslation } from 'react-i18next'

const { t } = useTranslation()
return <Text>{t('login.welcome')}</Text>
```

## Testing Guidelines

### Test Structure
- Write tests for critical business logic
- Test component behavior, not implementation
- Use descriptive test names
- Mock external dependencies

## Performance Guidelines

### Optimization
- Use React.memo for expensive components
- Implement proper key props for lists
- Optimize images and assets
- Use lazy loading where appropriate

## Code Quality Rules

### ESLint Configuration
- No semicolons (semi: 'off')
- Allow inline styles when needed
- Error on unused variables
- Follow React hooks rules

### Prettier Configuration
- Single quotes: true
- Semicolons: false
- Print width: 100
- Tab width: 2
- Trailing commas: es5

## Security Guidelines

### Best Practices
- Never commit sensitive data
- Use secure storage for tokens
- Validate user inputs
- Follow OWASP mobile security guidelines

## Git Workflow

### Commit Messages
- Use conventional commit format
- Be descriptive and concise
- Reference issue numbers when applicable

### Branch Naming
- Use descriptive branch names
- Follow pattern: `feature/description` or `fix/description`

## Development Environment

### Required Tools
- React Native CLI
- Xcode (for iOS)
- Android Studio (for Android)
- Node.js 18+
- Yarn or NPM

### Scripts
- `npm run android` - Run on Android
- `npm run ios` - Run on iOS
- `npm run lint` - Run ESLint
- `npm test` - Run tests

## Common Patterns

### Navigation
- Use typed navigation params
- Implement proper back handling
- Use stack and tab navigators appropriately

### State Updates
- Use Redux for global state
- Implement proper loading states
- Handle error states consistently

### Asset Management
- Use proper asset organization
- Optimize image sizes
- Use SVG for icons when possible

## Documentation

### Code Comments
- Use JSDoc for public APIs
- Comment complex business logic
- Keep comments up to date
- Avoid obvious comments

This rules file should be followed by all developers working on this project to maintain consistency and code quality. 