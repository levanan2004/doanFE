
import { Link } from 'react-router-dom';
import MainContent from './mainContent';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../../Provider/dataProvider';
import '../../index.css'

const Header = () => {
    const location = useLocation();  // Hook để lấy URL hiện tại
    const { data } = useContext(DataContext);
    return (
        <>
            {/* Header */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand mmo" to="/">MMO</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                                <Link className="nav-link" to="/">TRANG CHỦ</Link>
                            </li>
                            <li className={`nav-item ${location.pathname.startsWith('/shop') ? 'active' : ''}`}>
                                <Link className="nav-link" to="/shop">CỬA HÀNG</Link>
                            </li>
                            <li className={`nav-item ${location.pathname.startsWith('/news') ? 'active' : ''}`}>
                                <Link className="nav-link" to="/news">TIN TỨC</Link>
                            </li>
                            <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
                                <Link className="nav-link" to="/contact">LIÊN HỆ</Link>
                            </li>

                            {data?.role === 1 && (
                                <li className={`nav-item ${location.pathname === '/adminPage' ? 'active' : ''}`}>
                                    <Link className="nav-link" to="/adminPage">ADMIN</Link>
                                </li>
                            )}
                            <div className="dropdown">
                                <button className="btn dropdown-toggle" type="button" id="avatarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src="https://files.fullstack.edu.vn/f8-prod/user_photos/287638/63d64505e7a08.jpg" alt="Avatar" className="rounded-circle" width="25" height="25" />
                                </button>
                                <div className="dropdown-menu" aria-labelledby="avatarDropdown">
                                    <Link className="nav-link text-dark" to="/register">đăng ký</Link>
                                    <Link className="nav-link text-dark" to="/login">đăng nhập</Link>
                                    <div className="dropdown-divider"></div>
                                    <span onClick={() => {
                                        localStorage.clear("token");
                                        window.location.href = '/login';
                                    }}>Đăng xuất</span>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* /Header */}
            {/* Main Content */}
            <MainContent />
            {/* /Main Content */}
        </>
    )
}
export default Header;