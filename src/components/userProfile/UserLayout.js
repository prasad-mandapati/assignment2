"use client";
import React, { useEffect, useState } from "react";
import UserList from "./UserList";
import UserDetails from "./UserDetails";
import axios from "axios";

const UserLayout = () => {
  const [users, setUsers] = useState([]);
  const [selected, setSelected] = useState(0);
  const [extend, setExtend] = useState(false);

  const getData = async () => {
    const response = await axios.get(
      "https://602e7c2c4410730017c50b9d.mockapi.io/users"
    );
    setUsers(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleTab = (index) => {
    setSelected(index);
  };

  return (
    <div className=" flex flex-col-reverse lg:flex-row w-full overflow-hidden py-4 lg:p-5 lg:gap-5 md:shadow-[0_0_10px] md:shadow-gray-400 lg:shadow-none">
      <div className="max-w-full min-h-[400px] px-2 md:px-10 md:pb-10 lg:p-0">
        <button
          className="lg:hidden bg-blue-600 px-4 py-2 my-5 rounded-md text-white"
          onClick={() => setExtend(!extend)}
        >
          Users
        </button>
        <div
          className={`${
            !extend ? `h-[350px]` : `h-[0px]`
          } overflow-hidden transition-all duration-300 lg:h-full lg:rounded-xl`}
        >
          <UserList users={users} handleTab={handleTab} />
        </div>
      </div>
      <div className="w-full p-2 md:px-10 lg:p-0 lg:shadow-[0_0_10px] lg:shadow-gray-400 lg:rounded-xl overflow-hidden">
        <UserDetails users={users} selected={selected} />
      </div>
    </div>
  );
};

export default UserLayout;
