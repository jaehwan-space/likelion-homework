import { ChangeEventHandler } from 'react';
import style from './DarkModeToggle.module.css';

interface DarkModeToggleProps {
  handleChange: ChangeEventHandler<HTMLInputElement>;
  isChecked: 'Light' | 'Dark';
}

function DarkModeToggle({ handleChange, isChecked }: DarkModeToggleProps) {
  const className = `${style.Toggle} ${
    isChecked === 'Dark' ? style.Dark : ''
  }`.trim();

  return (
    <div className={className}>
      <input
        type="checkbox"
        id="check"
        className="toggle"
        onChange={handleChange}
        checked={isChecked === 'Light' ? false : true}
      />
      <label htmlFor="check">Dark Mode Toggle</label>
    </div>
  );
}

export default DarkModeToggle;
