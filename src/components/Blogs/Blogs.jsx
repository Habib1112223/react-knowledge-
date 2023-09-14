import { useState,useEffect } from "react";
const Blogs = () => {

      const [blogs,setBlogs] = useState([]);

    useEffect(() =>{
      fetch('blogs.json')
      .then(res => res.json())
      .then(data => setBlogs(data));
    },[])
      return (
            <div>
                  <h2 className="text-3xl fond-bold">Knowledge cafe</h2>
            </div>
      );
};

export default Blogs;