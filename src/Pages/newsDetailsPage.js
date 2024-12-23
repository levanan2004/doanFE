import { useNavigate, useParams } from "react-router-dom";
import NewsDetailsAPI from "../services/newsDetailsAPI";

const NewsDetailsPage = () => {
    const { id } = useParams(); // Lấy ID từ URL
    const { newsDetails, loading } = NewsDetailsAPI(id);
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    // Kiểm tra trạng thái loading
    if (loading) {
        return <div className="text-center">Đang tải dữ liệu...</div>;
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Chi Tiết Tin Tức</h1>

            {newsDetails.map((item) => (
                <div className="card mb-4" key={item.DetailID}>
                    <img src={item.ImageURL} className="card-img-top" alt={item.SubTitle} />
                    <div className="card-body">
                        <h2 className="card-title">{item.SubTitle}</h2>
                        <p className="text-muted">
                            <small>
                                <i>Đăng vào: {new Date().toLocaleDateString()} bởi Tác giả</i>
                            </small>
                        </p>
                        <p className="card-text" dangerouslySetInnerHTML={{ __html: item.Content }} />
                    </div>
                </div>
            ))}

            <div className="text-center">
                <button onClick={goBack} className="btn btn-secondary">Quay về</button>
            </div>
        </div>
    );
}

export default NewsDetailsPage;
