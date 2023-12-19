import { FC } from 'react';
import Layout from '@/components/layout/Layout';
import CategoriesList from '@/components/categories-list/List';

interface Props {}

const IndexPage: FC<Props> = () => {
  return (
    <Layout>
      <CategoriesList />
    </Layout>
  );
};

export default IndexPage;
