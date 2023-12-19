import { FC, useMemo, PropsWithChildren } from 'react';
import styles from './button.module.less';

interface Props {
  size?: 'sm' | 'md';
  onClick: VoidFunction;
}

const Button: FC<PropsWithChildren<Props>> = ({ size, children, onClick }) => {
  const className = useMemo(() => {
    let classNames = [styles.button || '', styles[size || 'md']];

    return classNames.join(' ');
  }, [size]);

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
