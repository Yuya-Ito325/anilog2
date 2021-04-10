import React, {useState, useEffect} from 'react'
import axios from 'axios'



function YearButton(){
  return(
    <>
      <button>2021</button>
      <button>2020</button>
      <button>2019</button>
      <button>2018</button>
      <button>2017</button>
      <button>2016</button>
      <button>2015</button>
      <button>2014</button>
    </>
  )
}



function SeasonButton(){
  return(
    <>
      <button>冬</button>
      <button>春</button>
      <button>夏</button>
      <button>秋</button>
    </>
  )
}



function AnimeList(){

  const [post , setPost] = useState([])

  //apiデータ読み取り
  useEffect(() => {
    axios.get('http://api.moemoe.tokyo/anime/v1/master/2021')
    .then(res => {
      setPost(res.data)
      console.log(post)
    })
  }, [])

  //list表示
  return(
    <ul>
      {post.map((value) =>(
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

  return ( 
  <>
    <h1>anilog2</h1>
    <YearButton />
    <SeasonButton/>
    <AnimeList/>
    <h1>試聴予定リスト</h1>
    <ViewAnimeList/>
  </>
  )
}


export default App;