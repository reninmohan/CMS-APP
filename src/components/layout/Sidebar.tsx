import Logo from "../ui/Logo";
import ProfilePic from "../ui/ProfilePic";
import MainNav from "../ui/MainNav";

function Sidebar() {
  return (
    <div className="row-span-full flex flex-col gap-2 border-4 border-orange-500 bg-blue-900">
      <Logo />
      <div className="space-y-10 px-1 py-3">
        <ProfilePic />
        <MainNav />
      </div>
    </div>
  );
}

export default Sidebar;
