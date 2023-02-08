/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import home from "../img/home.svg";
import { api } from "../api";
import maleUser from "../img/profuser.svg";
import { useCookies } from "react-cookie";

export default function Home(user) {
  const [news, setNews] = useState(null);
  const [contri, setContri] = useState([]);
  const [blogss, setBlogss] = useState(null);
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [author, setAuthor] = useState(null);

  const handleClick = () => {
    if (user) {
      navigate("/dashboard");
    } else {
      navigate("/signup");
    }
  };

  useEffect(() => {
    let isSubscribed = true;
    const fetchData = async () => {
      const data = await api.soertedUsers();
      if (isSubscribed) {
        setContri(data.data);
      }
    };
    fetchData().catch(console.error);

    return () => (isSubscribed = false);
  }, []);

  // console.log(contri);

  useEffect(() => {
    let isSubscribed = true;
    const fetchData = async () => {
      const data = await api.getAllblogsSorted();
      if (isSubscribed) {
        setBlogss(data.data);
      }
    };
    fetchData().catch(console.error);

    return () => (isSubscribed = false);
  }, []);

  // console.log(blogss);

  useEffect(() => {
    let isSubscribed = true;
    const fetchData = async () => {
      const data = await fetch(
        "https://newsapi.org/v2/everything?q=technology&sortBy=popularity&apiKey=c22c09c975254c75be22b69b38db0611"
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

  // console.log(news);

  // console.log(user)
  const handleClickBlog = (_id) => {
    // TODO
    // navigate(`/dashboard/${_id}`);
  };

  const handleClickExplore = (_id) => {
    navigate("/dashboard");
  };

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
            <button
              className="text-white bg-[#0287BF] px-5 py-3 m-2 rounded-lg font-semibold w-fit text-xl cursor-pointer hover:bg-[#E1E9F4] hover:text-[#0287BF]"
              onClick={handleClick}
            >
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
                  <div className="flex flex-row items-center justify-between h-16 bg-[#E1E9F4] rounded-lg">
                    <div className="h-[100%] flex flex-row items-center justify-center ml-4">
                      <div className="ml-2">
                        <a
                          className="text-base text-[#024481] max-w-[100%] break-words"
                          href={newss.url}
                          target="_blank"
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
          <div className="hide-scroll flex flex-col snap-y overflow-y-auto lg:snap-x snap-mandatory lg:flex-row lg:overflow-x-auto lg:overflow-y-hidden pb-10 lg:pb-0">
            {blogss &&
              blogss.map((blogg, _index) => (
                <div
                  key={_index}
                  className="snap-start lg:snap-center lg:min-w-[50vw] h-[100vh] flex justify-center items-center lg:ml-20 lg:mr-20 lg:mt-0"
                >
                  <div className="card bg-[#E1E9F4] drop-shadow-xl max-w-[340px] md:max-w-[400px] lg:max-w-[650px] h-[85vh] lg:h-[450px] mt-20 lg:mt-0 flex flex-row rounded-3xl">
                    <div className="card-text">
                      <div className="title-total lg:pt-10 pb-6 pr-4 pl-4">
                        <div className="title p-4 text-right text-[#028ABE] font-semibold text-lg">
                          {blogg.name}
                        </div>
                        <h2 className="m-0 pr-4 pl-4 text-2xl font-bold md:mt-5">
                          {blogg.title}
                        </h2>
                        <h3 className="m-0 pr-4 pl-4 text-base font-semibold text-[#787878] md:mt-1">
                          {blogg.hashes.length > 0 &&
                            blogg.hashes.map((hash, _index) => (
                              <span key={_index} className="mr-2">
                                #{hash}
                              </span>
                            ))}
                        </h3>
                        <div className="desc pt-2 pb-2 pr-4 pl-4 text-sm break-words">
                          {blogg.content.length > 600
                            ? blogg.content.substring(0, 600) + "..."
                            : blogg.content}
                        </div>
                        <div className="actions flex flex-row justify-center align-center mt-3 lg:mt-6">
                          <Link className = "no-underline" to = "/viewblog" state = {{blog:blogg}}> <button
                            className="bg-[#028ABE] pt-2 pb-2 lg:pl-4 lg:pr-4 pl-3 pr-3 text-white lg:text-lg rounded-xl lg:mr-4 mr-3 text-base hover:bg-white hover:text-[#028ABE]"
                            
                          >View</button>
                            </Link>
                            
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="w-[100%] flex justify-center items-center">
            <button
              className="text-white bg-[#0287BF] px-5 py-3 rounded-lg font-semibold w-fit text-xl cursor-pointer hover:bg-[#E1E9F4] hover:text-[#0287BF]"
              onClick={handleClickExplore}
            >
              Explore More
            </button>
          </div>
        </div>
        <div>
          <h1 className="mt-24 text-center font-bold text-3xl">
            This Week’s Top 5 Contributors
          </h1>
          <div className="grid grid-cols-6 justify-items-stretch">
            {contri.length &&
              contri.map((contributor, _index) => (
                <div
                  key={_index}
                  className={
                    _index < 3
                      ? "justify-self-center col-span-2 mt-12"
                      : "justify-self-center col-span-3 mt-12"
                  }
                >
                  <Link className = "no-underline" to = {`/profile/${contributor.username}`} state = {{search_id:contributor.username}}>
                  <img
                    src={contributor.img_url ? contributor.img_url : maleUser}
                    alt=""
                    className="h-52 rounded-full"
                  />
                  </Link>
                  <Link className = "no-underline" to = {`/profile/${contributor.username}`} state = {{search_id:contributor.username}}>
                  <p className="text-center font-semibold text-xl">
                    {contributor.name}
                  </p>
                  </Link>
                  <p className="text-center font-semibold text-[#028ABE] text-lg">
                    {contributor.professional_title}
                  </p>
                </div>
                
              ))}
          </div>
        </div>
        <footer className="bg-[#024481] mt-32 h-60 grid grid-cols-2 gap-10 place-items-center text-white">
          <div>
            <p className="text-lg font-semibold mb-2">Contact Us</p>
            <p>bxjsxniksajxoaslk</p>
            <p>beurbhfcieujfoernfcoiercjkbxuewbxi</p>
            <p>xbwhvxuwbjhbbc</p>
          </div>
          <div>
            <p className="text-lg font-semibold mb-2">Important Links</p>
            <p>xxewchbebcieuw</p>
            <p>dnewuidhn32du</p>
            <p>dnewuidhn32du</p>
          </div>
        </footer>
      </div>
    </>
  );
}
