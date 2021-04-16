import React, {useState, useEffect} from 'react'
import axios from 'axios'



function YearButton(props){


  const doChange = (e) =>{
    props.setYear(e.target.value)
  }

  const years = [2021,2020,2019,2018,2017,2016,2015,2014]
  

  return(
    <>
    {years.map((year) => (
    <button value = {year} onClick = {(e) => doChange(e)}>{year}</button>
    ))}
    </>
  )
}



function SeasonButton(props){


  const doChange = (e) =>{
    props.setSeason(e.target.value)
  }

  const seasons = ["冬","春","夏","秋"]

  return(
    <>
    {seasons.map((season,i) => (
    <button value = {`/${i+1}`} onClick = {(e)=>doChange(e)}>{season}</button>
    ))}
    </>
  )
}



function AnimeList(props){



  const doChange = (e) => {
    let copyAnimeList = [...props.animeName]
    if(copyAnimeList.includes(e.target.value) != true){
    copyAnimeList.push(e.target.value)
    props.setAnimeName(copyAnimeList)
    }else{
      return
    }
  }

  //list表示
  return(
    <ul>
      {props.post.map((value) =>(
        <>
         <li>{value.title}</li>
         <button value = {value.title} onClick = {(e)=>doChange(e)}>追加</button>
        </>
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
      <ul>
        {props.animeName.map((value) =>(
          <>
            <li>{value}</li>
            <button value = {value} onClick = {(e)=>doChange(e)}>削除</button>
          </>
        ))}
      </ul>
  )
}



function App() {

  const [post, setPost] = useState([])
  const [year , setYear]     = useState('')
  const [season , setSeason] = useState('')
  const [animeName , setAnimeName] = useState([])


  //apiデータ読み取り
  useEffect(() => {
    axios.get(`http://api.moemoe.tokyo/anime/v1/master/${year}${season}`)
    .then(res => {
      setPost(res.data)
    })
  }, [year,season])


  
  return ( 
  <>
    <h1>anilog2</h1>
    <YearButton  setYear={setYear}/>
    <SeasonButton setSeason={setSeason}/>
    <AnimeList post={post} animeName={animeName} setAnimeName={setAnimeName}/>
    <h1>試聴予定リスト</h1>
    <ViewAnimeList animeName={animeName} setAnimeName={setAnimeName}/>
  </>
  )
}


export default App;