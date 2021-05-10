import React, {useState, useEffect} from 'react';
import axios from 'axios';
import TitleLogo from './component/titleLogo';
import YearButton from './component/yearButton';
import SeasonButton from './component/seasonButton';
import AnimeList from './component/animeList';
import ViewAnimeList from './component/viewAnimeList';
import './App.css';

const App = () => {

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


export default App