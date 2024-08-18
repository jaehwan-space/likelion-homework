import style from './Button.module.css';

interface ButtonProps {
  children: string;
  type: 'Primary' | 'Secondary' | 'Disabled';
  isShowIcon?: boolean;
  Semantics: 'Light' | 'Dark';
}

const getCSSVariable = (variable: string) =>
  window.getComputedStyle(document.documentElement).getPropertyValue(variable);

function Button({ children, type, isShowIcon, Semantics }: ButtonProps) {
  const iconColor = getCSSVariable(
    type === 'Primary'
      ? '--lightblue'
      : type === 'Secondary'
      ? '--blue'
      : '--gray-300'
  );
  const className = `${style[type]} ${
    Semantics === 'Dark' ? style.Dark : ''
  }`.trim();

  return (
    <button className={className} type="button">
      {isShowIcon ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M10 3C10.1921 3 10.3762 3.07629 10.512 3.21209C10.6478 3.3479 10.7241 3.53208 10.7241 3.72414V9.27586H16.2759C16.4679 9.27586 16.6521 9.35216 16.7879 9.48796C16.9237 9.62376 17 9.80795 17 10C17 10.1921 16.9237 10.3762 16.7879 10.512C16.6521 10.6478 16.4679 10.7241 16.2759 10.7241H10.7241V16.2759C10.7241 16.4679 10.6478 16.6521 10.512 16.7879C10.3762 16.9237 10.1921 17 10 17C9.80795 17 9.62376 16.9237 9.48796 16.7879C9.35216 16.6521 9.27586 16.4679 9.27586 16.2759V10.7241H3.72414C3.53208 10.7241 3.3479 10.6478 3.21209 10.512C3.07629 10.3762 3 10.1921 3 10C3 9.80795 3.07629 9.62376 3.21209 9.48796C3.3479 9.35216 3.53208 9.27586 3.72414 9.27586H9.27586V3.72414C9.27586 3.53208 9.35216 3.3479 9.48796 3.21209C9.62376 3.07629 9.80795 3 10 3Z"
            fill={iconColor}
          />
        </svg>
      ) : null}
      {children}
    </button>
  );
}

export default Button;
