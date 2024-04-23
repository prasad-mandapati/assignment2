import React from "react";
import { FaUserAlt, FaBriefcase } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BsFillInfoCircleFill } from "react-icons/bs";

const UserDetails = ({ users, selected }) => {
  return (
    <div className="w-full h-[400px] lg:h-full flex flex-col justify-center items-center">
      {users.map((user, i) => {
        return (
          <div
            key={i}
            className={`${
              selected === i ? "flex" : "hidden"
            }  w-full lg:max-w-[620px] border-2 flex-col rounded-xl md:flex-row md:gap-10 justify-center items-center md:items-start py-2 md:p-4`}
          >
            <div className="flex flex-col flex-grow-0 items-center gap-1 py-4">
              <img
                src={user.avatar}
                alt="Profile-img"
                className="rounded-full"
              />
              <p className="font-medium">{user.profile.username}</p>
            </div>
            <div className="flex flex-col gap-4 p-4">
              <div className="flex gap-6">
                <FaUserAlt size={24} className="text-blue-600" />
                <p className="md:text-md lg:text-lg font-semibold">
                  {user.profile.firstName + " " + user.profile.lastName}
                </p>
              </div>
              <div className="flex gap-6">
                <FaBriefcase size={24} className="text-blue-600" />
                <p className="text-md md:text-lg font-medium">
                  {user.jobTitle}
                </p>
              </div>
              <div className="flex gap-6">
                <IoMdMail size={24} className="text-blue-600" />
                <p className="text-md md:text-lg italic">
                  {user.profile.email}
                </p>
              </div>
              <div className="flex gap-6">
                <div>
                  <BsFillInfoCircleFill size={24} className="text-blue-600" />
                </div>
                <p className="text-md md:text-lg font-medium text-gray-500 max-w-[300px]">
                  {user.Bio}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserDetails;
