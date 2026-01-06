// src/pages/BlogPage.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMedium, FaExternalLinkAlt, FaCalendarAlt } from 'react-icons/fa';

const BlogPage = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const RSS_URL = 'https://medium.com/@athulbaburajp23/feed';
        const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`;

        fetch(API_URL)
            .then(res => res.json())
            .then(data => {
                if (data.status === 'ok') {
                    setPosts(data.items);
                    setLoading(false);
                } else {
                    throw new Error(data.message || 'Failed to fetch blog posts');
                }
            })
            .catch(err => {
                console.error("Error fetching blog posts:", err);
                setError("Unable to load latest articles.");
                setLoading(false);
            });
    }, []);

    const stripHtml = (html) => {
        const tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    };

    return (
        <div className="min-h-screen pt-20 pb-20">
            <div className="container mx-auto px-6 max-w-screen-xl">

                <h1 className="font-hero text-6xl md:text-8xl text-white tracking-tighter leading-[0.9] mb-20">
                    WRITING.
                </h1>

                {loading ? (
                    <div className="text-gray-500 text-xl font-light">Loading content...</div>
                ) : error ? (
                    <div className="text-gray-500 text-xl font-light">{error}</div>
                ) : posts.length === 0 ? (
                    <div className="text-gray-500 text-xl font-light">No articles found.</div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {posts.map((post, index) => (
                            <motion.article
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group flex flex-col h-full"
                            >
                                <a href={post.link} target="_blank" rel="noopener noreferrer" className="block aspect-[16/10] bg-subtle-gray mb-6 overflow-hidden relative">
                                    {post.thumbnail ? (
                                        <img
                                            src={post.thumbnail}
                                            alt={post.title}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-subtle-gray flex items-center justify-center">
                                            <FaMedium size={48} className="text-gray-700" />
                                        </div>
                                    )}
                                </a>

                                <div className="flex-grow flex flex-col">
                                    <div className="flex items-center text-xs font-bold text-gray-500 tracking-widest uppercase mb-3">
                                        <FaCalendarAlt className="mr-2" />
                                        {new Date(post.pubDate).toLocaleDateString()}
                                    </div>

                                    <h2 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-electric-violet transition-colors">
                                        <a href={post.link} target="_blank" rel="noopener noreferrer">
                                            {post.title}
                                        </a>
                                    </h2>

                                    <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                                        {stripHtml(post.description).substring(0, 150)}...
                                    </p>

                                    <a
                                        href={post.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-sm font-bold text-white hover:text-electric-violet transition-colors uppercase tracking-widest"
                                    >
                                        READ ARTICLE <FaExternalLinkAlt className="ml-2" size={10} />
                                    </a>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogPage;
