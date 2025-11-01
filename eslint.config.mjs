import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import eslintPluginAstro from 'eslint-plugin-astro';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default [
  // Apply recommended rules
  js.configs.recommended,
  
  // Astro recommended configuration
  ...eslintPluginAstro.configs.recommended,
  
  // Accessibility configuration for Astro components
  ...eslintPluginAstro.configs['jsx-a11y-recommended'],
  
  // TypeScript and general configuration
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      // TypeScript rules
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      
      // General rules
      'no-undef': 'off', // Disable for Astro global types
      'no-unused-vars': 'off', // Use TypeScript version instead
      
      // Additional accessibility rules
      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/anchor-has-content': 'error',
      'jsx-a11y/anchor-is-valid': 'error',
      'jsx-a11y/aria-props': 'error',
      'jsx-a11y/aria-proptypes': 'error',
      'jsx-a11y/aria-unsupported-elements': 'error',
      'jsx-a11y/click-events-have-key-events': 'error',
      'jsx-a11y/heading-has-content': 'error',
      'jsx-a11y/html-has-lang': 'error',
      'jsx-a11y/img-redundant-alt': 'error',
      'jsx-a11y/interactive-supports-focus': 'error',
      'jsx-a11y/label-has-associated-control': 'error',
      'jsx-a11y/lang': 'error',
      'jsx-a11y/no-access-key': 'error',
      'jsx-a11y/no-autofocus': 'warn',
      'jsx-a11y/no-distracting-elements': 'error',
      'jsx-a11y/no-redundant-roles': 'error',
      'jsx-a11y/role-has-required-aria-props': 'error',
      'jsx-a11y/role-supports-aria-props': 'error',
      'jsx-a11y/scope': 'error',
    },
  },
  
  // Astro-specific overrides
  {
    files: ['**/*.astro'],
    rules: {
      // Astro components can have different patterns
      'jsx-a11y/no-autofocus': 'off', // Astro handles this differently
    },
  },
  
  // Ignore patterns
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      '.astro/**',
      'public/**',
      '*.config.*',
      'bun.lock',
    ],
  },
];