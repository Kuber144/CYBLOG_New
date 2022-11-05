/* eslint-disable */
import React, { useEffect, useState } from "react";
import home from "../img/home.svg";

export default function Home(user) {
  /*const blog = [
    {
      title: "My Mini Project",
      hashes: [cybersec, advance],
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      user_id: "117ee595-e0de-4178-be78-7ff0e0c7ee7e",
      likes: 5,
      comments: [],
      collaborators: [],
    },
    {
      title: "My Mini Project",
      hashes: [cybersec, advance],
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      user_id: "117ee595-e0de-4178-be78-7ff0e0c7ee7e",
      likes: 5,
      comments: [],
      collaborators: [],
    },
  ];*/

  const [news, setNews] = useState(null);
  useEffect(() => {
    let isSubscribed = true;
    const fetchData = async () => {
      const data = await fetch(
        "https://newsapi.org/v2/everything?q=technology&from=2022-11-04&sortBy=popularity&apiKey=c22c09c975254c75be22b69b38db0611"
      );
      if (isSubscribed) {
        let newsArticles = await data.json();
        newsArticles = newsArticles.articles;
        newsArticles = newsArticles.filter((a, i) => i < 10);
        setNews(newsArticles);
      }
    };
    fetchData().catch(console.error);

    return () => (isSubscribed = false);
  }, []);

  console.log(news);
  return (
    <>
      <div className="mt-[3.5rem]">
        <img src={home} alt="home" />
      </div>
      <div>
        <p className="text-center text-3xl mt-12 font-bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </p>
        <p className="text-center text-xl mt-6 ml-20 mr-20">
          incididunt ut labore et dolore magna aliqua. Orci a scelerisque purus
          semper. Et ultrices neque ornare aenean. Feugiat vivamus at augue
          eget. Viverra adipiscing at in tellus integer. Rhoncus est
          pellentesque elit ullamcorper dignissim cras tincidunt lobortis.
          Pulvinar pellentesque habitant morbi tristique. Eu non diam phasellus
          vestibulum lorem sed risus. Urna neque viverra justo nec ultrices. Eu
          mi bibendum neque egestas congue quisque egestas diam. Vestibulum
          morbi blandit cursus risus at ultrices mi tempus. At in tellus integer
          feugiat scelerisque.
          <br />
          <br />
          Varius vel pharetra vel turpis. Nulla posuere sollicitudin aliquam
          ultrices sagittis orci a. Cum sociis natoque penatibus et. Risus
          nullam eget felis eget nunc. Ultrices eros in cursus turpis massa.
          Nibh sit amet commodo nulla facilisi
        </p>
        {!user && (
          <div className="w-[100%] flex justify-center items-center mt-8">
            <button className="text-white bg-[#0287BF] px-5 py-3 m-2 rounded-lg font-semibold w-fit text-xl cursor-pointer hover:bg-[#E1E9F4] hover:text-[#0287BF]">
              Become a Member
            </button>
          </div>
        )}
        <div>
          <h1 className="mt-20 text-center font-bold text-3xl">Latest News</h1>
          <div className="mt-8">
            {news &&
              news.map((newss, _index) => (
                <div
                  className="flex flex-col items-left justify-center w-[65%] ml-[20%]"
                  key={_index}
                >
                  <div className="flex flex-row items-center justify-between h-16 bg-white rounded-lg">
                    <div className="h-[100%] flex flex-row items-center justify-center ml-4">
                      <div className="ml-2">
                        <a
                          className="text-base text-[#024481] max-w-[100%] break-words"
                          href={newss.url}
                        >
                          {newss.title.length > 100
                            ? newss.title.slice(0, 100).concat("...")
                            : newss.title}
                        </a>
                        <h4 className=" text-xs opacity-70">
                          {newss.description.length > 200
                            ? newss.description.slice(0, 200).concat("...")
                            : newss.description}
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="h-[1px] bg-[#0287BF] mt-4 mb-4"></div>
                </div>
              ))}
          </div>
        </div>
        <div>
          <h1 className="mt-20 text-center font-bold text-3xl">
            This Week’s Top 10 Trending Blogs
          </h1>
        </div>
      </div>
    </>
  );
}
