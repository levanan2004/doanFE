import ItemBlog from "./blogCard";

const ListBlog = ({ blogs, loading }) => {
    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    {loading === true ? "Đang tải dữ liệu" : <ItemBlog blogs={blogs} />}
                </div>
            </div>

        </>
    )
}
export default ListBlog;