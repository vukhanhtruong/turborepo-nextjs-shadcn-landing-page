# UI Component Library

This package contains reusable UI components for the CES Design Pickle project.

## Testing

This package uses Jest and React Testing Library for unit testing components.

### Running Tests

To run the tests, use the following commands:

```bash
# Run tests once
pnpm test

# Run tests in watch mode (useful during development)
pnpm test:watch

# Generate test coverage report
pnpm test:coverage
```

### Test Coverage

The test coverage report will be generated in the `coverage` directory. You can open `coverage/lcov-report/index.html` in your browser to view a detailed report.

The coverage report shows:
- Statement coverage: The percentage of statements that have been executed
- Branch coverage: The percentage of branches (e.g., if/else) that have been executed
- Function coverage: The percentage of functions that have been called
- Line coverage: The percentage of executable lines that have been executed

### Writing Tests

Tests are located in the `src/components/__tests__` directory. Each component should have a corresponding test file with the naming convention `ComponentName.test.tsx`.

For more detailed information about testing, including examples and best practices, see the [TESTING.md](./TESTING.md) file.
