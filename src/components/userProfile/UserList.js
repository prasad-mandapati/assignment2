"use client";
import React, from "react";

const UserList = ({ users, handleTab }) => {
 
  return (
    <div className="lg:max-w-[300px] h-[350px] lg:h-[662px] overflow-y-auto py-4 px-2 gap-4 bg-blue-500 flex flex-col rounded-xl lg:rounded-none">
      {users?.map((user, i) => {
        return (
          <button
            key={i}
            className="flex items-center gap-3 hover:bg-blue-200 focus:bg-blue-50  rounded-xl px-4 py-2 transition-all duration-300"
            onClick={() => handleTab(i)}
          >
            <div className="border overflow-hidden w-14 h-14 rounded-full">
              <img
                src={user.avatar}
                alt="avatar"
                className="h-fit w-fit object-fill text-center"
              />
            </div>
            <div className="text-left">
              <h1 className="font-semibold text-[15px]">
                {user.profile.username}
              </h1>
              <p className="text-[12px] font-medium">{user.jobTitle}</p>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default UserList;
