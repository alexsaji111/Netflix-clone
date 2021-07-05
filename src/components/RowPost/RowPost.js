import React,{useState, useEffect} from 'react';
import Axios from '../../Axios';
import YouTube from 'react-youtube';
import { API_KEY, imageUrl } from '../../constants/Constants';
import './RowPost.css'
function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [urlId, setUrlId] = useState();
    useEffect(() => {
       Axios.get(props.url).then((response)=>{
           console.log(response.data)
           setMovies(response.data.results)
       })
      
    }, []);
    
    const handleMovie = (id)=>{
        Axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
          if (response.data.results!==0) {
            setUrlId(response.data.results[0]);
            console.log(id)
          }  
        })
    }
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
      };
    return (
        <div className='row-poster'>
            <h2 className="ml-3">{props.title}</h2>
            <div className='posters'>
                {
                    movies.map((obj)=>{
                        return(
                            <div className="">
                            <img
                            onClick={()=>handleMovie(obj.id)}
                            className={props.isSmall ? 'small_poster' : 'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`} />
                            <p className="pt-3 m-0">{movies ? obj.name : ''}</p>
                            <p className="m-0">Rating: {movies ? obj.vote_average : ""}</p>
                          
                            </div>
                        )
                    })
                }
            </div>
           { urlId && <YouTube videoId={urlId.key} opts={opts} />}
        </div>
    )
}

export default RowPost