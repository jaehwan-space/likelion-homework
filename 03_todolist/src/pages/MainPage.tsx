import Logo from '@/components/Logo/Logo';
import Button from '@/components/Button/Button';
import Status from '@/components/Status/Status';
import Card from '@/components/Card/Card';
import DarkModeToggle from '@/components/DarkModeToggle/DarkModeToggle';

import style from './MainPage.module.css';
import { useState } from 'react';

function MainPage() {
  const preference = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [darkMode, setDarkMode] = useState<'Light' | 'Dark'>(
    preference ? 'Dark' : 'Light'
  );

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => (prevMode === 'Light' ? 'Dark' : 'Light'));
  };

  const className = `${style.MainPage} ${
    darkMode === 'Dark' ? style.Dark : ''
  }`.trim();

  const today = new Date();
  const Day: { [key: number]: string } = {
    0: '일',
    1: '월',
    2: '화',
    3: '수',
    4: '목',
    5: '금',
    6: '토',
  };
  const todayDate = `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일 (${Day[today.getDay()]}요일)`;

  return (
    <main className={className}>
      <DarkModeToggle isChecked={darkMode} handleChange={toggleDarkMode} />
      <div className={style.Logo}>
        <Logo type="Stereo" Semantics={darkMode} />
      </div>
      <h1>우리, 오늘 뭐할까?</h1>
      <p>{todayDate}</p>
      <Button type="Primary" isShowIcon Semantics={darkMode}>
        생각났어?
      </Button>
      <nav>
        <Status state="All" count={3} Semantics={darkMode} />
        <span>|</span>
        <Status state="Doing" count={1} Semantics={darkMode} />
        <Status state="Done" count={2} Semantics={darkMode} />
        <Status state="Archived" count={1} Semantics={darkMode} />
      </nav>

      <ul>
        <li>
          <Card
            title="할 일"
            desc="할 일 내용을 작성합니다."
            time="오전 00:00 ~ 00:00"
            Semantics={darkMode}
          />
        </li>
        <li>
          <Card
            title="할 일"
            desc="할 일 내용을 작성합니다."
            time="오전 00:00 ~ 00:00"
            done
            Semantics={darkMode}
          />
        </li>
        <li>
          <Card
            title="할 일"
            desc="할 일 내용을 작성합니다."
            time="오전 00:00 ~ 00:00"
            done
            archived
            Semantics={darkMode}
          />
        </li>
      </ul>
    </main>
  );
}

export default MainPage;
