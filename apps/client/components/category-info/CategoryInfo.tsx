import { getCategoryIcon } from '@/lib/get-category-icon';
import { FC } from 'react';
import styles from './category-info.module.less';
import { IconArrowLeft } from '@tabler/icons-react';
import { useRouter } from 'next/router';
import IconButton from '../button/IconButton';

interface Props {
  categoryName: string;
}

const CategoryInfo: FC<Props> = ({ categoryName }) => {
  const Icon = getCategoryIcon(categoryName);
  const { push } = useRouter();

  return (
    <div className={styles.container}>
      <IconButton icon={<IconArrowLeft />} onClick={() => push('/')} />

      <div className={styles.textContainer}>
        <Icon size={35} strokeWidth={1.5} />
        <div className={styles.text}>
          random <span className={styles.emphasized}>{categoryName}</span> joke
        </div>
      </div>
    </div>
  );
};

export default CategoryInfo;
