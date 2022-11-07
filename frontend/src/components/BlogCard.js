/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { api } from "../api";

export default function BlogCard({ blog}) {
  // console.log("here" + blog)
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const navigate = useNavigate();
  const [author, setAuthor] = useState(null);
  // console.log(user)
  const blogContent =
    blog.content.length > 230 ? blog.content.substring(0, 230) + "..." : blog.content;
  const handleClick = (_id) => {
    // TODO
    // navigate(`/dashboard/${user_id}`);
  };

  useEffect(() => {
    let isSubscribed = true;
    const fetchData = async () => {
      const params = {
        user_id: cookies["UserId"],
        requested_id: blog.user_id,
      };
      if (!params.user_id) {
        return;
      }
      const data = await api.getSelf(params);

      if (isSubscribed) {
        setAuthor(data.data);
      }
    };
    fetchData().catch(console.error);

    return () => (isSubscribed = false);
  }, [cookies["UserId"]]);

  return (
    <div className="snap-start lg:snap-center lg:min-w-[50vw] h-[100vh] flex justify-center items-center lg:ml-20 lg:mr-20 lg:mt-5">
      <div className="card bg-white drop-shadow-xl max-w-[340px] md:max-w-[400px] lg:max-w-[650px] h-[85vh] lg:h-[450px] mt-20 lg:mt-0 flex flex-row rounded-3xl">
        <div
          className="card-text flex flex-col lg:grid"
          style={{ gridTemplateColumns: "3fr 5fr" }}
        >
          <div className="title-total lg:pt-10 pb-6 pr-4 pl-4">
            <div className="title p-4 text-right text-[#fd2f6e] font-semibold text-lg">
              {author ? author : "Loading..."}
            </div>
            <h2 className="m-0 pr-4 pl-4 text-2xl font-bold md:mt-5">
              {blog.title}
            </h2>
            <h3 className="m-0 pr-4 pl-4 text-base font-semibold text-[#fd2f6e] md:mt-1">
              {blog.hashes.length>0 && blog.hashes.map((hash, _index)=>(
                <span key={_index} className="mr-2">{hash}</span>
              ))}
            </h3>
            <div className="desc pt-2 pb-2 pr-4 pl-4 text-sm break-words max-w-[308px] md:max-w-[368px]">
              {blogContent}
            </div>
            <div className="actions flex flex-row justify-center align-center mt-3 lg:mt-6">
              <button
                className="bg-[#fd2f6e] pt-2 pb-2 lg:pl-4 lg:pr-4 pl-3 pr-3 text-white lg:text-lg rounded-full lg:mr-4 mr-3 text-base hover:bg-[#FFD9C0] hover:text-[#fd2f6e]"
                onClick={() => handleClick(blog._id)}
              >
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
