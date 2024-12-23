import CardItem from "./itemCard";

const ListCard = ({ items, loading }) => {
    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    {loading === true ? "Đang tải dữ liệu" : <CardItem items={items} />}
                </div>
            </div>

        </>
    )
}
export default ListCard;