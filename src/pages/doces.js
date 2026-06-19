import './main.css';
import bolo from "../assets/bolo.png";

function Doces(){
    return(
    <div className="grid-container">
      <header className="header"></header>
      <aside className="sidebar">Menu Lateral</aside>
      <main className="content"></main>
        <div>
            <img src ={bolo}></img>
        </div>
    </div>
    )
}

export default Doces;