const path = require('path')

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@repo/tailwind-config')],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    path.join(path.dirname(require.resolve('@repo/ui')), '**/*.{ts,tsx}'),
  ],
}
