# Contributing Guidelines

Thank you for considering contributing to this React Native project! This document outlines the process and guidelines for contributing.

## Getting Started

1. **Fork the repository** and clone it locally
2. **Install dependencies**: `npm install` or `yarn install`
3. **Create a branch** for your feature or bug fix
4. **Make your changes** following the coding conventions
5. **Test your changes** thoroughly
6. **Submit a pull request**

## Development Setup

### Prerequisites

- Node.js (version specified in `.nvmrc` if available)
- npm or Yarn
- React Native CLI
- Xcode (for iOS development)
- Android Studio (for Android development)

### Installation

```bash
# Install dependencies
npm install

# iOS setup (macOS only)
cd ios && pod install && cd ..

# Start Metro bundler
npm start

# Run on iOS
npm run ios

# Run on Android
npm run android
```

## Code Quality

### Before Submitting

1. **Run linting**: `npm run lint`
2. **Run tests**: `npm run test`
3. **Check TypeScript**: Ensure no TypeScript errors
4. **Test on both platforms**: iOS and Android

### Code Review Checklist

- [ ] Code follows the established [coding conventions](./CODING_CONVENTIONS.md)
- [ ] All new code has appropriate TypeScript types
- [ ] Functions and components are properly documented
- [ ] No console.log statements in production code
- [ ] Error handling is implemented where appropriate
- [ ] Performance considerations have been addressed
- [ ] Code is tested on both iOS and Android
- [ ] No breaking changes without proper documentation

## Pull Request Process

### PR Title Format

Use conventional commit format:

- `feat: add new user authentication`
- `fix: resolve crash on login screen`
- `docs: update API documentation`
- `style: fix code formatting issues`
- `refactor: improve user service structure`
- `test: add tests for login component`
- `chore: update dependencies`

### PR Description Template

```markdown
## Description

Brief description of what this PR does.

## Type of Change

- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Testing

- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing completed
- [ ] Tested on iOS
- [ ] Tested on Android

## Screenshots (if applicable)

Add screenshots to help explain your changes.

## Checklist

- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes
```

## Coding Standards

Please refer to our [Coding Conventions](./CODING_CONVENTIONS.md) document for detailed guidelines on:

- File and folder structure
- Naming conventions
- TypeScript usage
- React/React Native best practices
- Code formatting
- Testing standards

## Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools

### Examples

```
feat: add user profile screen
fix: resolve memory leak in image component
docs: update installation instructions
style: format code according to prettier rules
refactor: extract common validation logic
test: add unit tests for auth service
chore: update react-native to 0.75.5
```

## Branch Naming

Use descriptive branch names with the following format:

- `feature/description` - for new features
- `fix/description` - for bug fixes
- `refactor/description` - for refactoring
- `docs/description` - for documentation updates

Examples:

- `feature/user-authentication`
- `fix/login-crash`
- `refactor/api-service`
- `docs/coding-conventions`

## Testing Guidelines

### Unit Tests

- Write unit tests for all utility functions
- Test React components using React Native Testing Library
- Aim for at least 80% code coverage
- Place test files next to the code they test or in `__tests__` folders

### Integration Tests

- Test complete user flows
- Test navigation between screens
- Test API integrations with mock data

### Manual Testing

- Test on both iOS and Android devices
- Test on different screen sizes
- Test edge cases and error scenarios
- Verify accessibility features

## Documentation

### Code Documentation

- Document complex functions with JSDoc comments
- Add inline comments for complex business logic
- Update README.md if you add new features or change setup process

### API Documentation

- Document new API endpoints
- Update existing API documentation when making changes
- Include example requests and responses

## Issue Reporting

When reporting bugs or requesting features:

1. **Search existing issues** first
2. **Use the issue templates** provided
3. **Provide detailed information** including:
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Device/platform information
   - Screenshots or error logs

## Questions and Support

- Check the existing documentation first
- Look through closed issues for similar problems
- Create a new issue with the "question" label
- For urgent matters, contact the maintainers directly

## License

By contributing to this project, you agree that your contributions will be licensed under the same license as the project.

---

Thank you for contributing to make this project better! 🚀
