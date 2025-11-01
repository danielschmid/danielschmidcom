# Editor Setup Guide

This project uses a hybrid approach: **Zed Editor** for the primary development workflow + **Universal EditorConfig** for team consistency across any editor.

## Primary Setup: Zed Editor

### Zed Editor (Recommended)

- **Configuration**: Uses `.zed/settings.json`
- **Features**: Built-in Prettier, ESLint, TailwindCSS support
- **Format on save**: Enabled for all file types
- **Astro support**: Native with syntax highlighting
- **Performance**: Optimized for large projects
- **TailwindCSS v4**: Full integration with class sorting

## Universal Setup: Any Editor

### EditorConfig Support

- **Configuration**: Uses `.editorconfig`
- **Compatibility**: Works with VS Code, Vim, Emacs, IntelliJ, Sublime, etc.
- **Coverage**: Basic formatting consistency (indentation, encoding, line endings)
- **Fallback**: CLI commands for advanced formatting/linting

## CLI Commands (Universal)

```bash
# Format all files
bun run format

# Check formatting
bun run format:check

# Lint all files
bun run lint

# Fix linting issues
bun run lint:fix

# Run both formatting and linting
bun run format && bun run lint:fix
```

## File Extensions Supported

- **Astro**: `.astro` files with frontmatter and component syntax
- **TypeScript/JavaScript**: `.ts`, `.tsx`, `.js`, `.jsx` files
- **Styles**: `.css`, `.scss` files with TailwindCSS support
- **Config**: `.json`, `.yaml`, `.toml` files

## TailwindCSS Integration

- **Class sorting**: Automatic via `prettier-plugin-tailwindcss`
- **IntelliSense**: Configured for custom CSS file location
- **v4 Support**: Uses `tailwindStylesheet` configuration

## Key Features

✅ **Consistent formatting** across all editors  
✅ **TailwindCSS class sorting** automatically applied  
✅ **ESLint integration** with accessibility rules  
✅ **Astro component support** with proper parsing  
✅ **TypeScript support** with modern rules  
✅ **Format on save** (where supported)

## Workflow Recommendations

### For Primary Development (Zed Users)

1. **Install Zed Editor**: Download from [zed.dev](https://zed.dev)
2. **Automatic setup**: Configuration loads from `.zed/settings.json`
3. **Format on save**: Automatically formats and fixes code
4. **Full integration**: TailwindCSS, Astro, ESLint all work seamlessly

### For Other Team Members

1. **Use any editor**: VS Code, Vim, IntelliJ, etc.
2. **EditorConfig**: Basic consistency automatically applied
3. **CLI workflow**: Run formatting/linting commands manually
4. **Same results**: Consistent output regardless of editor choice

## Troubleshooting

### Zed Editor Issues

1. **Configuration not loading**: Restart Zed after cloning project
2. **Format not working**: Check if project has `.zed/settings.json`
3. **TailwindCSS not working**: Verify `tailwindStylesheet` path in settings

### Universal Issues (Any Editor)

1. **Formatting**: Use `bun run format` to fix formatting
2. **Linting**: Use `bun run lint:fix` to fix code issues
3. **EditorConfig not working**: Check if your editor supports EditorConfig
4. **Inconsistent results**: Always run CLI commands before committing
