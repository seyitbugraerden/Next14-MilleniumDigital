import React from "react";
import BlogCard from "./Blog/BlogCard";

function Blog() {
  return (
    <section className="py-24">
      <h4 className="text-center pt-16 pb-8">Blog</h4>
      <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-[80%] mx-auto grid-rows-none">
        <BlogCard /> <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
}

export default Blog;
