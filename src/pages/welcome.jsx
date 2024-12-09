import React from "react";
import {Link  } from "react-router-dom";
export const Home = () => {
    return (
      <div  className="bg-cover bg-center text-white font-bold"
      style={{ backgroundImage: "url('./bg.png')" }}>
         <div className="">
         <div className="flex">
         <img
          className="w-15 h-20 rounded-2xl mt-3 hover:scale-110 transition-transform duration-300"
          src="Back.png"
          alt="Ponchik"
        />
        <div className="flex w-50">
        <img
          className="w-20 h-20 rounded-2xl mt-3 hover:scale-110 transition-transform duration-300"
          src="ponchiks.png"
          alt="Ponchik"
        />
            <img
          className="w-20 h-20 rounded-2xl mt-3 hover:scale-110 transition-transform duration-300"
          src="drink.png"
          alt="Ponchik"
        />
            <img
          className="w-20 h-20 rounded-2xl mt-3 hover:scale-110 transition-transform duration-300"
          src="ponchik.png"
          alt="Ponchik"
        />
            <img
          className="w-20 h-20 rounded-2xl mt-3 hover:scale-110 transition-transform duration-300"
          src="cake.png"
          alt="Ponchik"
        />
        </div>
        <br />
       </div>
       <div className="flex flex-col items-center justify-center space-y-6 mt-40 mb-5">
      <h1 className="text-lg font-semibold text-center w-80">
        Чтобы продолжить оформление заказа, войдите в систему или создайте новый аккаунт
      </h1>
      <button className="w-40 h-12 rounded-2xl bg-red-400 text-white">
        <Link to="/login" className=" w-full h-full flex items-center justify-center">
          Войти
        </Link>
      </button>
      <button className="w-40 h-12 rounded-2xl bg-red-500 text-white">
        <Link to="/register" className=" w-full h-full flex items-center justify-center">
          Создать аккаунт
        </Link>
      </button>
      <div className="flex items-center justify-center space-x-2">
          <div className="h-1 w-16 bg-black"></div>
          <h1 className="text-center">or</h1>
          <div className="h-1 w-16 bg-black"></div>
      </div>
    </div>
    <div className="flex flex-col items-center justify-center space-y-6">
        <button >
           <div className="flex p-3 w-72 h-10 rounded-2xl gap-3 bg-slate-500 items-center ">
           <img className="mr-1"  src="facebook.png" alt="" />
           Continue with Facebook
           </div>
        </button>
        <button>
           <div className="flex p-3 w-72 h-10 rounded-2xl gap-3 bg-slate-500 items-center ">
           <img className="mr-1"  src="google.png" alt="" />
           Continue with Google
           </div>
        </button>
        <button>
           <div className="flex p-3 w-72 h-10 rounded-2xl gap-3 bg-slate-500 items-center " >
           <img  className="mr-1"  src="without.png" alt="" />
           <h1>Pay without account</h1>
           </div>
        </button>
    </div>
         </div>
      </div>
      )
};