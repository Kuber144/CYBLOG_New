import React, {useState,useEffect} from "react";
import { api } from "../api";
import BlogCard from "../components/BlogCard";

export default function Dashboard ({user}){
    const [blogs,setBlogs] = useState([]);

    useEffect(() => {
        let isSubscribed = true;
        const fetchData = async () => {
          const data = await api.getAllblogs();
          
          if (isSubscribed) {
            setBlogs(data.data);
          }
          
        };
        fetchData().catch(console.error);
        
        
        return () => (isSubscribed = false);
      }, []);
    
    return (
        <div className="mt-32 ml-auto mr-auto row max-w-[640px] w-[360px] md:w-[500px] lg:w-[560px] " style = {{margin: "100px auto"}}>
             {!!blogs.length && blogs.map((blog, _index)=>(
                      <div
                      key={_index}
                      className="snap-start lg:snap-center lg:min-w-[50vw] h-[100vh] flex justify-center items-center"
                    >          
                <BlogCard  blog = {blog}/> 
                </div>
            ))}

        </div>
    );
}