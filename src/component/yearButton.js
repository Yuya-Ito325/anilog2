import React, {useState} from 'react';

const YearButton = (props) => {

    const years = [2021,2020,2019,2018,2017,2016,2015,2014];
    const [yearIndex, setYearIndex] = useState(null);
  
    const doChange = (e, index) =>{
      props.setYear(e.target.value);
      setYearIndex(index);
    }
  
    return(
      <div className="year_button">
        {years.map((year, i) => (
          <button key={i} className={yearIndex !== null && yearIndex === i ? 'on' : 'off'}  value = {year} onClick = {(e) => doChange(e,i)}>{year}</button>
        ))}
      </div>
    )
  }

  export default YearButton 