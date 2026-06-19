import { BiLike, BiDislike } from "react-icons/bi";
import "./postbox.css"
import { useState } from "react";
import coracao from "../assets/coracao.png";
import coracaopreto from "../assets/coracaopreto.png";


function PostBox(title, text){
    const [countLike, setCountLike] = useState(0);
    const [countDislike, setCountDislike] = useState(0);

    let meucoracao = coracaopreto;
    if (countLike >=1){
        meucoracao = coracao;
    }

    return(
        <div className="title">{title}
         <div className="corpo"> 
            <p>{text}</p>
            </div>
         <footer> 

            <p>  
            <button className="btnLike" onClick={() => setCountLike(countLike + 1)}>  
                <img src={meucoracao
                    
                }></img>
            </button> {countLike}
            <BiDislike className="btnLike"  onClick={() => setCountDislike(countDislike + 1)}/>
            {countDislike} 
            </p>

         </footer>
        </div>
    );
}
export default PostBox;