function calculateTax() {
    // Lấy giá trị từ các ô nhập liệu
    var fullName = document.getElementById('fullName').value;
    var annualIncomeInput = document.getElementById('annualIncome');
    var dependentsInput = document.getElementById('dependents');

    // Kiểm tra nếu không có dữ liệu đầu vào
    if (!fullName || !annualIncomeInput.value || !dependentsInput.value) {
        alert("Số tiền thu nhập không hợp lệ.");
        return;
    }

    var annualIncome = parseFloat(annualIncomeInput.value);
    var dependents = parseInt(dependentsInput.value);

    // Tính thu nhập chịu thuế
    var taxableIncome = annualIncome - 4e+6 - dependents * 1.6e+6;

    // Tính thuế theo mức thu nhập
    var taxRate;
    if (taxableIncome <= 60e+6) {
        taxRate = 0.05;
    } else if (taxableIncome <= 120e+6) {
        taxRate = 0.1;
    } else if (taxableIncome <= 210e+6) {
        taxRate = 0.15;
    } else if (taxableIncome <= 384e+6) {
        taxRate = 0.2;
    } else if (taxableIncome <= 624e+6) {
        taxRate = 0.25;
    } else if (taxableIncome <= 960e+6) {
        taxRate = 0.3;
    } else {
        taxRate = 0.35;
    }

    // Tính tổng thuế
    var taxAmount = taxableIncome * taxRate;

    // Hiển thị kết quả
    var resultMessage =" Họ tên: " + fullName + "; Tiền thuế thu nhập cá nhân: " + formatCurrency(taxAmount) + " VND.";
    document.getElementById('ketQua3').innerHTML = resultMessage;
}

// Hàm định dạng số tiền thành chuỗi có dấu phẩy
function formatCurrency(amount) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}