import { useQuery } from '@apollo/client';
import { FC, ReactNode } from 'react';
import NextLink from 'next/link';
import styles from './list.module.less';
import { gql } from '_graphql_';
import {
  IconDeer,
  IconMovie,
  IconMusic,
  IconMicroscope,
  IconPlane,
  IconSoccerField,
  IconPodium,
  IconBuildingChurch,
  IconSchool,
  IconHeart,
  IconDeviceDesktop,
  IconRating18Plus,
  IconHanger,
  IconToolsKitchen2,
  IconCashBanknote,
  IconBuildingArch,
  IconCategory,
} from '@tabler/icons-react';
import { rangeMap } from '@/lib/range-map';
import InfoView from '../info-view/InfoView';

const categoriesIcons = {
  animal: IconDeer,
  career: IconSchool,
  celebrity: IconHeart,
  dev: IconDeviceDesktop,
  explicit: IconRating18Plus,
  fashion: IconHanger,
  food: IconToolsKitchen2,
  history: IconBuildingArch,
  money: IconCashBanknote,
  movie: IconMovie,
  music: IconMusic,
  political: IconPodium,
  religion: IconBuildingChurch,
  science: IconMicroscope,
  sport: IconSoccerField,
  travel: IconPlane,
};

const GET_CATEGORIES = gql(/* GraphQL */ `
  query Categories {
    getCategories
  }
`);

interface Props {}

const CategoriesList: FC<Props> = (props) => {
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
          <div className={styles.loadingItem}></div>
        ))}
      </div>
    );
  } else if (error) {
    view = (
      <InfoView
        title='Unable to load icons'
        message='Example message'
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
          const Icon =
            categoriesIcons[c as unknown as keyof typeof categoriesIcons] ||
            IconCategory;

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
