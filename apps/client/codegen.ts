import { CodegenConfig } from '@graphql-codegen/cli';

const apiUrl = process.env.API_URL || 'http://localhost:4000'

const config: CodegenConfig = {
  schema: apiUrl,
  documents: ['pages/**/*.{ts,tsx}'],
  generates: {
    './_graphql_/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      }
    }
  },
  ignoreNoDocuments: true,
};

export default config;