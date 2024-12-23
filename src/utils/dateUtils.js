const formatDate = (isoDateString) => {
    const date = new Date(isoDateString); // Chuyển đổi chuỗi thành đối tượng Date

    const day = String(date.getDate()).padStart(2, '0'); // Lấy ngày và thêm số 0 ở đầu nếu cần
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Lấy tháng (tháng 0-11) và thêm số 0 ở đầu
    const year = date.getFullYear(); // Lấy năm

    return `${day}/${month}/${year}`; // Trả về định dạng ngày/tháng/năm
}
export default formatDate;