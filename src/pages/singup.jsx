import React from "react";
import { Link } from "react-router-dom";
export const SingUp = () => {
  return (
    <div className="bg-cover bg-center text-white font-bold "
      style={{ backgroundImage: "url('./bg.png')" }}>
      <div className="flex">
        <img
          className="w-1rounded-lg-2xl mt-3 hover:scale-110 transition-transform duration-300"
          src="Back.png"
          alt="Ponchik"
        />
        <div className="flex w-50">
          <img
            className="w-2rounded-lg-2xl mt-3 hover:scale-110 transition-transform duration-300"
            src="ponchiks.png"
            alt="Ponchik"
          />
          <img
            className="w-2rounded-lg-2xl mt-3 hover:scale-110 transition-transform duration-300"
            src="drink.png"
            alt="Ponchik"
          />
          <img
            className="w-2rounded-lg-2xl mt-3 hover:scale-110 transition-transform duration-300"
            src="ponchik.png"
            alt="Ponchik"
          />
          <img
            className="w-2rounded-lg-2xl mt-3 hover:scale-110 transition-transform duration-300"
            src="cake.png"
            alt="Ponchik"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-6 mt-40 mb-5">
        <h1>Create a new account</h1>
        <div className="flex items-center ">
          <div className="flex flex-col items-center justify-center space-y-6 mt-40 mb-5">
           <div  className="p-2 w-[16rem] border-2 border-orange-500 rounded-lg bg-white flex ">
            <input  type="text" placeholder="First name" className="border-none" />
            <img className="bg-white " src="Account.svg" alt="" />
           </div>
           <div  className="p-2 w-[16rem] border-2 border-orange-500 rounded-lg bg-white flex ">
            <input  type="text" placeholder="Email" className="border-none" />
            <img className="bg-white " src="Envelope.svg" alt="" />
           </div>
           <div  className="p-2 w-[16rem] border-2 border-orange-500 rounded-lg bg-white flex ">
            <input  type="text" placeholder="Phone number" className="border-none" />
            <img className="bg-white " src="Telephone.svg" alt="" />
           </div>
           <div  className="p-2 w-[16rem] border-2 border-orange-500 rounded-lg bg-white flex ">
            <input  type="text" placeholder="Password" className="border-none" />
            <img className="bg-white " src="uncover.svg" alt="" />
           </div>
          </div>
          <div className="ml-32 mt-16">
            <div className="p-2 w-[16rem] border-2 border-orange-500 rounded-lg bg-white flex">
              <input className="w-[120px]"  type="text" placeholder="Address" />
              <img src="Autolocate.png" alt="" />
            </div>
            <div className="flex items-center mt-7  ">
              <div  className="flex items-center p-2 w-[8rem] border-2 border-orange-500 rounded-lg bg-white">
                <img src="Home.svg" alt="" />
                <h1 className="text-gray-400">Home</h1>
              </div>
              <div className="flex items-center p-2 w-[8rem] border-2 border-orange-500 rounded-lg bg-white">
                <img src="Building.svg" alt="" />
                <h1 className="text-gray-400">Apartment</h1>
              </div>
            </div>
            <div  className="flex items-center border-2 border-orange-500 rounded-3xl bg-white text-gray-400 mt-3">
              <input className="p-[10px] w-8 border-2 border-orange-500 rounded-lg bg-white"  type="checkbox" />
              <h1>Different billing address</h1>
            </div>
          </div>
        </div>



        <br />



        <button><Link to="/home">Create account +</Link></button>
        <Link to="/login">Already have an account</Link>
      </div>
    </div>
  )
};