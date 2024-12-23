import React from "react";
import styles from "../../Css/FilterSortBar.module.css";

const FilterSortBar = () => {
    return (
        <div className={`${styles.container} ${styles.marginTop}`}>
            <div className={styles.row}>
                {/* Bộ lọc */}
                <div className={styles.column}>
                    <label htmlFor="categoryFilter" className={styles.label}>
                        Lọc theo loại:
                    </label>
                    <select id="categoryFilter" className={styles.select}>
                        <option value="all">Tất cả</option>
                        <option value="electronics">Điện tử</option>
                        <option value="fashion">Thời trang</option>
                        <option value="home">Nội thất</option>
                    </select>
                </div>

                {/* Sắp xếp */}
                <div className={styles.column}>
                    <label htmlFor="sortFilter" className={styles.label}>
                        Sắp xếp:
                    </label>
                    <select id="sortFilter" className={styles.select}>
                        <option value="price-asc">Giá: Tăng dần</option>
                        <option value="price-desc">Giá: Giảm dần</option>
                        <option value="newest">Mới nhất</option>
                        <option value="popular">Phổ biến</option>
                    </select>
                </div>

                {/* Nút áp dụng */}
                <div className={styles.column}>
                    <button className={styles.button}>Áp dụng</button>
                </div>
            </div>
        </div>
    );
};

export default FilterSortBar;
