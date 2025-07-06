import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['./src', '!./src/**/*.test.ts'],
});
