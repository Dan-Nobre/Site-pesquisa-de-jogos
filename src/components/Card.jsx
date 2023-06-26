import { Link } from "react-router-dom"

function Card({data}) {
    return (
        <div className="card-container">
            <div className="card"> 
            
            <Link to={data.game_url}>
            <h2 className="titulo">{data.title}</h2>
            <img  className="imagem" src={data.thumbnail} alt={data.title} />
            </Link>
            <p className="descricao">{data.short_description}</p>
            <p className="genero">Gender: {data.genre}</p>
            <p className="plataforma">Platform: {data.platform}</p>
            <p className="lancamento">Date of Release: {data.release_date}</p>

            </div>
        </div>
        
    )  
}

export default Card