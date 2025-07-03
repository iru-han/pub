import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement); // 이 부분 수정

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// 성능 측정 관련 코드는 그대로 두거나 필요 없으면 삭제해도 됩니다.
reportWebVitals();