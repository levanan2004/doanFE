import ListCard from "../Components/Shop/listCard";
import ItemsAPI from "../services/itemAPI";
import { useContext, useEffect } from 'react';
import { DataContext } from "../Provider/dataProvider";

const HomePage = () => {
    const { items, loading } = ItemsAPI(); // Lấy dữ liệu từ ItemsAPI
    const { data } = useContext(DataContext);
    useEffect(() => {
        console.log(data)
    }, [])
    return (
        <>
            <h1>Đây là trang chủ</h1>
            <ListCard items={items} loading={loading} />

        </>
    )
}
export default HomePage;