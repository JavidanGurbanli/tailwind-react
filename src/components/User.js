import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'
const User = () => {
  return (
    <div className="bg-white grid lg:grid-cols-3  max-w-full px-auto min-h-[700px]">
        <div className=" mx-auto w-6/12 lg:w-8/12 shadow-xl flex flex-col lg:ml-56 mt-32 text-center rounded hover:scale-105 duration-300 h-[500px]">
            <img src={Single} className="w-20 mx-auto -mt-8 mb-4"alt="single"/>
            <p className="text-2xl font-bold my-4 ">Single User</p>
            <p className="text-center text-4xl font-bold my-8">$ 149</p>
            <p className="border-b mx-8 font-bold py-4">500 GB storage</p>
            <p className="border-b mx-8 font-bold py-4">1 Granted User</p>
            <p className="border-b mx-8 font-bold py-4">Send up to 2 GB</p>
            <button className="bg-[#00df9a] w-[200px] rounded px-6 py-3 font-bold my-4 self-center hover:opacity-80">Start Trial</button>
        </div>
        <div className=" mx-auto w-6/12 lg:w-8/12 shadow-xl flex flex-col lg:ml-32 mt-32 text-center  bg-gray-100 rounded hover:scale-105 duration-300 h-[500px] ">
            <img src={Double} className="w-20 mx-auto -mt-8 mb-4" alt="single"/>
            <p className="text-2xl font-bold my-4 " >Double User</p>
            <p className="text-center text-4xl font-bold my-8" >$ 349</p>
            <p className="border-b mx-8 font-bold py-4" >1000 GB storage</p>
            <p className="border-b mx-8 font-bold py-4" >2 Granted User</p>
            <p  className="border-b mx-8 font-bold py-4" >Send up to 5 GB</p>
            <button className="bg-black text-[#00df9a] w-[200px] rounded px-6 py-3 font-bold my-4 self-center hover:opacity-80">Start Trial</button>
        </div>
        <div className="mx-auto w-6/12 lg:w-8/12 shadow-xl flex flex-col lg:ml-4 mt-32 text-center rounded hover:scale-105 duration-300 h-[500px]">
            <img src={Triple}  className="w-20 mx-auto -mt-8 mb-4" alt="single"/>
            <p className="text-2xl font-bold my-4 " >Triple User</p>
            <p className="text-center text-4xl font-bold my-8" >$ 549</p>
            <p className="border-b mx-8 font-bold py-4" >1500 GB storage</p>
            <p className="border-b mx-8 font-bold py-4" >3 Granted User</p>
            <p className="border-b mx-8 font-bold py-4" >Send up to 8 GB</p>
            <button className="bg-[#00df9a] w-[200px] rounded px-6 py-3 font-bold my-4 self-center hover:opacity-80" >Start Trial</button>
        </div>
    </div>
  )
}

export default User