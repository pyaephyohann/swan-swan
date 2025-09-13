import { navBarDatas } from "@/utils/datas";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-sblack/50">
      {/* container */}
      <div className="flex justify-between items-center px-[2rem] py-[1rem]">
        {/* logo */}
        <div>
          <h1 className="text-[1.5rem]">Swan Swan</h1>
        </div>
        {/* body */}
        <div className="flex justify-between items-center space-x-[4.5rem]">
          {navBarDatas.map((ele) => {
            return <Link href={ele.href}>{ele.title}</Link>;
          })}
        </div>
        {/* account and hamburger menu */}
        <div>
          <div className="w-[3rem] h-[3rem] bg-primary rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
