import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/portfolioData';
import { BlogPost } from '../types';
import { BookOpen, Heart, Clock, ArrowUpRight, CheckCircle } from 'lucide-react';

export const BlogSection: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>(BLOG_POSTS);
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);

  const toggleLike = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const wasLiked = !!likedPosts[id];
    setLikedPosts((prev) => ({ ...prev, [id]: !wasLiked }));
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id
          ? { ...post, likes: wasLiked ? post.likes - 1 : post.likes + 1 }
          : post
      )
    );
  };

  return (
    <section id="blog" className="py-20 lg:py-28 bg-[#fafafa] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-200/80 text-neutral-800 text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5 text-neutral-600" />
            <span>Articles & Notes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Thoughts on Design & Engineering
          </h2>
          <p className="text-base text-neutral-600 leading-relaxed">
            Practical insights on bridging design systems, browser rendering mechanics, and scalable CSS.
          </p>
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => {
            const isLiked = !!likedPosts[post.id];
            return (
              <article
                key={post.id}
                onClick={() => setSelectedArticle(post)}
                className="group bg-white rounded-2xl p-6 border border-neutral-200/90 hover:border-neutral-400 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div className="space-y-4">
                  {/* Category & Date */}
                  <div className="flex items-center justify-between text-xs text-neutral-500 font-mono">
                    <span className="px-2 py-0.5 rounded bg-neutral-100 text-neutral-700 font-medium">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-neutral-900 group-hover:text-neutral-950 transition-colors leading-snug">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Footer Metadata */}
                <div className="pt-6 mt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                  <div className="flex items-center gap-1.5 text-neutral-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={(e) => toggleLike(e, post.id)}
                      className={`flex items-center gap-1 text-xs transition-colors ${
                        isLiked ? 'text-rose-500 font-bold' : 'text-neutral-500 hover:text-rose-500'
                      }`}
                    >
                      <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
                      <span>{post.likes}</span>
                    </button>

                    <span className="text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Article Reader Modal */}
        {selectedArticle && (
          <div
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedArticle(null)}
          >
            <div
              className="bg-white max-w-2xl w-full rounded-2xl p-6 sm:p-8 shadow-2xl border border-neutral-300 relative space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-neutral-100 text-neutral-700">
                  {selectedArticle.category}
                </span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="text-neutral-400 hover:text-neutral-900 text-sm font-semibold"
                >
                  ✕ Close
                </button>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 leading-tight">
                {selectedArticle.title}
              </h3>

              <div className="flex items-center gap-3 text-xs text-neutral-500 font-mono">
                <span>{selectedArticle.date}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
              </div>

              <div className="prose prose-sm text-neutral-700 space-y-4 leading-relaxed text-sm">
                <p>{selectedArticle.excerpt}</p>
                <p>
                  When building user interfaces, visual design and technical execution must not be isolated steps. By having designers understand CSS box models and having engineers appreciate typographic pacing, digital interfaces achieve an effortless, human warmth.
                </p>
                <p>
                  Always prioritize readability, strict keyboard accessibility, and 60fps compositor transitions. Your users won't notice the design system, but they will intuitively feel the craft.
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-200 flex justify-end">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-4 py-2 rounded-lg bg-neutral-900 text-white text-xs font-semibold"
                >
                  Done Reading
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
