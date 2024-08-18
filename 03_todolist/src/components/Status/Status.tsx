import style from './Status.module.css';

interface StatusProps {
  state: 'All' | 'Doing' | 'Done' | 'Archived';
  count: number;
  active?: boolean;
  Semantics: 'Light' | 'Dark';
}

function Status({ state, count, active, Semantics }: StatusProps) {
  const stateMap: { [key: string]: string } = {
    All: '모두',
    Doing: '할일',
    Done: '한일',
    Archived: '보관',
  };

  const className = `${style.Status} ${
    Semantics === 'Dark' ? style.Dark : ''
  } ${active ? style.Active : ''}`.trim();

  return (
    <button className={className} type="button">
      {stateMap[state]} <span>{count}</span>
    </button>
  );
}

export default Status;
