import React from 'react';
import VideoBackground from './VideoBackground';
import './App.css'; // 기본 스타일 파일

const App: React.FC = () => {
  return (
    <div>
      {/* 다른 컴포넌트들 */}
      <VideoBackground />
      {/* 나머지 컴포넌트들 */}
    </div>
  );
};

export default App;