import { TbGridDots } from "react-icons/tb";

import Profile from "../assets/profile-200x200.jpg";

const ProfileIcon = () => {
    return (
        <div className="flex gap-2">
            <span className="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/[0.05]">
                <TbGridDots size={20} color="#5f6368" />
            </span>
            <span className="h-10 w-10 flex justify-center items-center cursor-pointer">
                    <img className="rounded-full h-8 w-8" src={Profile} alt="" />
            </span>
        </div>
    )
};

export default ProfileIcon;
