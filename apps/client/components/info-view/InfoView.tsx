import { FC } from 'react';
import { Icon, IconInfoCircle } from '@tabler/icons-react';
import Button from '../button/Button';
import styles from './info-view.module.less';

interface Props {
  icon?: Icon;
  title: string;
  message: string;
  action?: {
    label: string;
    callback: VoidFunction;
  };
}

const InfoView: FC<Props> = ({ icon, title, message, action }) => {
  const Icon = icon || IconInfoCircle;
  return (
    <div className={styles.container}>
      <Icon size={40} stroke={1} />
      <div className={styles.title}>{title}</div>
      <div>{message}</div>
      {!!action && <Button onClick={action.callback}>{action.label}</Button>}
    </div>
  );
};

export default InfoView;
