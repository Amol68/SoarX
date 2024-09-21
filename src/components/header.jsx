import React from "react";
import profile_pic from "../assets/profile_pic.png"
import search_icon from "../assets/search_icon.png"
import close from "../assets/close.png"


const Header = () => {
  return (
    <div className="bg-white py-5 px-8 border-b-2 border-gray-300 flex items-center justify-between">
            {/* Left side (empty div to help center the search bar) */}
            <div className="w-1/3"></div>




            {/* Center (Search Bar) */}
            <div className="w-1/3 flex justify-center items-center relative">
                <input 
                    type="search"
                    placeholder="Search"
                    className=" border-2 border-gray-300 bg-white h-10 w-full pl-10 px-5 pr-16 rounded-lg text-sm focus:outline-black  focus:border-none"
                />
                <img src={search_icon} alt="searchIcon" className="h-5 w-5 absolute  left-3  top-1/2  transform -translate-y-1/2 transform -translate-y-1/2 h-5 w-5"/>
                <img src={close} alt="clIcon" className="h-5 w-5 absolute  right-3 top-1/2 transform -translate-y-1/2 h-5 w-5"/>
          
            </div>




            {/* Right side (Toggle and Avatar) */}
            <div className="w-1/3 flex items-center justify-end space-x-4">
                {/* Toggle Button */}
                <label className="relative inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer absolute"
                        
                    />
                    
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:bg-purple-600 peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all" />
                </label>
                

                {/* Avatar */}
                <img
                    src={profile_pic}
                    alt="User Avatar"
                    className="rounded-full w-8 h-8 object-cover"
                />
            </div>
        </div>
  );
};

export default Header;
