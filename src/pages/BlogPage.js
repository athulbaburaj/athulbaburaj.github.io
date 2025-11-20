// src/pages/BlogPage.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMedium, FaExternalLinkAlt, FaCalendarAlt, FaUser } from 'react-icons/fa';

const BlogPage = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const RSS_URL = 'https://medium.com/@athulbaburajp23/feed';
        const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`;

        console.log('Fetching blogs from:', API_URL);

        fetch(API_URL)
            .then(res => res.json())
            .then(data => {
                console.log('API Response:', data);
                console.log('Status:', data.status);
                console.log('Items:', data.items);

                if (data.status === 'ok') {
                    setPosts(data.items);
                    setLoading(false);
                } else {
                    console.error('API returned non-ok status:', data);
                    throw new Error(data.message || 'Failed to fetch blog posts');
                }
            })
            .catch(err => {
                console.error("Error fetching blog posts:", err);
                setError("SIGNAL_LOST // UNABLE_TO_ESTABLISH_UPLINK");
                setLoading(false);
            });
    }, []);

    // Helper to strip HTML tags for preview text
    const stripHtml = (html) => {
        const tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    };

    return (
        <div className="min-h-screen pt-24 pb-20 px-6 container mx-auto text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

            <div className="relative z-10">
                {/* Header */}
                <div className="flex flex-col items-center mb-16">
                    <div className="inline-block px-3 py-1 border border-ops-green/30 bg-ops-green/5 text-ops-green font-mono text-sm tracking-widest mb-4">
                        DATA_LOGS // EXTERNAL_FEED
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 tracking-tight">
                        TRANSMISSIONS
                    </h1>
                    <div className="h-1 w-20 bg-gradient-to-r from-transparent via-ops-green to-transparent opacity-50"></div>
                </div>

                {/* Content */}
                {loading ? (
                    <div className="flex flex-col items-center justify-center h-64 space-y-4">
                        <div className="w-12 h-12 border-4 border-ops-green/30 border-t-ops-green rounded-full animate-spin"></div>
                        <p className="font-mono text-ops-green animate-pulse">ESTABLISHING_UPLINK...</p>
                    </div>
                ) : error ? (
                    <div className="text-center py-20 border border-red-500/30 bg-red-500/5 rounded-lg max-w-2xl mx-auto">
                        <p className="text-red-400 font-mono text-lg mb-2">ERROR: {error}</p>
                        <p className="text-gray-400 text-sm">Check connection or feed URL configuration.</p>
                    </div>
                ) : posts.length === 0 ? (
                    <div className="text-center py-20 border border-ops-green/30 bg-ops-green/5 rounded-lg max-w-2xl mx-auto">
                        <p className="text-ops-green font-mono text-lg mb-2">NO_TRANSMISSIONS_FOUND</p>
                        <p className="text-gray-400 text-sm">No blog posts available at this feed.</p>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, index) => (
                            <motion.article
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative bg-ops-black/50 border border-ops-green/20 hover:border-ops-green/60 transition-all duration-300 flex flex-col h-full overflow-hidden"
                            >
                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 bg-ops-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                                {/* Thumbnail */}
                                <div className="h-48 overflow-hidden relative border-b border-ops-green/20">
                                    {post.thumbnail ? (
                                        <img
                                            src={post.thumbnail}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                                            <FaMedium size={48} className="text-gray-700" />
                                        </div>
                                    )}
                                    <div className="absolute top-0 right-0 bg-ops-black/80 backdrop-blur-sm px-3 py-1 border-l border-b border-ops-green/30">
                                        <FaMedium className="text-white" />
                                    </div>
                                </div>

                                {/* Content Body */}
                                <div className="p-6 flex-grow flex flex-col">
                                    <div className="flex items-center space-x-4 text-xs font-mono text-ops-green/60 mb-3">
                                        <span className="flex items-center">
                                            <FaCalendarAlt className="mr-2" />
                                            {new Date(post.pubDate).toLocaleDateString()}
                                        </span>
                                        <span className="flex items-center">
                                            <FaUser className="mr-2" />
                                            {post.author}
                                        </span>
                                    </div>

                                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-ops-green transition-colors line-clamp-2">
                                        {post.title}
                                    </h2>

                                    <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-grow">
                                        {stripHtml(post.description).substring(0, 150)}...
                                    </p>

                                    <a
                                        href={post.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center w-full py-2 border border-ops-green/30 text-ops-green font-mono text-sm hover:bg-ops-green hover:text-ops-black transition-all duration-300 group-hover:shadow-[0_0_10px_rgba(0,255,65,0.3)]"
                                    >
                                        READ_PROTOCOL <FaExternalLinkAlt className="ml-2" size={12} />
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
