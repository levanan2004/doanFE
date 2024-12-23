import { useState, useEffect } from 'react';
import apiGetTokenClient from '../middleWare/getTokenClient';


function CategoryItemAPI() {
    const [categoryItem, setCategoryItem] = useState([]);
    const [loadingCategory, setLoading] = useState(true);

    // Lấy danh sách nhân viên từ API
    useEffect(() => {
        apiGetTokenClient
            .get('http://localhost:3000/shop')
            .then((response) => {
                if (response.data.error) {
                    alert(`Lỗi: ${response.data.error}`);
                } else {
                    setCategoryItem(response.data.result);
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error('Có lỗi đã xãy ra khi tìm api Loại Item:', error);
                alert('Có lỗi khi lấy danh sách Loại Item.');
                setLoading(false);
            });
    }, []);
    return { categoryItem, loadingCategory };
}

export default CategoryItemAPI;
