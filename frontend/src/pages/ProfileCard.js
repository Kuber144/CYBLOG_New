import React from "react";
import maleUser from "../img/profuser.svg";
import { SiGithub, SiIeee, SiGmail } from "react-icons/si";

function ProfileCard({ account }) {
  return (
    <div className="bg-white rounded-md shadow-md p-4">
      <div className="flex items-center">
        <img
          className="rounded-full border border-gray-100 shadow-sm h-26 w-[25%] mr-2"
          src={account.img_url ? account.img_url : maleUser}
          alt="user image"
        />

        <div>
          <div className="text-[#018ABD] text-3xl font-bold">
            {account.name}
          </div>
          <div className="text-[#004581] mt-2 font-semibold text-base">
            {account.professional_title}
          </div>
        </div>
      </div>

      <div className="text-[#1B2631] mt-4 font-bold text-xl">
        {account.about}
      </div>

      <div className="mt-5 font-semibold text-xl">Personal Links</div>
      <ul className="mt-4">
        {account.show_email && (
          <li className="m-2 no-underline inline-flex text-black font-semibold">
            <SiGmail size="1.8rem" />
            <span className="ml-2">Email: {account.email}</span>
          </li>
        )}
        {account.github_username && (
          <li>
            <a
              href={`https://github.com/${account.github_username}`}
              className="m-2 inline-flex no-underline text-black font-semibold"
            >
              <SiGithub size="2.0rem" />
              <span className="ml-2">
                Github profile: {account.github_username}
              </span>
            </a>
          </li>
        )}
        {account.ieee_id && (
          <li>
            <a
              href=""
              className="m-2 inline-flex no-underline text-black font-semibold"
            >
              <SiIeee size="2.8rem" />
              <span className="ms-2 mt-2 mr-2">
                <span className="ml-2 mr-2">IEE ID: </span>
                {account.ieee_id}
              </span>
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}

export default ProfileCard;
