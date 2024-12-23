import { Routes, Route } from 'react-router-dom';
import HomePage from '../../Pages/homePage'
import ShopPage from '../../Pages/shopPage';
import NewsPage from '../../Pages/newsPage';
import NewsDetailsPage from '../../Pages/newsDetailsPage';
import Contact from '../../Pages/contactPage';
import RegisterPage from '../../Pages/registerPage';
import LoginPage from '../../Pages/loginPage';
import ProfilePage from '../../Pages/profilePage';

import AdminHomePage from '../../AdminPage/adminHomePage';
import { DataContext } from '../../Provider/dataProvider';
import '../../index.css'
import { useContext } from 'react';

const MainContent = () => {
    const { data } = useContext(DataContext);
    return (
        <>
            <div style={{ padding: '5%' }}>
                <div className={`container`}>
                    <div className="row">
                        {/* Sidebar để qc */}
                        {data?.role === 0 ? <div className="col-md-1">
                            <aside>
                                <h5>Quảng cáo</h5>
                                <p>Đây là khu vực đặt quảng cáo.</p>
                            </aside>
                        </div> : null}
                        {/* /Sidebar để qc */}
                        {/* Main content */}
                        <div className={`col-md-${data?.role === 0 ? "10" : "12"}`}>
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/shop" element={<ShopPage />} />
                                <Route path="/shop/:id" element={<ShopPage />} />
                                <Route path="/news" element={<NewsPage />} />
                                <Route path="/news/:id" element={<NewsDetailsPage />} />
                                <Route path="/contact" element={<Contact />} />
                                <Route path="/register" element={<RegisterPage />} />
                                <Route path="/login" element={<LoginPage />} />
                                <Route path="/profile" element={<ProfilePage />} />
                                {data?.role === 1 && (
                                    <Route path="/adminPage" element={<AdminHomePage />} />
                                )}
                            </Routes>
                        </div>

                        {/* /Main content */}
                        {/* Sidebar để qc */}
                        {data?.role === 0 ? <div className="col-md-1">
                            <aside>
                                <h5>Quảng cáo</h5>
                                <p>Đây là khu vực đặt quảng cáo.</p>
                            </aside>
                        </div> : null}
                        {/* /Sidebar để qc */}
                    </div>
                </div>

            </div>
        </>
    )
}
export default MainContent;