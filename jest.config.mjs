import { createDefaultPreset } from 'ts-jest';

const preset = createDefaultPreset();

/** @type {import('jest').Config} */
export default {
  ...preset,

  testEnvironment: 'node',

  roots: ['<rootDir>/tests'],

  testMatch: ['**/*.spec.ts'],

  collectCoverage: true,

  coverageDirectory: 'coverage',

  clearMocks: true,
};