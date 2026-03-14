import { getBlogPost, getBlogPosts } from "@/utils/blog";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const { metadata, content } = post;

  return (
    <div className="min-h-screen bg-(--background)">
      <Nav />
      <main className="pt-[100px] mb-24">
        {/* Article Header */}
        <article className="mx-auto max-w-4xl px-6">
          <header className="mb-16">
            <Link 
              href="/blog" 
              className={`${dmSans.className} group inline-flex items-center gap-2 mb-12 text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors duration-200`}
            >
              <svg className="w-3.5 h-3.5 transform group-hover:-translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Back to Thinking
            </Link>
            
            <div className={`${dmSans.className} flex items-center gap-2 text-xs sm:text-sm font-medium uppercase tracking-[0.12em] text-zinc-600/60 pointer-events-none select-none mb-6`}>
              <div className="w-2 h-2 bg-(--highlight)" />
              {metadata.category || 'Thinking & Practice'}
            </div>
            
            <h1 className={`${playfair.className} text-6xl leading-[0.95] text-zinc-900 sm:text-7xl lg:text-8xl mb-8`}>
              {metadata.title}
            </h1>
            
            <div className="flex items-center gap-4 text-zinc-400 mt-6 pt-6 border-t border-dotted border-zinc-900/10">
               <time className={`${dmSans.className} text-[10px] uppercase tracking-widest`}>
                {new Date(metadata.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </time>
              <span className="h-px w-6 bg-zinc-900/10" />
              <span className={`${dmSans.className} text-[10px] uppercase tracking-widest`}>
                By Anna Kahrs
              </span>
            </div>
          </header>
          
          {/* Post Content */}
          <div className={`prose prose-zinc max-w-none prose-lg ${dmSans.className} text-zinc-700 leading-relaxed`}>
            <MDXRemote 
              source={content} 
              components={{
                h1: (props) => <h1 className={`${playfair.className} text-5xl mb-8 mt-16 leading-none text-zinc-900`} {...props} />,
                h2: (props) => <h2 className={`${playfair.className} text-4xl mb-6 mt-12 leading-[1.1] text-zinc-900`} {...props} />,
                h3: (props) => <h3 className={`${playfair.className} text-3xl mb-4 mt-10 leading-[1.2] text-zinc-900`} {...props} />,
                p: (props) => <p className="mb-8 text-lg leading-[1.7]" {...props} />,
                ul: (props) => <ul className="mb-8 list-none space-y-4" {...props} />,
                li: (props) => (
                  <li className="flex gap-4">
                    <span className="h-2 w-2 min-w-2 mt-2.5 bg-(--highlight)" />
                    <span>{props.children}</span>
                  </li>
                ),
                strong: (props) => <strong className="font-bold text-zinc-900" {...props} />,
                em: (props) => <em className="italic" {...props} />,
                hr: () => <hr className="my-16 border-t-[3px] border-dotted border-zinc-900/10" />,
                blockquote: (props) => (
                    <blockquote className="my-16 py-8 px-10 border-l-[6px] border-(--highlight) bg-zinc-900/5 rounded-r-lg">
                        <p className={`${playfair.className} text-2xl italic text-zinc-800 mb-0`} {...props} />
                    </blockquote>
                ),
                pre: (props) => (
                    <pre className="my-12 p-8 bg-zinc-900 text-zinc-100 rounded-xl overflow-x-auto text-sm" {...props} />
                ),
                code: (props) => (
                    <code className="bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-sm" {...props} />
                ),
                img: (props) => (
                  <span className="flex flex-col items-center my-16">
                    <img className="rounded-2xl max-w-full h-auto" {...props} />
                    {props.alt && (
                      <span className={`${dmSans.className} mt-4 text-[10px] uppercase tracking-[0.15em] text-zinc-400 font-medium`}>
                        {props.alt}
                      </span>
                    )}
                  </span>
                )
              }}
            />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
