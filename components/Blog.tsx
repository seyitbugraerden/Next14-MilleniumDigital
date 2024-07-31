import React from "react";
import BlogCard from "./Blog/BlogCard";

function Blog() {
  return (
    <section className="pb-14">
      <h4 className="text-center pt-16 pb-8">Blog</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 max-w-[80%] mx-auto hide-second-row ">
        <BlogCard className="hidden md:block" />{" "}
        <BlogCard className="hidden xl:block" />
        <BlogCard />
      </div>
    </section>
  );
}

export default Blog;
