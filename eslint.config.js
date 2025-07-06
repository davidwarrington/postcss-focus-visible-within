import { defineConfig } from 'eslint/config';
import { typescript } from '@davidwarrington/eslint-config';

export default defineConfig([
  ...typescript,

  {
    ignores: ['dist'],
  },
]);
