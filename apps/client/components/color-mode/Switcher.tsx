import { FC, useMemo } from 'react';
import styles from './switcher.module.less';
import IconButton from '../button/IconButton';
import {
  IconSun,
  IconMoon,
  IconSunFilled,
  IconMoonFilled,
} from '@tabler/icons-react';
import { useTheme } from 'next-themes';

interface Props {}

const ColorModeSwitcher: FC<Props> = (props) => {
  const { theme, setTheme } = useTheme();

  const themesData = useMemo(() => {
    return [
      { name: 'light', icon: IconSun, iconFilled: IconSunFilled },
      { name: 'dark', icon: IconMoon, iconFilled: IconMoonFilled },
    ];
  }, []);

  return (
    <div className={styles.switcher}>
      {themesData.map((dt) => (
        <IconButton
          key={dt.name}
          icon={theme === dt.name ? <dt.iconFilled /> : <dt.icon />}
          size='sm'
          onClick={() => setTheme(dt.name)}
        />
      ))}
    </div>
  );
};

export default ColorModeSwitcher;
