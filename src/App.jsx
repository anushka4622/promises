import React, { useState } from 'react'
import axios from "axios";

const App = () => {

  const [images, setimages] = useState([])
  const clickHandler =async ()=>{
    const resopnse = await axios.get("https://picsum.photos/v2/list")

    setimages(resopnse.data)
  }

  return (
    <div className='py-5'>
      <button className='px-4 py-2 text-xl text-white bg-green-600 rounded mb-5 ml-5' onClick={()=>{clickHandler()}}>Get Data</button>
      <div className='bg-white p-8'>
        {
          images.map(function(elem){
            return <div className='w-full p-3 bg-zinc-200  border-2 border-zinc-300 flex justify-between items-center mb-3'>
              <img className='h-40 w-50 rounded object-cover object-center' src={elem.download_url} alt="" />
              <h3 className='text-xl font-medium '>{elem.author}</h3>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default App