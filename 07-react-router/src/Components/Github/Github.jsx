import React, { useEffect, useState } from 'react'

const Github = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/Shivamupadhyay232')
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            setData(data)
        })
    },[])
    return (
        <div className='text-center m-6 bg-gray-500 text-white p-4 text-3xl flex flex-col items-center '>
            Github Followers: {data.followers}
            <img className='w-40' src={data.avatar_url} alt="" />
        </div>
    )
}

export default Github