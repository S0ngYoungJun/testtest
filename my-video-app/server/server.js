const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// 정적 파일을 제공하기 위해 express.static 미들웨어 사용
app.use(express.static(path.join(__dirname, '../public')));

// 모든 경로에 대해 index.html을 반환 (React 라우팅을 위함)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});