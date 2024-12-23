import React from 'react';
import '../../index.css';

const CardItem = ({ items }) => {
    return (
        <>
            {items.map((item, index) => (
                <div className="col-md-4 mb-4" key={item.ItemID}>
                    <div className="card" key={index}>
                        <img src={item.ImageURL || "images/tool_a.jpg"} className="card-img-top images" alt={item.Name} />
                        <div className="card-body">
                            <h5 className="card-title">{item.Name || "lỗi name"}</h5>
                            <p className="card-text">{item.Description || "lỗi Mô tả"}</p>
                            <a href="/" className="btn btn-primary">Xem Chi Tiết</a>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default CardItem;
