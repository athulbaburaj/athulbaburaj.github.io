// src/pages/BlogPage.js
import { useState, useEffect } from 'react';
import { FaExternalLinkAlt, FaCalendarAlt } from 'react-icons/fa';
import Seo from '../components/Seo';

const RSS_URL = 'https://medium.com/feed/@athulbaburajp23';
const RSS2JSON_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`;
const ALLORIGINS_URL = `https://api.allorigins.win/get?url=${encodeURIComponent(RSS_URL)}`;
const MAX_RETRIES = 2;
const TIMEOUT_MS = 8000;

// Safe HTML stripper — regex only, no innerHTML, no XSS risk
const stripHtml = (html) => html.replace(/<[^>]*>/g, '').replace(/&[a-z]+;/gi, ' ').trim();

const fetchWithTimeout = (url, ms) => {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), ms);
    return fetch(url, { signal: controller.signal }).finally(() => clearTimeout(timer));
};

const parseRSSItems = (xmlText) => {
    const xml = new DOMParser().parseFromString(xmlText, 'text/xml');
    return Array.from(xml.querySelectorAll('item')).map(item => {
        const getTag = (tag) => item.getElementsByTagName(tag)[0]?.textContent ?? '';
        const descHtml = getTag('description');
        const thumbMatch = descHtml.match(/<img[^>]+src="([^"]+)"/);
        return {
            guid:        getTag('guid') || getTag('link'),
            title:       getTag('title'),
            link:        getTag('link'),
            pubDate:     getTag('pubDate'),
            description: descHtml,
            thumbnail:   thumbMatch ? thumbMatch[1] : null,
        };
    });
};

// Try rss2json first, fall back to allorigins + XML parse
const fetchPosts = async () => {
    try {
        const res = await fetchWithTimeout(RSS2JSON_URL, TIMEOUT_MS);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (data.status !== 'ok' || !data.items) throw new Error(data.message || 'Feed error');
        return data.items;
    } catch {
        const res = await fetchWithTimeout(ALLORIGINS_URL, TIMEOUT_MS);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (!data.contents) throw new Error('Empty feed response');
        return parseRSSItems(data.contents);
    }
};

const BlogPage = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let cancelled = false;

        const load = async (attempt = 0) => {
            try {
                const items = await fetchPosts();
                if (!cancelled) {
                    setPosts(items);
                    setLoading(false);
                }
            } catch (err) {
                if (cancelled) return;
                if (attempt < MAX_RETRIES) {
                    load(attempt + 1);
                } else {
                    console.error('Blog fetch failed:', err);
                    setError(err.name === 'AbortError'
                        ? 'Request timed out. Check your connection.'
                        : 'Unable to load articles. Try refreshing.');
                    setLoading(false);
                }
            }
        };

        load();
        return () => { cancelled = true; };
    }, []);

    return (
        <div>
            <Seo
                title="Writing"
                description="Articles and technical writing from Athul Baburaj on cloud platforms, distributed systems, and solutions engineering practice."
                path="/blog"
            />
            <div className="w-full flow">

                <div className="mb-6 pb-6 border-b border-hairline">
                    <p className="font-mono t-label tracking-[0.3em] text-muted uppercase mb-2">
                        Writing // Articles
                    </p>
                    <h1 className="t-h1 font-hero text-primary leading-[0.85]">
                        WRITING.
                    </h1>
                </div>

                {loading ? (
                    <div className="flex items-center gap-3 text-muted t-body font-mono">
                        Fetching articles...
                    </div>
                ) : error ? (
                    <div className="border-t border-hairline pt-6 max-w-md">
                        <p className="text-secondary t-body">{error}</p>
                        <a
                            href="https://medium.com/@athulbaburajp23"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center mt-4 t-small font-bold text-primary underline decoration-faint underline-offset-4 hover:text-secondary transition-colors uppercase tracking-widest"
                        >
                            Read on Medium <FaExternalLinkAlt className="ml-2" size={10} />
                        </a>
                    </div>
                ) : posts.length === 0 ? (
                    <div className="text-muted t-h3 font-normal">No articles found.</div>
                ) : (
                    <div className="flex flex-col">
                        {posts.map((post, index) => (
                            <article
                                key={post.guid || index}
                                className="kv py-5 border-b border-hairline"
                                style={{ '--label': '7.5rem' }}
                            >
                                <div className="flex items-center gap-2 md:flex-col md:items-start t-small font-bold text-muted tracking-widest uppercase">
                                    <FaCalendarAlt />
                                    {new Date(post.pubDate).toLocaleDateString()}
                                </div>

                                <div>
                                    <h2 className="t-h3 font-bold text-primary mb-2 leading-snug">
                                        <a href={post.link} target="_blank" rel="noopener noreferrer">
                                            {post.title}
                                        </a>
                                    </h2>

                                    <p className="text-secondary t-body leading-relaxed mb-3 measure">
                                        {stripHtml(post.description).substring(0, 150)}...
                                    </p>

                                    <a
                                        href={post.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center t-small font-bold text-secondary hover:text-primary transition-colors uppercase tracking-widest"
                                    >
                                        READ ARTICLE <FaExternalLinkAlt className="ml-2" size={10} />
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogPage;
