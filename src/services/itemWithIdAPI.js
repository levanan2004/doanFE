import { useState, useEffect } from 'react';
import axios from 'axios';


function ItemWithIdAPI(id) {
    const [itemsWithId, setItemsWithId] = useState([]);
    const [loadingItems, setLoading] = useState(true);

    // Lấy danh sách nhân viên từ API
    useEffect(() => {
        if (id) {
            axios
                .get(`http://localhost:3000/shop/${id}`)
                .then((response) => {
                    if (response.data.error) {
                        alert(`Lỗi: ${response.data.error}`);
                    } else {
                        setItemsWithId(response.data.result);
                    }
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Có lỗi đã xãy ra khi tìm api của Item theo Id Loại:', error);
                    alert('Có lỗi khi lấy chi tiết Item theo Id Loại.');
                    setLoading(false);
                });
        }
    }, [id]);
    return { itemsWithId, loadingItems };
}

export default ItemWithIdAPI;
