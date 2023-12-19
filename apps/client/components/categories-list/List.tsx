import { useQuery } from '@apollo/client';
import { FC, ReactNode } from 'react';
import NextLink from 'next/link';
import styles from './list.module.less';
import { gql } from '_graphql_';
import { rangeMap } from '@/lib/range-map';
import InfoView from '../info-view/InfoView';
import { getCategoryIcon } from '@/lib/get-category-icon';

const GET_CATEGORIES = gql(/* GraphQL */ `
  query Categories {
    getCategories
  }
`);

interface Props {}

const CategoriesList: FC<Props> = () => {
  const {
    loading,
    data: categories,
    error,
    refetch,
  } = useQuery(GET_CATEGORIES);

  let view: ReactNode;

  if (loading) {
    view = (
      <div className={styles.categoriesGrid}>
        {rangeMap(8, (i) => (
          <div className={styles.loadingItem} key={i}></div>
        ))}
      </div>
    );
  } else if (error) {
    view = (
      <InfoView
        title='Unable to load icons'
        message={error.message}
        action={{ label: 'Retry', callback: () => refetch() }}
      />
    );
  } else if (!categories?.getCategories?.length) {
    view = (
      <InfoView
        title='No categories yet'
        message='We were unable to find any categories.'
        action={{ label: 'Retry', callback: () => refetch() }}
      />
    );
  } else {
    view = (
      <div className={styles.categoriesGrid}>
        {categories.getCategories.map((c) => {
          const Icon = getCategoryIcon(c);

          return (
            <NextLink href={`/${c}`} className={styles.categoryLink} key={c}>
              <div className={styles.categoryItem}>
                <Icon size={40} strokeWidth={1} />

                <div className={styles.categoryItemText}>{c}</div>
              </div>
            </NextLink>
          );
        })}
      </div>
    );
  }

  return (
    <div>
      <div className={styles.hero}>
        <div className={styles.title}>Categories</div>
        <div className={styles.description}>
          Choose a category to view a random joke
        </div>
      </div>

      {view}
    </div>
  );
};

export default CategoriesList;
