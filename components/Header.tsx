import Link from "next/link";
import React from "react";
import { IoHomeOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="flex items-center w-36 rounded-md cursor-pointer justify-center mt-10 ml-10">
      <Link href="/" className="items-center flex justify-center p-3">
        <i className="mr-3">
          <IoHomeOutline size={30} fill="rgb(85, 237, 14)" />
        </i>
      </Link>
    </div>
  );
};

export default Header;
