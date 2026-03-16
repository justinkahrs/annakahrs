import { getBlogPost, getBlogPosts } from "@/utils/blog";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: '--font-playfair',
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
    <div className={`min-h-screen bg-(--background) ${playfair.variable}`}>
      <Nav />
      <main className="pt-[100px] mb-24">
        {/* Article Header */}
        <article className="mx-auto max-w-4xl px-6">
          <header className="mb-16">
            <nav
              aria-label="Breadcrumb"
              className={`${dmSans.className} flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-zinc-400 mb-12 sm:text-[11px]`}
            >
              <Link
                href="/"
                className="inline-flex items-center transition hover:text-zinc-900"
                aria-label="Home"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  className="h-3.5 w-3.5"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 10.5 8.25-6.75 8.25 6.75M5.25 9.75V20.25h13.5V9.75M9.75 20.25v-6h4.5v6" />
                </svg>
              </Link>
              <span className="text-zinc-300">/</span>
              <Link 
                href="/blog" 
                className="transition hover:text-zinc-900"
              >
                Blog
              </Link>
              <span className="text-zinc-300">/</span>
              <span aria-current="page" className="text-zinc-900 font-bold line-clamp-1">
                {metadata.title}
              </span>
            </nav>
            
            <div className={`${dmSans.className} flex items-center gap-2 text-xs sm:text-sm font-medium uppercase tracking-[0.12em] text-zinc-600/60 pointer-events-none select-none mb-6`}>
              <div className="w-2 h-2 bg-(--highlight)" />
              {metadata.category || 'Thinking & Practice'}
            </div>
            
            <h1 className={`${playfair.className} text-6xl leading-[0.95] text-zinc-900 sm:text-7xl lg:text-8xl mb-8`}>
              {metadata.title}
            </h1>
            
            <div className="flex items-center gap-4 text-zinc-400 mt-6 pt-6 border-t border-dotted border-zinc-900/10">
               <time className={`${dmSans.className} text-[10px] uppercase tracking-widest`}>
                {new Date(metadata.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' })}
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
                h1: (props) => <h1 className={`${dmSans.className} text-4xl font-bold mb-8 mt-16 leading-tight text-zinc-900`} {...props} />,
                h2: (props) => {
                  const isTLDR = typeof props.children === 'string' && props.children.toLowerCase().includes('tl;dr');
                  return (
                    <h2 className={`${isTLDR ? playfair.className : 'font-sans'} ${isTLDR ? 'text-4xl font-semibold not-italic' : 'text-3xl font-bold'} mb-6 mt-12 leading-tight text-zinc-900`} {...props}>
                      {props.children}
                    </h2>
                  );
                },
                h3: (props) => <h3 className={`${dmSans.className} text-2xl font-bold mb-4 mt-10 leading-tight text-zinc-900`} {...props} />,
                p: (props) => <p className="mb-8 text-lg leading-[1.7]" {...props} />,
                ul: (props) => <ul className="mb-6 list-none space-y-2" {...props} />,
                ol: (props) => <ol className="mb-6 list-none space-y-2" {...props} />,
                li: (props) => (
                  <li className="flex gap-3">
                    <span className="h-2 w-2 min-w-2 mt-2.5 bg-(--highlight)" />
                    <span>{props.children}</span>
                  </li>
                ),
                strong: (props) => <strong className="font-bold text-zinc-900" {...props} />,
                em: (props) => <em className="italic" {...props} />,
                hr: () => <hr className="my-16 border-t-[3px] border-dotted border-zinc-900/10" />,
                blockquote: (props) => (
                    <blockquote className="my-12 py-8 px-10 border-l-[6px] border-(--highlight) bg-zinc-900/5 rounded-r-2xl">
                        <div className={`${playfair.className} text-2xl text-zinc-800 leading-relaxed not-italic
                            [&_p]:font-serif [&_p]:text-2xl [&_p]:text-zinc-800 [&_p]:mb-0 [&_p]:not-italic
                            [&_a]:underline [&_a]:decoration-dotted [&_a]:decoration-zinc-900/30 [&_a]:hover:decoration-zinc-900 [&_a]:underline-offset-4`}>
                            {props.children}
                        </div>
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
                  </span>
                ),
                a: (props) => (
                  <a 
                    className="underline decoration-dotted decoration-zinc-900/30 hover:decoration-zinc-900 underline-offset-4 transition-colors" 
                    {...props} 
                  />
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
