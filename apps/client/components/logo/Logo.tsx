import Image from 'next/image';
import { FC } from 'react';

interface Props {
  width?: string;
}

const Logo: FC<Props> = (props) => {
  return (
    <div style={{ width: props.width }}>
      <Image
        src='https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png'
        width={720}
        height={438}
        alt='ChuckNorris.io Logo'
        style={{
          width: '100%',
          height: 'auto',
          maxWidth: '100%',
        }}
      />
    </div>
  );
};

export default Logo;
