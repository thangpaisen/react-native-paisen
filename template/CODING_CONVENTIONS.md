# Coding Conventions

This document outlines the coding standards and conventions for this React Native project.

## Table of Contents

- [General Principles](#general-principles)
- [File and Folder Structure](#file-and-folder-structure)
- [Naming Conventions](#naming-conventions)
- [TypeScript Guidelines](#typescript-guidelines)
- [React/React Native Guidelines](#reactreact-native-guidelines)
- [Import Guidelines](#import-guidelines)
- [Code Formatting](#code-formatting)
- [ESLint Rules](#eslint-rules)
- [Comments and Documentation](#comments-and-documentation)
- [Testing](#testing)
- [Redux/State Management](#reduxstate-management)

## General Principles

1. **Consistency**: Follow established patterns in the codebase
2. **Readability**: Write code that is easy to read and understand
3. **Maintainability**: Structure code for easy maintenance and updates
4. **Performance**: Consider performance implications of your code
5. **Type Safety**: Leverage TypeScript for better code quality

## File and Folder Structure

### Folder Organization

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

### File Naming

- **Components**: Use PascalCase (e.g., `Button.tsx`, `UserProfile.tsx`)
- **Screens**: Use PascalCase (e.g., `HomeScreen.tsx`, `LoginScreen.tsx`)
- **Hooks**: Use camelCase with `use` prefix (e.g., `useAuth.ts`, `useToast.ts`)
- **Utils**: Use camelCase (e.g., `formatDate.ts`, `validation.ts`)
- **Constants**: Use PascalCase (e.g., `Colors.ts`, `ApiEndpoints.ts`)
- **Types/Models**: Use PascalCase with Model suffix (e.g., `UserModel.ts`, `MovieModel.ts`)

## Naming Conventions

### Variables and Functions

- Use **camelCase** for variables and functions
- Use descriptive names that clearly indicate purpose

```typescript
// ✅ Good
const userName = 'john_doe'
const fetchUserData = async () => { ... }
const isLoading = false

// ❌ Bad
const u = 'john_doe'
const getData = async () => { ... }
const flag = false
```

### Constants

- Use **SCREAMING_SNAKE_CASE** for constants
- Group related constants in objects

```typescript
// ✅ Good
const API_ENDPOINTS = {
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
  USER_PROFILE: '/user/profile',
}

const MAX_RETRY_ATTEMPTS = 3

// ❌ Bad
const loginEndpoint = '/auth/login'
const maxRetry = 3
```

### Components

- Use **PascalCase** for component names
- Use descriptive names that indicate the component's purpose

```typescript
// ✅ Good
const UserProfileCard = () => { ... }
const NavigationHeader = () => { ... }

// ❌ Bad
const card = () => { ... }
const header = () => { ... }
```

## TypeScript Guidelines

### Interface and Type Definitions

- Use **PascalCase** for interfaces and types
- Prefix interfaces with `I` when needed for clarity
- Use `type` for unions and primitives, `interface` for object shapes

```typescript
// ✅ Good
interface User {
  id: string
  name: string
  email: string
  isActive: boolean
}

type Status = 'pending' | 'approved' | 'rejected'

// ❌ Bad
interface user {
  id: string
  name: string
}
```

### Type Annotations

- Always provide type annotations for function parameters and return types
- Use strict typing, avoid `any` when possible

```typescript
// ✅ Good
const calculateTotal = (items: CartItem[]): number => {
  return items.reduce((sum, item) => sum + item.price, 0)
}

// ❌ Bad
const calculateTotal = (items: any) => {
  return items.reduce((sum: any, item: any) => sum + item.price, 0)
}
```

## React/React Native Guidelines

### Component Structure

- Use functional components with hooks
- Structure components in this order:
  1. Imports
  2. Types/Interfaces
  3. Component definition
  4. Styles (if using StyleSheet)

```typescript
// ✅ Good
import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface Props {
  title: string
  onPress: () => void
}

const CustomButton: React.FC<Props> = ({ title, onPress }) => {
  const [isPressed, setIsPressed] = useState(false)

  useEffect(() => {
    // Effect logic here
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default CustomButton
```

### Props and State

- Always define prop types using TypeScript interfaces
- Use destructuring for props
- Prefer controlled components over uncontrolled ones

```typescript
// ✅ Good
interface ButtonProps {
  title: string
  variant?: 'primary' | 'secondary'
  disabled?: boolean
  onPress: () => void
}

const Button: React.FC<ButtonProps> = ({
  title,
  variant = 'primary',
  disabled = false,
  onPress,
}) => {
  // Component logic
}
```

### Hooks Usage

- Use custom hooks for reusable logic
- Follow hooks rules (only call at top level)
- Use useCallback and useMemo for performance optimization when needed

```typescript
// ✅ Good
const useUserData = (userId: string) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchUser(userId)
      .then(setUser)
      .finally(() => setLoading(false))
  }, [userId])

  return { user, loading }
}
```

## Import Guidelines

### Import Order

1. React and React Native imports
2. Third-party library imports
3. Internal imports (using path aliases)
4. Relative imports
5. Type-only imports

```typescript
// ✅ Good
import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { Button } from '@Components'
import { Colors, Fonts } from '@Constants'
import { useAuth } from '@Hooks'

import { validateEmail } from '../utils/validation'

import type { User } from '@Models/UserModel'
```

### Path Aliases

Use the configured path aliases for cleaner imports:

```typescript
// ✅ Good
import { Button } from '@Components'
import { Colors } from '@Constants'
import { UserModel } from '@Models/UserModel'

// ❌ Bad
import { Button } from '../../../Components/Button'
import { Colors } from '../../../Constants/Colors'
```

## Code Formatting

### Prettier Configuration

The project uses Prettier with the following settings:

- Single quotes: `true`
- Semicolons: `false`
- Print width: `100`
- Tab width: `2`
- Trailing commas: `es5`

### Code Style

```typescript
// ✅ Good - Following Prettier rules
const config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
  retries: 3,
}

const fetchData = async (endpoint: string): Promise<ApiResponse> => {
  try {
    const response = await fetch(`${config.apiUrl}${endpoint}`)
    return await response.json()
  } catch (error) {
    console.error('Fetch error:', error)
    throw error
  }
}
```

## ESLint Rules

Key ESLint rules enforced in this project:

- `semi: 'off'` - No semicolons required
- `react-hooks/exhaustive-deps: 'off'` - Disabled for flexibility
- `react-native/no-inline-styles: 'off'` - Allow inline styles when needed
- `no-unused-vars: 'error'` - Error on unused variables

## Comments and Documentation

### JSDoc Comments

Use JSDoc for documenting functions, especially utility functions and hooks:

```typescript
/**
 * Formats a date string to a readable format
 * @param date - The date string to format
 * @param format - The desired format (default: 'MM/dd/yyyy')
 * @returns The formatted date string
 */
const formatDate = (date: string, format: string = 'MM/dd/yyyy'): string => {
  // Implementation
}
```

### Inline Comments

- Use comments to explain complex logic
- Avoid obvious comments
- Keep comments up-to-date with code changes

```typescript
// ✅ Good
// Calculate the total price including tax and discount
const totalPrice = basePrice * (1 + taxRate) - discount

// ❌ Bad
// Set the user name to John
const userName = 'John'
```

## Testing

### Test File Naming

- Use `.test.tsx` or `.test.ts` suffix
- Mirror the structure of source files in `__tests__` folder

### Test Structure

```typescript
// Example: Button.test.tsx
import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import Button from '../Button'

describe('Button Component', () => {
  it('should render correctly', () => {
    const { getByText } = render(<Button title='Test Button' onPress={() => {}} />)
    expect(getByText('Test Button')).toBeTruthy()
  })

  it('should call onPress when pressed', () => {
    const mockOnPress = jest.fn()
    const { getByText } = render(<Button title='Test Button' onPress={mockOnPress} />)

    fireEvent.press(getByText('Test Button'))
    expect(mockOnPress).toHaveBeenCalledTimes(1)
  })
})
```

## Redux/State Management

### Slice Structure

```typescript
// userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { User } from '@Models/UserModel'

interface UserState {
  currentUser: User | null
  isLoading: boolean
  error: string | null
}

const initialState: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload
      state.error = null
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
      state.isLoading = false
    },
  },
})

export const { setUser, setLoading, setError } = userSlice.actions
export default userSlice.reducer
```

### Action Naming

- Use descriptive action names with consistent patterns
- Group related actions in the same slice

### Async Thunks

```typescript
// userThunks.ts
import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchUserApi } from '@Services/userService'

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (userId: string, { rejectWithValue }) => {
    try {
      const user = await fetchUserApi(userId)
      return user
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)
```

## Best Practices

1. **Always use TypeScript**: Leverage type checking for better code quality
2. **Keep components small**: Break down large components into smaller, reusable ones
3. **Use custom hooks**: Extract reusable logic into custom hooks
4. **Optimize performance**: Use React.memo, useCallback, and useMemo when appropriate
5. **Handle errors gracefully**: Always implement proper error handling
6. **Write tests**: Maintain good test coverage for critical functionality
7. **Use absolute imports**: Leverage path aliases for cleaner import statements
8. **Follow the DRY principle**: Don't repeat yourself, create reusable utilities
9. **Keep styles organized**: Use StyleSheet.create() and consider style constants
10. **Document complex logic**: Add comments for complex business logic

## Tools and Scripts

- **Linting**: `npm run lint` - Run ESLint
- **Formatting**: Prettier runs automatically on save (if configured in IDE)
- **Testing**: `npm run test` - Run Jest tests
- **Type checking**: TypeScript compiler checks during build

---

_This document should be updated as the project evolves and new conventions are established._
