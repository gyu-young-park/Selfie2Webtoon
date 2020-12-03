import React from 'react';
import Main from './Components/Main';
import Title from './Components/Title'
import './App.css';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <div className="container-main">
        <Title 
          title="내가 프리드로우 캐릭터라면??"
          desc="자신의 사진을 넣고 시작! 
                버튼을 눌러주세요!"
        />
        <Main/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
