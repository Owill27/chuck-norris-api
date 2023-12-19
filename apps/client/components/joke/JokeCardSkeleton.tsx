import { FC } from 'react';
import styles from './joke-card.module.less';
import { rangeMap } from '@/lib/range-map';

interface Props {}

const JokeCardSkeleton: FC<Props> = () => {
  return (
    <div className={styles.card}>
      <div className={styles.skeletonText}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.footer}>
        <div className={styles.actionsBar}>
          {rangeMap(2, (i) => (
            <div className={styles.actionSkeleton} key={'action' + i}></div>
          ))}
        </div>

        <div className={styles.buttonSkeleton}></div>
      </div>
    </div>
  );
};

export default JokeCardSkeleton;
