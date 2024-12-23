import React from "react";
import { Link } from "react-router-dom";

const AdminHomePage = () => {
    return (
        <div className="d-flex flex-wrap">
            {/* Navbar */}
            <div
                className="d-flex flex-column flex-shrink-0 p-3 bg-dark text-white"
                style={{
                    width: "250px",
                    minHeight: "100vh",
                }}
            >
                <h5 className="text-center">Trang Quản Lý</h5>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <Link to="/adminPage" className="nav-link text-white">
                            <i className="bi bi-house-door-fill text-primary me-2"></i>
                            Trang Chủ
                        </Link>
                    </li>
                    <li>
                        <Link to="/usersMg" className="nav-link text-white">
                            <i className="bi bi-people-fill text-success me-2"></i>
                            Quản Lý Người Dùng
                        </Link>
                    </li>
                    <li>
                        <Link to="/blogMg" className="nav-link text-white">
                            <i className="bi bi-speedometer2 text-warning me-2"></i>
                            Quản Lý Tin Tức
                        </Link>
                    </li>
                    <li>
                        <Link to="/shopMg" className="nav-link text-white">
                            <i className="bi bi-gear-fill text-danger me-2"></i>
                            Quản Lý Cửa Hàng
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-grow-1 p-4">
                <h2>Welcome to the Admin Panel</h2>
                <p>Here you can manage your application.</p>
            </div>
        </div>
    );
};

export default AdminHomePage;
