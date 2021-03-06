import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { blogList } from "../../config/data";
import Chip from "../../components/common/Chip";
import EmptyList from "../../components/common/EmptyList";
import "./styles.css";
import { Link } from "react-router-dom";
import Markdown from "markdown-to-jsx";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [img, setImg] = useState("");

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
      document.title = blog.title;
    }
    setImg(`/assets/images/empty${Math.floor(Math.random() * 10)}.gif`);
  }, []);

  return (
    <>
      <Link className="blog-goBack" to="/site/blogs">
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {blog ? (
        <div className="blog-wrap">
          <header>
            <p className="blog-date">Published {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            <div className="blog-subCategory">
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          <img src={blog.cover} alt="cover" />
          <Markdown options={{ wrapper: "article" }}>{blog.content}</Markdown>
        </div>
      ) : (
        <EmptyList img={img} />
      )}
    </>
  );
};

export default Blog;
