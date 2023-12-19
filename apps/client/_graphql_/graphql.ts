/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Joke = {
  __typename?: 'Joke';
  categories: Array<Scalars['String']['output']>;
  created_at: Scalars['String']['output'];
  icon_url: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  updated_at: Scalars['String']['output'];
  url: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  getCategories?: Maybe<Array<Scalars['String']['output']>>;
  getRandomFromCategory?: Maybe<Joke>;
  getRandomJoke: Joke;
  search: SearchResults;
};

export type QueryGetRandomFromCategoryArgs = {
  category: Scalars['String']['input'];
  timestamp?: InputMaybe<Scalars['String']['input']>;
};

export type QuerySearchArgs = {
  query: Scalars['String']['input'];
};

export type SearchResults = {
  __typename?: 'SearchResults';
  result: Array<Maybe<Joke>>;
  total: Scalars['Int']['output'];
};

export type CategoriesQueryVariables = Exact<{ [key: string]: never }>;

export type CategoriesQuery = {
  __typename?: 'Query';
  getCategories?: Array<string> | null;
};

export type CategoryJokeQueryVariables = Exact<{
  category: Scalars['String']['input'];
  timestamp?: InputMaybe<Scalars['String']['input']>;
}>;

export type CategoryJokeQuery = {
  __typename?: 'Query';
  getRandomFromCategory?: {
    __typename?: 'Joke';
    categories: Array<string>;
    created_at: string;
    icon_url: string;
    id: string;
    updated_at: string;
    url: string;
    value: string;
  } | null;
};

export const CategoriesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Categories' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'getCategories' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CategoriesQuery, CategoriesQueryVariables>;
export const CategoryJokeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'CategoryJoke' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'category' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'timestamp' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getRandomFromCategory' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'category' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'category' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'timestamp' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'timestamp' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'categories' } },
                { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
                { kind: 'Field', name: { kind: 'Name', value: 'icon_url' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                { kind: 'Field', name: { kind: 'Name', value: 'value' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CategoryJokeQuery, CategoryJokeQueryVariables>;
