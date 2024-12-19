function Logo() {
    return (
      <div className="rounded-b-3xl bg-white pb-2">
        <div className="flex items-center space-x-5 rounded-b-3xl bg-orange-500 px-6 py-2">
          <img src="/logo.png" alt="logo" className="h-20 w-auto" />
          <p className="text-2xl font-medium tracking-wider text-white">Dihing Board of Open Schooling</p>
        </div>
      </div>
    );
  }
  
  export default Logo;
  