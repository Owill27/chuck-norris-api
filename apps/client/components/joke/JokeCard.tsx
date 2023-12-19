import { Joke } from '_graphql_/graphql';
import { FC } from 'react';
import styles from './joke-card.module.less';
import { IconCopy, IconCheck, IconLink } from '@tabler/icons-react';
import { useClipboard } from 'hooks/clipboard';
import IconButton from '../button/IconButton';
import Button from '../button/Button';

interface Props {
  joke: Joke;
  onNew: VoidFunction;
}

const JokeCard: FC<Props> = ({ joke, onNew }) => {
  const { copy, hasCopied } = useClipboard();

  const actions = [
    {
      label: hasCopied === joke.value ? 'Copied' : 'Copy joke',
      action: () => copy(joke.value),
      icon: hasCopied === joke.value ? IconCheck : IconCopy,
    },
    {
      label: hasCopied === joke.url ? 'Copied' : 'Copy link',
      action: () => copy(joke.url),
      icon: hasCopied === joke.url ? IconCheck : IconLink,
    },
  ];

  return (
    <div className={styles.card}>
      <div className={styles.text}>{joke.value}</div>
      <hr className={styles.divider} />

      <div className={styles.footer}>
        <div className={styles.actionsBar}>
          {actions.map((act) => (
            <div className={styles.action}>
              <IconButton
                icon={<act.icon strokeWidth={1.5} />}
                onClick={act.action}
              />
              <div className={styles.actionLabel}>{act.label}</div>
            </div>
          ))}
        </div>

        <Button onClick={onNew}>New joke</Button>
      </div>
    </div>
  );
};

export default JokeCard;
