import { NavLink } from "react-router-dom";
import { HiUser } from "react-icons/hi2";
import { LuNotebookPen } from "react-icons/lu";
import { LuNotebook } from "react-icons/lu";
import { FaDownload } from "react-icons/fa6";
import { LuFileSearch } from "react-icons/lu";

function MainNav() {
  return (
    <nav>
      <ul className="gap-0.25 flex flex-col px-6">
        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) => `text-normal flex items-center gap-2 px-6 py-3 font-medium transition-all duration-300 ${isActive ? "text-orange-500" : "text-white"}`}
          >
            <HiUser />
            <span>Student Profile</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/syllabus"
            className={({ isActive }) => `text-normal flex items-center gap-2 px-6 py-3 font-medium transition-all duration-300 ${isActive ? "text-orange-500" : "text-white"}`}
          >
            <LuNotebookPen />
            <span>Syllabus Download</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/study-material"
            className={({ isActive }) => `text-normal flex items-center gap-2 px-6 py-3 font-medium transition-all duration-300 ${isActive ? "text-orange-500" : "text-white"}`}
          >
            <LuNotebook />
            <span>Study Material Download</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admit-download"
            className={({ isActive }) => `text-normal flex items-center gap-2 px-6 py-3 font-medium transition-all duration-300 ${isActive ? "text-orange-500" : "text-white"}`}
          >
            <FaDownload />
            <span>Admit Download</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/result-download"
            className={({ isActive }) => `text-normal flex items-center gap-2 px-6 py-3 font-medium transition-all duration-300 ${isActive ? "text-orange-500" : "text-white"}`}
          >
            <LuFileSearch />
            <span>Result Download</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
