import React, {useState} from 'react';


const SeasonButton = (props) => {

    const seasons = ["冬","春","夏","秋"];
    const [seasonIndex, setSeasonIndex] = useState(null);
  
  
    const doChange = (e, index) =>{
      props.setSeason(e.target.value)
      setSeasonIndex(index)
    }
  
    
  
    return(
      <div className="season_button">
       {seasons.map((season, i) => (
        <button key={i} className={seasonIndex !== null && seasonIndex === i ? 'on' : 'off'} value = {`/${i+1}`} onClick = {(e)=>doChange(e,i)}>{season}</button>
       ))}
      </div>
    )
  }

  export default SeasonButton