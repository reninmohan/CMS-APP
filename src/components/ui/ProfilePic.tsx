function ProfilePic() {
    return (
      <div className="flex flex-col items-center justify-center space-y-1">
        <img src="/profilepic.png" alt="profile_pic" className="h-24 w-24 rounded-full border-4 border-orange-500" />
        <p className="text-lg font-semibold uppercase tracking-wide text-white">Almina ahamed</p>
      </div>
    );
  }
  
  export default ProfilePic;
  