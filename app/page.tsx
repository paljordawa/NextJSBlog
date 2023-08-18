import Image from 'next/image'
import Link from 'next/link'
import fs from "fs"
import matter  from 'gray-matter'
import { PostMetadata } from './components/PostMetadata'

const getPostMetadata = (): PostMetadata[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  //const slugs = markdownPosts.map((file) => file.replace(".md",""));
  //return slugs;

  // get gray-matter data from each file
  const posts = markdownPosts.map((filename) => {
    const fileContents = fs.readFileSync(`posts/${filename}`,"utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      excerpt: matterResult.data.excerpt,
      category: matterResult.data.category,
      image: matterResult.data.image,
      slug: filename.replace(".md",""),
    };
  });
  return posts;
}

export default function Home() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <div>

      <main className="max-w-4xl mx-auto  ">
        <div className="sm:flex gap-5 my-14 hover:opacity-70 p-5">
          <Image width={500} height={300} src={post.image} alt="" className="object-cover md:h-full md:w-48"/>
          <div className="col-span-3">
          <Link href={`/blog/${post.slug}`}>
            <h2 className=" text-2xl font-bold text-teal-700">{post.title}</h2>
          </Link>
          <p className="py-3 text-xl ">{post.excerpt}</p>
          <p className=" text-slate-600 text-xs">
            <span className="px-3">{post.date} </span>
            <span className="text-slate-200 px-2 py-0.5 rounded-sm bg-slate-700"><Link href={`/blog/${post.category}`}>{post.category}</Link></span></p>
          </div> 
      </div>
    </main>
    </div>
  ));

  return (
    <>
{postPreviews}
  
  <main className="max-w-4xl mx-auto p-5 ">
    <div className="max-w-md mx-auto bg-teal-600 rounded-xl shadow-md overflow-hidden md:max-w-2xl ">
      <div className="md:flex">
        <div className="md:shrink-0">
          <Image width={500} height={300} className="h-48 w-full object-cover md:h-full md:w-48" src="/img/Snapseed.jpg" alt="Modern building architecture" />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-teal-700 font-semibold">Company retreats</div>
          <a href="#" className="block mt-1 text-lg leading-tight font-medium text-slate-800 hover:underline">Incredible accommodation for your team</a>
          <p className="mt-2 text-slate-900">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
        </div>
      </div>
    </div>
  </main>

  <main className="max-w-4xl mx-auto  ">
    <div className="max-w-4xl mx-auto rounded-md shadow-md overflow-hidden md:max-w-4xl my-20">
      <h2 className="text-center  text-3xl font-semibold p-3 text-slate-500">Category</h2>
      <div className="p-3 text-lg text-slate-400 ">
        <span className="inline-flex items-center rounded-md px-2 my-2 mx-1 py-1  text-slate-400 bg-slate-700 hover:bg-slate-400 hover:text-slate-700"> <Link href="#">Tech</Link></span>
        <span className="inline-flex items-center rounded-md px-2 my-2 mx-1 py-1  text-slate-400 bg-slate-700 hover:bg-slate-400 hover:text-slate-700"> <Link href="#">Heath</Link></span>
        <span className="inline-flex items-center rounded-md px-2 my-2 mx-1 py-1  text-slate-400 bg-slate-700 hover:bg-slate-400 hover:text-slate-700"> <Link href="#">Global News</Link></span>
        <span className="inline-flex items-center rounded-md px-2 my-2 mx-1 py-1  text-slate-400 bg-slate-700 hover:bg-slate-400 hover:text-slate-700"> <Link href="#">Tibet</Link></span>
        <span className="inline-flex items-center rounded-md px-2 my-2 mx-1 py-1  text-slate-400 bg-slate-700 hover:bg-slate-400 hover:text-slate-700"> <Link href="#">Entertainment</Link></span>
        <span className="inline-flex items-center rounded-md px-2 my-2 mx-1 py-1  text-slate-400 bg-slate-700 hover:bg-slate-400 hover:text-slate-700"> <Link href="#">Sports</Link></span>
        <span className="inline-flex items-center rounded-md px-2 my-2 mx-1 py-1  text-slate-400 bg-slate-700 hover:bg-slate-400 hover:text-slate-700"> <Link href="#">Travel</Link></span>
        <span className="inline-flex items-center rounded-md px-2 my-2 mx-1 py-1  text-slate-400 bg-slate-700 hover:bg-slate-400 hover:text-slate-700"> <Link href="#">Thoughts</Link></span>
        <span className="inline-flex items-center rounded-md px-2 my-2 mx-1 py-1  text-slate-400 bg-slate-700 hover:bg-slate-400 hover:text-slate-700"> <Link href="#">Spiritual</Link></span>
        <span className="inline-flex items-center rounded-md px-2 my-2 mx-1 py-1  text-slate-400 bg-slate-700 hover:bg-slate-400 hover:text-slate-700"> <Link href="#">Spiritual</Link></span>
      </div>
    </div>
  </main>
     
</>
  )
}


