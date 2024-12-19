import DisplayDateTime from "../ui/DisplayDateTime";
import Logout from "../ui/Logout";
function Header() {
  return (
    <header className="bg-gray-100 px-5 py-5">
      <div className="flex justify-end gap-4">
        <DisplayDateTime />
        <Logout />
      </div>
    </header>
  );
}

export default Header;
