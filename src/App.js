import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';


function TitleLogo(){
  return(
    <h1 className="header">
      <span>a</span>
      <span>n</span>
      <span>i</span>
      <span>l</span>
      <span>o</span>
      <span>g</span>
    </h1>
  )
}

function YearButton(props){

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



function SeasonButton(props){

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



function AnimeList(props){



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



function ViewAnimeList(props){

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



function App() {

  const [post, setPost] = useState([]);
  const [year , setYear]     = useState('');
  const [season , setSeason] = useState('');
  const [animeName , setAnimeName] = useState([]);


  //apiデータ読み取り
  useEffect(() => {
    axios.get(`https://api.moemoe.tokyo/anime/v1/master/${year}${season}`)
    .then(res => {
      setPost(res.data)
    })
  }, [year,season])


  
  return ( 
  <div className="body">
    <TitleLogo/>
    <div className="button_content">
      <YearButton setYear={setYear}/>
      <SeasonButton setSeason={setSeason}/>
    </div>
    <AnimeList post={post} animeName={animeName} setAnimeName={setAnimeName}/>
    <div className="menu_title"><h1>視聴予定リスト</h1></div>
    <ViewAnimeList animeName={animeName} setAnimeName={setAnimeName}/>
  </div>
  )
}


export default App;