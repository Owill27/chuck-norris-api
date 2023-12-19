import Head from 'next/head';
import { FC, PropsWithChildren } from 'react';
import Logo from '../logo/Logo';
import styles from './layout.module.less';
import IconButton from '@/components/button/IconButton';
import { IconBrandGithub } from '@tabler/icons-react';
import ColorModeSwitcher from '../color-mode/Switcher';

interface Props {
  title?: string;
  description?: string;
}

const Layout: FC<PropsWithChildren<Props>> = (props) => {
  // use default title and description if one is not passed in
  const pageTitle = props.title || 'Chuck Norris Jokes';
  const pageDescription =
    props.description ||
    'A web-app and GraphQL server wrapper for https://api.chucknorris.io/';

  return (
    <div className={styles.layout}>
      <Head>
        <title>{pageTitle}</title>
        <meta name='description' content={pageDescription}>
          {props.title}
        </meta>
      </Head>

      <header className={styles.header}>
        <Logo width='100px' />

        <div className={styles.actions}>
          <IconButton
            icon={<IconBrandGithub />}
            size='md'
            onClick={() =>
              window.open('https://github.com/Owill27/chuck-norris-api')
            }
          />

          <ColorModeSwitcher />
        </div>
      </header>

      {props.children}
    </div>
  );
};

export default Layout;
