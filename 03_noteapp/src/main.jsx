import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import NoteApp from './App';

const container = document.getElementById('react-app');

if (container) {
  createRoot(container).render(
    <StrictMode>
      <NoteApp />
    </StrictMode>
  );
} else {
  console.warn('index.html 파일에 #react-app 요소를 확인해주세요.');
}
