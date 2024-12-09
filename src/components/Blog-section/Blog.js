import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import BlogData from './BlogData';

const Blog = () => {
  return (
    <section className="blog-section">
      <div className="back-home-container">
        <Link to="/" className="back-home-button">Back to Home</Link>
      </div>

      <div className="container">
        <h2 className="section-title">Our Blog</h2>
        <div className="blog-cards">
          {BlogData.map((blog, index) => (
            <div className="blog-card" key={index}>
              <img src={blog.image} alt={blog.title} className="blog-image" />
              <div className="blog-content">
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-description">{blog.description}</p>
                <a href={blog.link} className="read-more" target="_blank" rel="noopener noreferrer">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
