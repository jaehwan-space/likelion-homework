import { useId } from 'react';
import style from './Checkbox.module.css';

interface CheckboxProps {
  checked?: boolean;
  onChange: (checked: boolean) => void;
  Semantics: 'Light' | 'Dark';
}

function Checkbox({ checked, onChange, Semantics }: CheckboxProps) {
  const id = useId();

  const className = `${style.Checkbox} ${
    Semantics === 'Dark' ? style.Dark : ''
  }`.trim();

  const handleCheckboxClick = () => {
    onChange(!checked);
  };

  return (
    <div className={className} onClick={handleCheckboxClick}>
      <label htmlFor={id} className="sr-only">
        완료 체크박스
      </label>
      <input type="checkbox" id={id} name="checkbox/done" checked={checked} />
    </div>
  );
}

export default Checkbox;
