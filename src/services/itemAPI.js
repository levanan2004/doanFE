import { useState, useEffect } from 'react';
import apiGetTokenClient from '../middleWare/getTokenClient';


function ItemsAPI() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    // Lấy danh sách nhân viên từ API
    useEffect(() => {
        apiGetTokenClient
            .get('http://localhost:3000/')
            .then((response) => {
                if (response.data.error) {
                    alert(`Lỗi: ${response.data.error}`);
                } else {
                    setItems(response.data.result);
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching employees:', error);
                alert('Có lỗi khi lấy danh sách nhân viên.');
                setLoading(false);
            });
    }, []);
    return { items, loading };
}

export default ItemsAPI;
