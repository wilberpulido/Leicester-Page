import React from 'react';
import './Navegator.css';

function Navegator(){

    const logo = "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fsoccer%2F500%2F375.png";

    let profile = "https://st3.depositphotos.com/4111759/13425/v/600/depositphotos_134255634-stock-illustration-avatar-icon-male-profile-gray.jpg";

return(

<header className = "navegatorStyle">

    <img src = {logo} width = "100px" alt = "logo leicester"/>

    <h1 className = "title">LEINCESTER CITY FOOTBALL CLUB</h1>
    
    <div className = "profile">

      <img src = {profile} width= "60px" alt= "photoProfile"/>
        
    </div>

    <h2 className = "userName">Hi,Wilber</h2>

</header>

)

}

export default Navegator;