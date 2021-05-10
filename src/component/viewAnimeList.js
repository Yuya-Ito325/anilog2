import React from 'react';


const ViewAnimeList = (props) => {

    const doChange = (e) => {
      let copyAnimeList = [...props.animeName]
      copyAnimeList.splice(copyAnimeList.indexOf(e.target.value), 1)
      props.setAnimeName(copyAnimeList)
    }
  
  
    return(
        <ul className="view_anime_list">
          {props.animeName.map((value, i) =>(
            <div key={i} className="anime_name_content">
              <li>{value}</li>
              <button value = {value} onClick = {(e)=>doChange(e)}>削除</button>
            </div>
          ))}
        </ul>
    )
  }

  export default ViewAnimeList