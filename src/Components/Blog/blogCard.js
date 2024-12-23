import React from 'react';
import '../../index.css';
import formatDate from '../../utils/dateUtils';
import { useNavigate } from "react-router-dom";


const ItemBlog = ({ blogs }) => {
    const navigate = useNavigate();
    return (
        <>
            {blogs.map((blog, index) => (
                <div className="col-md-4 mb-4" key={blog.NewsID}>
                    <div className="card" key={index}>
                        <img src={blog.ImageURL || "images/blog_1.jpg"} className="card-img-top images" alt={blog.Title} />
                        <div className="card-body">
                            <h5 className="card-title" >{blog.Title ? (blog.Title.length > 35 ? `${blog.Title.substring(0, 35)}...` : blog.Title) : "lỗi Title"}</h5>
                            <p className="text-muted">
                                <small>
                                    <i>Đăng vào: {formatDate(blog.CreatedAt)}</i>
                                </small>
                            </p>
                            <p className="card-text">Views: {blog.Views !== null && blog.Views !== undefined ? blog.Views : "lỗi Views"} Likes: {blog.Likes !== null && blog.Likes !== undefined ? blog.Likes : "lỗi Likes"}</p>
                            <button
                                className="btn btn-primary"
                                onClick={() => navigate(`/news/${blog.NewsID}`)}
                            >
                                Xem Chi Tiết
                            </button>

                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default ItemBlog;
