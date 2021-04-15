import React, {useState, useEffect} from 'react'
import axios from 'axios'



function YearButton(props){


  const doChange = (e) =>{
    props.setYear(e.target.value)
    console.log(e.target.value)
    console.log(e.value)
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

  

  //list表示
  return(
    <ul>
      {props.post.map((value) =>(
        <li>{value.title}</li>
      ))}
    </ul>
  )
  
}



function ViewAnimeList(){
  return(
    <>
      <ul>

      </ul>
    </>
  )
}



function App() {

  const [post, setPost] = useState([])
  const [year , setYear]     = useState('')
  const [season , setSeason] = useState('')


  //apiデータ読み取り
  useEffect(() => {
    axios.get(`http://api.moemoe.tokyo/anime/v1/master/${year}${season}`)
    .then(res => {
      setPost(res.data)
      console.log(post)
    })
  }, [year,season])


  return ( 
  <>
    <h1>anilog2</h1>
    <YearButton  setYear={setYear}/>
    <SeasonButton setSeason={setSeason}/>
    <AnimeList post={post}/>
    <h1>試聴予定リスト</h1>
    <ViewAnimeList/>
  </>
  )
}


export default App;