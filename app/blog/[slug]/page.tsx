import Image from 'next/image'
import fs from "fs"
import Markdown from 'markdown-to-jsx'
import matter from 'gray-matter';


"use strict";
const getPostContent = (slug: string) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
};

const PostPage =(prop) => {
 const slug = prop.params.slug;
 const post = getPostContent(slug);
 return (
    <main className="max-w-4xl mx-auto  ">
    <div className="gap-5 my-14  p-5">
        
      <div className="text-xl blog-post ">
        <h1 className=" text-3xl font-bold text-sky-700 py-3">{post.data.title}</h1>
        <p className=" text-slate-600 text-xs py-3">
          <span className="px-3">{post.data.date} </span>
          <span className="text-slate-200 px-2 py-0.5 rounded-sm bg-slate-700">{post.data.category}</span></p>
          <article className='prose  max-w-none prose-article:mx-0 md:prose-4xl lg:prose-4xl dark:prose-invert prose-headings:text-sky-700 prose-headings:my-3 prose-p:text-xl'>
          <Markdown>{post.content}</Markdown>
          </article>
      </div> 
    </div>
  </main>  
 )
};
export default PostPage;