import React from "react";
import { BsArrowBarDown, BsArrowDown, BsDot } from "react-icons/bs";
import { useSelector } from "react-redux";
import SuggestionsUserCard from "./SuggestionsUserCard";
import { useNavigate } from "react-router-dom";

const HomeRight = ({ suggestedUser }) => {
  const { user } = useSelector((store) => store);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/${user.reqUser.username}`);
  };

  const handleSwitch = () => {
    localStorage.clear();
    navigate(`/login`);
  };

  return (
    <div>
      <div>
        <div className="flex justify-between items-center">
          <div className="flex items-center ">
            <img
              className="w-12 h-12 rounded-full object-cover"
              src={
                user.reqUser?.image ||
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              }
              alt=""
            />
            <div onClick={handleNavigate} className="ml-3 cursor-pointer">
              <p>{user.reqUser?.username}</p>
              <p className="opacity-70">{user.reqUser?.email}</p>
            </div>
          </div>
          <p
            onClick={handleSwitch}
            className="text-blue-600 font-semibold cursor-pointer"
          >
            switch
          </p>
        </div>
        <div className="flex justify-between py-5 items-center">
          <p className="font-semibold opacity-70">Suggestions for you</p>
          <p className="text-xs font-semibold opacity-95">
            <BsArrowDown />
          </p>
        </div>

        <div className="space-y-5">
          {suggestedUser.map((item, index) => (
            <SuggestionsUserCard
              key={index}
              image={item?.userImage || "blankprofile.png"}
              username={item.username}
              description={"Follows you"}
            />
          ))}
        </div>
        <div className="opacity-60 text-xs flex items-center flex-wrap mt-10">
          <span>About</span>
          <BsDot />
          <span>Help</span>
          <BsDot />
          <span>Press</span>
          <BsDot />
          <span>API</span>
          <BsDot />
          <span>Jobs</span>
          <BsDot />
          <span>Privacy</span>
          <BsDot />
          <span>Terms</span>
          <BsDot />
          <span>Locations</span>
          <BsDot />
          <span>Language</span>
          <BsDot />
          <span>English</span>
          <BsDot />
          <span>Meta</span>
          <BsDot />
          <span>Verified</span>
        </div>
      </div>
    </div>
  );
};

export default HomeRight;
