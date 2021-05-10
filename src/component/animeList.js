import React from 'react';


const AnimeList = (props) => {



    const doChange = (e) => {
      let copyAnimeList = [...props.animeName]
      if(copyAnimeList.includes(e.target.value) !== true){
        copyAnimeList.push(e.target.value)
        props.setAnimeName(copyAnimeList)
      }else{
        return
      }
    }
  
    //list表示
    return(
      <ul className="anime_list">
        {props.post.map((value, i) =>(
          <div key={i} className="anime_name_content">
           <li>{value.title}</li>
           <button className="list_button" value = {value.title} onClick = {(e)=>doChange(e)}>追加</button>
          </div>
        ))}
      </ul>
    )
    
  }

  export default AnimeList