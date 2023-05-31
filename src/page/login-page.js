import logo from '../assets/img/logo.png';
import header from '../assets/img/header-login.png'
// import './App.css';
import Swal from 'sweetalert2'



import React, {useState} from 'react'

function Login() {

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  


  const  swallSuccess=(name) => {
    Swal.fire({
      title: 'Anda berhasil login sebagai ' +name,
      icon: 'success',
      confirmButtonText: 'Oke'
    })
  }

  const swallFailed =(e) => {
    Swal.fire({
      title: 'Wrong User Name & Password',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'Oke'
    })
  }

  const Auth = async(e) =>{
    e.preventDefault();
    try {
     const response =  await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          
          username: userId,
          password: password,
          // expiresInMins: 60, // optional
        })
      })
      if (response.status == 400) {
         swallFailed();
      }else{
        const result = await response.json()
        console.log(result.firstName)
        window.location.href = '/home'
        swallSuccess(result.firstName);
      }
      
    } catch (error) {
      swallFailed();
      console.error(`Download error: ${error.message}`)
    }
  }


  return (
    <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
  <div className="container h-full p-10">
    <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
      <div className="w-full">
        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
          <div className="g-0 lg:flex lg:flex-wrap">
            <div className="md:px-0 lg:w-6/12">
                  <img className="" src={header} alt="logo" />
              <div className="md:mx-6 md:p-12 ">
                <div className="text-center flex">
                  <img className="mx-auto w-25 my-14" src={logo} alt="logo" />
                </div>
                <div className="px-4">
                <form onSubmit={Auth}>
                  <h1 className='font-bold text-2xl'>Login</h1>
                  <p className='text-base font-semibold'>Please Sign to Continue</p>

                  
                  <div className="relative mb-4 mt-4" data-te-input-wrapper-init>
                    <label htmlFor="exampleFormControlInput1" className="text-base font-semibold">User ID
                    </label>
                    <div className="flex items-center border-b border-gray-500-500 py-2">
                    <input type="text"  onChange={(e)=>{setUserId(e.target.value)}} value={userId} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" id="exampleFormControlInput1" placeholder="User ID" />
                    </div>
                  </div>
                  <div className="relative mb-4 mt-4" data-te-input-wrapper-init>
                    <label htmlFor="exampleFormControlInput1" className="text-base font-semibold">Password
                    </label>
                    <div className="flex items-center border-b border-gray-500-500 py-2">
                    <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" id="exampleFormControlInput1" placeholder="Password" />
                    </div>
                  </div>
                  <div className="mb-12 pb-1 pt-1 text-right">
                    <button className="mb-3 inline-block w-2/6 bg-gradient-to-r from-purple-700 to-red-400 rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]" type="submit" data-te-ripple-init data-te-ripple-color="light">
                      Log in
                    </button>
                  </div>
                    <div className="pb-6 outline-2 flex">
                      <p className="mb-0 mr-2 mx-auto">Don't have an account? <span className='text-base font-semibold text-red-600'> Sign Up</span></p>
                    </div>
                </form>
                </div>
                
              </div>
            </div>
            <div className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none" style={{background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)'}}>
              <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                <h4 className="mb-96 text-xl font-semibold">
                  
                </h4>
                <p className="text-sm">
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}

export default Login;
