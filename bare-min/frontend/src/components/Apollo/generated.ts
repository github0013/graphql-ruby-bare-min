import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
   __typename?: 'Mutation';
  testMutation?: Maybe<TestMutationPayload>;
};


export type MutationTestMutationArgs = {
  input: TestMutationInput;
};

export type Query = {
   __typename?: 'Query';
  testField: Scalars['String'];
};

export type SubTestPayload = {
   __typename?: 'SubTestPayload';
  results: Scalars['Int'];
};

export type Subscription = {
   __typename?: 'Subscription';
  subTest: SubTestPayload;
};

export type TestMutationInput = {
  clientMutationId?: Maybe<Scalars['String']>;
};

export type TestMutationPayload = {
   __typename?: 'TestMutationPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  testField: Scalars['String'];
};

export type TestMutationMutationVariables = {};


export type TestMutationMutation = (
  { __typename?: 'Mutation' }
  & { testMutation?: Maybe<(
    { __typename?: 'TestMutationPayload' }
    & Pick<TestMutationPayload, 'testField'>
  )> }
);

export type TestFieldQueryVariables = {};


export type TestFieldQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'testField'>
);

export type SubTestSubscriptionVariables = {};


export type SubTestSubscription = (
  { __typename?: 'Subscription' }
  & { subTest: (
    { __typename?: 'SubTestPayload' }
    & Pick<SubTestPayload, 'results'>
  ) }
);


export const TestMutationDocument = gql`
    mutation TestMutation {
  testMutation(input: {}) {
    testField
  }
}
    `;
export type TestMutationMutationFn = ApolloReactCommon.MutationFunction<TestMutationMutation, TestMutationMutationVariables>;

/**
 * __useTestMutationMutation__
 *
 * To run a mutation, you first call `useTestMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTestMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [testMutationMutation, { data, loading, error }] = useTestMutationMutation({
 *   variables: {
 *   },
 * });
 */
export function useTestMutationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TestMutationMutation, TestMutationMutationVariables>) {
        return ApolloReactHooks.useMutation<TestMutationMutation, TestMutationMutationVariables>(TestMutationDocument, baseOptions);
      }
export type TestMutationMutationHookResult = ReturnType<typeof useTestMutationMutation>;
export type TestMutationMutationResult = ApolloReactCommon.MutationResult<TestMutationMutation>;
export type TestMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<TestMutationMutation, TestMutationMutationVariables>;
export const TestFieldDocument = gql`
    query TestField {
  testField
}
    `;

/**
 * __useTestFieldQuery__
 *
 * To run a query within a React component, call `useTestFieldQuery` and pass it any options that fit your needs.
 * When your component renders, `useTestFieldQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTestFieldQuery({
 *   variables: {
 *   },
 * });
 */
export function useTestFieldQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TestFieldQuery, TestFieldQueryVariables>) {
        return ApolloReactHooks.useQuery<TestFieldQuery, TestFieldQueryVariables>(TestFieldDocument, baseOptions);
      }
export function useTestFieldLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TestFieldQuery, TestFieldQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TestFieldQuery, TestFieldQueryVariables>(TestFieldDocument, baseOptions);
        }
export type TestFieldQueryHookResult = ReturnType<typeof useTestFieldQuery>;
export type TestFieldLazyQueryHookResult = ReturnType<typeof useTestFieldLazyQuery>;
export type TestFieldQueryResult = ApolloReactCommon.QueryResult<TestFieldQuery, TestFieldQueryVariables>;
export const SubTestDocument = gql`
    subscription SubTest {
  subTest {
    results
  }
}
    `;

/**
 * __useSubTestSubscription__
 *
 * To run a query within a React component, call `useSubTestSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSubTestSubscription` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubTestSubscription({
 *   variables: {
 *   },
 * });
 */
export function useSubTestSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<SubTestSubscription, SubTestSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<SubTestSubscription, SubTestSubscriptionVariables>(SubTestDocument, baseOptions);
      }
export type SubTestSubscriptionHookResult = ReturnType<typeof useSubTestSubscription>;
export type SubTestSubscriptionResult = ApolloReactCommon.SubscriptionResult<SubTestSubscription>;