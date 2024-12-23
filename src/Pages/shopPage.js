import ListCard from "../Components/Shop/listCard";
import ItemWithIdAPI from "../services/itemWithIdAPI";
import ItemsAPI from "../services/itemAPI";
import categoryItemAPI from "../services/categoryItemAPI";
import { useNavigate, useParams } from "react-router-dom";

const ShopPage = () => {
    const { id } = useParams(); // Lấy ID từ URL
    const navigate = useNavigate();
    const { items, loadingItems } = ItemsAPI(); // Lấy dữ liệu từ ItemsAPI
    const { itemsWithId, loadingItemsWithId } = ItemWithIdAPI(id); // Lấy dữ liệu từ ItemWithId
    const { categoryItem, loadingCategory } = categoryItemAPI();

    return (
        <>
            <h1 style={{ paddingBottom: '20px' }}>Đây là trang Cửa hàng</h1>

            {/* Hiển thị nút chọn loại items */}
            {loadingCategory ? (
                <div>Đang tải danh mục...</div>
            ) : (
                <div className="btn-group" role="group" aria-label="Basic example">
                    {categoryItem.map((category) => (
                        <button
                            key={category.CategoryID}
                            type="button"
                            className="btn btn-primary"
                            onClick={() => navigate(`/shop/${category.CategoryID}`)}
                        >
                            {category.Name}
                        </button>
                    ))}
                </div>
            )}

            {/* Hiển thị danh sách sản phẩm */}
            {id ? (
                loadingItemsWithId ? (
                    <div>Đang tải sản phẩm...</div>
                ) : (
                    <ListCard items={itemsWithId} loading={loadingItemsWithId} />
                )
            ) : (
                <ListCard items={items} loading={loadingItems} />
            )}

        </>
    );
};

export default ShopPage;
