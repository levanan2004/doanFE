import { useState, useEffect } from 'react';
import apiGetTokenClient from '../middleWare/getTokenClient';


function NewsDetailsAPI(id) {
    const [newsDetails, setNewsDetails] = useState([]);
    const [loading, setLoading] = useState(true);

    // Lấy danh sách nhân viên từ API
    useEffect(() => {
        if (id) {

            apiGetTokenClient
                .get(`http://localhost:3000/news/${id}`)
                .then((response) => {
                    if (response.data.error) {
                        alert(`Lỗi: ${response.data.error}`);
                    } else {
                        setNewsDetails(response.data.result);
                    }
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Có lỗi đã xãy ra khi tìm api News Details:', error);
                    alert('Có lỗi khi lấy chi tiết tin tức.');
                    setLoading(false);
                });
        }
    }, [id]);
    return { newsDetails, loading };
}

export default NewsDetailsAPI;
