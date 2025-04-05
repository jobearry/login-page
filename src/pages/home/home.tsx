// import avatar from '/joby-profile-image.svg';

export const Home = () => {
  return (
    <section className="h-full flex justify-center place-items-center">
      <div className="h-5/12 w-[30rem] shadow shadow-gray-600 bg-white rounded-lg grid grid-cols-1 place-items-center">
        {/* <div className='rounded-full w-fit '>
          <img className='h-40' src={avatar} alt="avatar" />
        </div> */}
        <form className='grid grid-cols-1 gap-4 w-80 text-center'>
          <h1 className='h-10 font-bold text-3xl text-[#2c2c2c]'>Login</h1>
          <input className='border border-gray-500 h-10 rounded-full px-5' type="text" placeholder='Username' required/>
          <input className='border border-gray-500 h-10 rounded-full px-5' type="password" placeholder='Password' required/>
          <div className="mt-2">
            <button className='w-full rounded-full bg-indigo-400 h-10 text-gray-100 hover:bg-indigo-500' type="submit">Login</button>
            <a href=""><p className="text-sm text-end me-2 mt-1 text-blue-500">Forgot Password?</p></a>
          </div>
        </form>
      </div>
    </section>
  )
}