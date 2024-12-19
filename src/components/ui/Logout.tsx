import { FiLogOut } from "react-icons/fi";

function Logout() {
  return (
    <button className="flex items-center justify-evenly gap-1 border-2 border-orange-600 bg-white px-1 font-semibold text-orange-600 transition-all duration-300 hover:bg-orange-500 hover:text-white">
      <span>Logout</span>
      <FiLogOut />
    </button>
  );
}

export default Logout;
