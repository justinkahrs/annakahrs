import { getBlogPosts } from "@/utils/blog";
import Link from "next/link";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="min-h-screen bg-(--background)">
      <Nav />
      <div className="relative mx-auto w-full max-w-[1500px] px-4 sm:px-6 pt-[60px]">
        <main className="px-0 sm:px-6 pt-24 pb-24 sm:pt-44 sm:pb-28">
          {/* Header Section */}
          <section className="mb-20">
            <div className="max-w-4xl pt-4">
            <div className={`${dmSans.className} flex items-center gap-2 text-xs sm:text-sm font-medium uppercase tracking-[0.12em] text-zinc-600/60 pointer-events-none select-none mb-6`}>
              <div className="w-2 h-2 bg-(--highlight)" />
              Thinking & Practice
            </div>
            
            <h1 className={`${playfair.className} text-6xl leading-[0.95] text-zinc-900 sm:text-7xl lg:text-8xl mb-8`}>
              Work in Practice
            </h1>
              <p className={`${dmSans.className} text-lg max-w-2xl text-zinc-600 leading-relaxed`}>
                A collection of notes, process write-ups, and ideas on UX design, prototyping, and the future of creative technology.
              </p>
            </div>
            <div className="mt-12 w-full border-t border-zinc-900/10 border-dotted" />
          </section>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {posts.map((post) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="group flex flex-col"
              >
                <div className="mb-6 aspect-video overflow-hidden bg-zinc-100 relative rounded-lg">
                  {/* Image Placeholder or Actual Image */}
                  {post.image ? (
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-zinc-400 font-medium">
                      <span className={`${dmSans.className} text-xs uppercase tracking-widest`}>{post.category || "General"}</span>
                    </div>
                  )}
                </div>
                
                <div className="flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`${dmSans.className} text-[10px] font-semibold uppercase tracking-widest text-(--highlight)`}>
                      {post.category || "Process"}
                    </span>
                    <span className="h-px w-8 bg-zinc-900/10" />
                    <time className={`${dmSans.className} text-[10px] uppercase tracking-widest text-zinc-400`}>
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </time>
                  </div>
                  
                  <h2 className={`${playfair.className} text-3xl mb-4 group-hover:text-(--highlight) transition-colors duration-200`}>
                    {post.title}
                  </h2>
                  
                  <p className={`${dmSans.className} text-zinc-600 text-sm leading-relaxed line-clamp-3 mb-6`}>
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest group-hover:gap-4 transition-all duration-300">
                    Read Case Study
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {posts.length === 0 && (
            <div className="py-24 text-center">
              <p className={`${dmSans.className} text-zinc-400 italic`}>Getting things ready. Check back soon.</p>
            </div>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
}
