'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import './dashboard.css';

export default function SellerBlogDashboard() {
  const router = useRouter();

  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('sellerBlogs');
    if (saved) setBlogs(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('sellerBlogs', JSON.stringify(blogs));
  }, [blogs]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBlog = {
      id: Date.now(),
      title,
      content,
      timestamp: new Date().toLocaleString(),
    };

    setBlogs([...blogs, newBlog]);
    alert('Blog created!');

    setTitle('');
    setContent('');
  };

  const handleLogout = () => {
    localStorage.removeItem('Email');
    alert('You have been logged out.');
    router.push('/');
  };

  return (
    <div className="dashboard-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 className="dashboard-title">Blog Dashboard</h1>
        <button
          onClick={handleLogout}
          style={{
            backgroundColor: '#333',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginLeft: '1rem',
          }}
        >
          Logout
        </button>
      </div>

      <form onSubmit={handleSubmit} className="blog-form">
        <h2>Create Blog</h2>
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Blog Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={4}
        />
        <button type="submit">Post Blog</button>
      </form>

      <div className="blog-list">
        <h2>All Blogs</h2>
        {blogs.length === 0 ? (
          <p>No blogs found. Create one!</p>
        ) : (
          <ul>
            {[...blogs].reverse().map((blog, index) => (
              <li key={blog.id}>
                <h3>Blog {blogs.length - index}: {blog.title}</h3>
                <p>{blog.content}</p>
                <p style={{ fontSize: '0.9rem', color: '#777' }}>
                  Posted on: {blog.timestamp}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}