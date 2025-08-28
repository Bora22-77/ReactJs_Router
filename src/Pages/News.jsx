import React, { useEffect, useState } from 'react'
import { GrAddCircle } from 'react-icons/gr';
import Navbar from '../Components/Navbar';

const News = () => {
   const News=[
      {Image: "https://images.footballfanatics.com/manchester-united/manchester-united-adidas-away-shirt-2025-26-kids-with-cunha-10-printing_ss5_p-203288624+u-jel7frmqsftqkxb5ypbm+v-7ntsz2qk89rbml2avemj.jpg?_hv=2&w=600",
      Name: "Manchester United adidas Away Shirt 2025-26"},
      {Image: "https://images.footballfanatics.com/manchester-city/manchester-city-puma-home-shirt-2025-26-with-foden-47-printing_ss5_p-203107402+u-qneymdai3vibi7icc1pu+v-gsez7jcekhhcphodoiw0.jpg?_hv=2&w=600",
        Name: "Manchester City PUMA Home Shirt 2025-26",
      },
      {Image: "https://images.footballfanatics.com/borussia-dortmund/borussia-dortmund-puma-home-minikit-25-26_ss5_p-202498732+u-03brguxcgltjpydxen8t+v-q8eycw0ds7dvcs4xjlyi.jpg?_hv=2&w=600",
        Name: "Borussia Dortmund PUMA Home Minikit 25-26",
      },
      {Image: "https://images.footballfanatics.com/tottenham-hotspur/tottenham-hotspur-nike-away-stadium-shirt-2025-26_ss5_p-202504116+u-0uldoh8pb5t69eazdxyy+v-vzgkrg8mutdt5uvkjm0g.jpg?_hv=2&w=600",
        Name: "Tottenham Hotspur Nike Away Stadium Shirt 2025-26",
      },
    ]
    const[count,setCount]=useState(0);
    const[message,setMessage]=useState("");
    useEffect(()=> {
      setMessage(`Buy ${count}`);
    },[count]);
  return (
   
    <div>
      <Navbar/>
        <h1 className="text-center text-6xl text-fuchsia-900 font-bold">News Products</h1>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap sm:gap-5 md:gap-5 lg:gap-5 ">
        {
          News.map((news,index)=>(
            <div key={index}>
              <img src={news.Image} alt="" />
              <h2>{news.Name}</h2>
              <button onClick={() => setCount(count+1)} className="font-bold text-blue-950 text-4xl  px-9 py-2"><GrAddCircle/>{message}</button>
            </div>
          )

          )
        }
      </ul>
    </div>
  )
}

export default News