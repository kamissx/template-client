import { BiLike, BiDislike } from "react-icons/bi";
import "./postbox.css"
import { useState } from "react";
import coracao from "../assets/coracao.svg";
import coracaov from "../assets/CoracaoVermelho.svg";
import coment from "../assets/comentario.svg"
import TextBox from "./textbox";


function PostBox(title, text){
    const [countLike, setCountLike] = useState(0);
    const [countComent, setCountComent] = useState(0);
    const [enableComent, setEnableComent] = useState(false);

    let meucoracao = coracao;
    if (countLike >=1){
        meucoracao = coracaov;
    }

    return(
        <div className="title">{title}
         <div className="corpo"> 
            <p>{text}</p>
            </div>
         <footer> 
            <p>  
            <button className="btnLike" onClick={() => setCountLike(countLike + 1)}>  
                <img src={meucoracao}></img>
            </button> {countLike}

            <button className="btnLike" onClick={() => {setEnableComent(true)}}>
                <img src={coment}></img>
            </button> {countComent}
            </p>
         </footer>
         enableComent ??{TextBox}
        </div>
    );
}
export default PostBox;