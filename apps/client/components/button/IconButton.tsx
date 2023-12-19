import { FC, ReactNode, useMemo } from 'react';
import styles from './button.module.less';

interface Props {
  icon: ReactNode;
  size?: 'sm' | 'md';
  isTransparent?: boolean;
  onClick: VoidFunction;
}

const IconButton: FC<Props> = ({ icon, size, isTransparent, onClick }) => {
  const className = useMemo(() => {
    let classNames = [styles.iconButton || '', styles[size || 'md']];

    if (isTransparent) classNames.push(styles.transparent);

    return classNames.join(' ');
  }, [size, isTransparent]);

  return (
    <button className={className} onClick={onClick}>
      {icon}
    </button>
  );
};

export default IconButton;
