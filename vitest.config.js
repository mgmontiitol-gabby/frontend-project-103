import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        coverage: {
            exclude: ['gendiff.js'],
            thresholds: {
                lines: 80,
            },
        },
    },
});