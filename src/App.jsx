import React from "react";
import MyCardList from "./components/MyCardList";
import NavBar from "./modules/NavBar.jsx";
import './modules/NavBar.css';
const App = () => {
  return (
    <div>
      <NavBar />
      <h1>个性卡片展示</h1>
      <MyCardList />
    </div>
  );
};
export default App;
