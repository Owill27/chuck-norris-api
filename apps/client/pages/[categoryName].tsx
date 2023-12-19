import { useRouter } from 'next/router';
import { FC, ReactNode, useState } from 'react';
import { gql } from '../_graphql_';
import { useQuery } from '@apollo/client';
import Layout from '@/components/layout/Layout';
import InfoView from '@/components/info-view/InfoView';
import CategoryInfo from '@/components/category-info/CategoryInfo';
import JokeCard from '@/components/joke/JokeCard';
import JokeCardSkeleton from '@/components/joke/JokeCardSkeleton';

const CATEGORY_JOKE = gql(/* GraphQL */ `
  query CategoryJoke($category: String!, $timestamp: String) {
    getRandomFromCategory(category: $category, timestamp: $timestamp) {
      categories
      created_at
      icon_url
      id
      updated_at
      url
      value
    }
  }
`);

interface Props {}

const CategoryPage: FC<Props> = () => {
  const { query } = useRouter();
  const categoryName = (query.categoryName as string) || '';
  const [timestamp, setTimestamp] = useState<string>();

  const { data, loading, error } = useQuery(CATEGORY_JOKE, {
    variables: {
      category: categoryName,
      timestamp,
    },
  });

  const refetch = () => setTimestamp(new Date().toISOString());

  let view: ReactNode;

  if (loading) {
    view = <JokeCardSkeleton />;
  } else if (error) {
    view = (
      <InfoView
        title='An error occurred'
        message={error.message}
        action={{ label: 'Retry', callback: () => refetch() }}
      />
    );
  } else if (!data?.getRandomFromCategory) {
    view = (
      <InfoView
        title='This is not funny'
        message='No joke was found in this category'
        action={{ label: 'Retry', callback: () => refetch() }}
      />
    );
  } else {
    const joke = data.getRandomFromCategory;

    view = <JokeCard joke={joke} onNew={() => refetch()} />;
  }

  return (
    <Layout>
      <CategoryInfo categoryName={categoryName} />
      {view}
    </Layout>
  );
};

export default CategoryPage;
