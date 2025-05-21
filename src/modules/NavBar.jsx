import React from "react";
import './NavBar.css';
const NavBar=()=>{
return(
    <nav className="NavBarContainer">
    <h3 className="NavBarSmallBox">主页</h3>
    <h3 className="NavBarSmallBox">添加卡片</h3>
    <h3 className="NavBarSmallBox">我的卡片</h3>
    </nav>
)
}
export default NavBar;