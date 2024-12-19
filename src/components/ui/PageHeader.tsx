import { FaHome } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

interface PageHeaderProps{
  pagetitle:string,
  subtitle?: string,
  nav: string
}

function PageHeader({ pagetitle , subtitle = "", nav }: PageHeaderProps) {
  return (
    <div className="flex items-baseline justify-between">
      <div className="flex items-baseline space-x-2">
        <h2 className="text-2xl font-semibold text-gray-600">{pagetitle}</h2>
        <span className="text-gray-400">{subtitle}</span>
      </div>
      <div className="grid grid-cols-[5rem_1rem_10rem] items-center">
        <span className="flex items-center space-x-2">
          <FaHome />
          <button className="hover:text-gray-600">Home</button>
        </span>
        <span>
          <FaAngleRight />
        </span>
        <button className="hover:text-gray-600">{nav}</button>
      </div>
    </div>
  );
}

export default PageHeader;
