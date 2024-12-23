import ListBlog from "../Components/Blog/listBlog";
import NewsAPI from "../services/newsAPI";

const NewsPage = () => {
    const { news, loading } = NewsAPI(); // Lấy dữ liệu từ ItemsAPI
    return (
        <>
            <h1>Đây là trang News</h1>
            <ListBlog blogs={news} loading={loading} />

        </>
    )
}
export default NewsPage;