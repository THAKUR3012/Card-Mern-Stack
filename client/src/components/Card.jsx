import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { RiContactsBook3Fill } from "react-icons/ri";
import { AiOutlineGlobal } from "react-icons/ai";
const Card = ({ user, onEditClick }) => {
  const { name, email, address, number, link, avatar } = user;

  const getInitials = (fullName) => {
    return fullName
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="flex bg-white rounded-xl shadow-md overflow-hidden w-[550px] h-[270px]">
      <div className="bg-pink-100 flex items-center justify-center p-4">
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            className="w-45 h-45 rounded-full object-cover"
          />
        ) : (
          <div className="w-45 h-45 flex items-center justify-center text-black text-8xl font-bold">
            {getInitials(name)}
          </div>
        )}
      </div>

      <div className="relative p-4 flex-1">
        <button
          onClick={() => onEditClick(user)}
          className="absolute bg-blue-100 top-2 right-2 text-blue-500 hover:text-blue-700 border border-blue-300 p-1"
          title="Edit"
        >
          <FaPencilAlt />
        </button>

        <h2 className="text-[24px] font-semibold tracking-[1px]">{name}</h2>
        <p
          className="text-[16px] text-gray-600 mt-4 flex items-center gap-3
        "
        >
          <MdOutlineEmail />
          {email}
        </p>
        <p className="text-[16px] text-gray-600 mt-1 flex items-center gap-3">
          <RiContactsBook3Fill /> {address}
        </p>
        <p className="text-[16px] text-gray-600 mt-1 flex items-center gap-3">
          <FaPhone /> {number}
        </p>
        <a
          href={`https://${link}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[16px] text-blue-600 mt-1 hover:underline hover:text-blue-600 flex items-center gap-3"
        >
          <span className="text-black">
            <AiOutlineGlobal />
          </span>
          {link}
        </a>

        <div className="flex items-center gap-3 mt-6">
          <img width="50px" src="/logo.png" alt="logo" />
          <div className="mt-2">
            <p className="text-sm font-extrabold text-gray-800">{`Feedspan`}</p>
            <p className="text-sm text-gray-500 truncate">{`Nisi excepteur ad conse...`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
