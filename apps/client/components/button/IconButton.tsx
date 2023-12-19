import { FC, ReactNode, useMemo } from 'react';
import styles from './button.module.less';

interface Props {
  icon: ReactNode;
  size?: 'sm' | 'md';
  variant?: 'solid' | 'outline' | 'ghost';
  isRound?: boolean;
  onClick: VoidFunction;
}

const IconButton: FC<Props> = ({ icon, size, isRound, variant, onClick }) => {
  const className = useMemo(() => {
    let classNames = [
      styles.iconButton || '',
      styles[size || 'md'],
      styles[variant || 'solid'],
    ];

    if (isRound) classNames.push(styles.round);

    return classNames.join(' ');
  }, [size, isRound, variant]);

  return (
    <button className={className} onClick={onClick}>
      {icon}
    </button>
  );
};

export default IconButton;
