import React, { useEffect, useState } from "react";
import ListCreatedPosts from "../components/ListCreatedPosts";
import maleUser from "../img/profuser.svg";
import { SiGithub, SiIeee, SiGmail } from "react-icons/si";
import { api } from "../api";
import { useCookies } from "react-cookie";
import { Link, useLocation } from "react-router-dom";
import ProfileCard from "./ProfileCard"; // Import the ProfileCard component

export default function Profile({ user }) {
  const [account, setAccount] = useState([]);
  const location = useLocation();
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [checkProfile, setCheckProfile] = useState(false);

  useEffect(() => {
    let isSubscribed = true;

    const fetchData = async () => {
      const params = {
        username: cookies["UserId"],
        requested_id: cookies["UserId"],
      };
      if (!params.username) {
        return;
      }

      const data = await api.getSelf(params);

      if (isSubscribed) {
        setAccount(data.data);
      }
    };
    fetchData().catch(console.error);

    return () => (isSubscribed = false);
  }, [cookies["UserId"]]);

  return (
    <div className="flex mt-32 ml-auto mb-20 mr-auto max-w-[720px] w-[560px] md:w-[500px] lg:w-[640px]">
      <div className="justify-center">
        <ProfileCard account={account} />{" "}
        {/* Use the ProfileCard component here */}
        <ListCreatedPosts profile_id={account.username} />
        <div className="mt-10 col-md-12 text-center">
          <Link to="/createpost">
            <button className="bg-[#97CBDC] pt-2 pb-2 lg:pl-4 lg:pr-4 pl-3 pr-3 text-black lg:text-lg rounded-xl lg:mr-4 mr-3 text-base hover:bg-white hover:text-[#97CBDC]">
              + New Post
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
