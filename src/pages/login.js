import './main.css';
import PopUp from '../components/popUp';

function Login(){
    return(
    <div className="grid-container">
      <header className="header"></header>
      <aside className="sidebar">Menu Lateral</aside>
      <main className="content"></main>
        <div>
            {PopUp({showPopUp:true, closePopUp:false})}
        </div>
    </div>
    )
}

export default Login;