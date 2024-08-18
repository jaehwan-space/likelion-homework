import style from './Card.module.css';
import Checkbox from '@/components/Checkbox/Checkbox';
import Archive from '@/components/Archive/Archive';
import { useState } from 'react';

interface CardProps {
  title: string;
  desc: string;
  time: string;
  done?: boolean;
  archived?: boolean;
  Semantics: 'Light' | 'Dark';
}

function Card({ title, desc, time, done, archived, Semantics }: CardProps) {
  const [doneState, setDoneState] = useState(done);
  const [archivedState, setArchivedState] = useState(archived);

  const className = `${style.Card} ${Semantics === 'Dark' ? style.Dark : ''} ${
    doneState ? style.Done : ''
  }`.trim();

  return (
    <div className={className}>
      <div>
        <h2>{title}</h2>
        <Checkbox
          checked={doneState}
          onChange={setDoneState}
          Semantics={Semantics}
        />
      </div>
      <p>{desc}</p>
      <div className={style.Time}>
        <p>
          <span>오늘</span> {time}
        </p>
        <Archive
          checked={archivedState}
          onChange={setArchivedState}
          Semantics={Semantics}
        />
      </div>
    </div>
  );
}

export default Card;
