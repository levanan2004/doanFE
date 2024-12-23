import { useState, useEffect } from 'react';
import apiGetTokenClient from '../middleWare/getTokenClient';

function NewsAPI() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    // Lấy danh sách nhân viên từ API
    useEffect(() => {
        apiGetTokenClient
            .get('/news')
            .then((response) => {
                if (response.data.error) {
                    alert(`Lỗi: ${response.data.error}`);
                } else {
                    setNews(response.data.result);
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error('Có lỗi đã xãy ra khi tìm api News:', error);
                alert('Có lỗi khi lấy danh sách tin tức.');
                setLoading(false);
            });
    }, []);
    return { news, loading };
}

export default NewsAPI;
