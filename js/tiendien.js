function tinhTienDien() {
    var ten = document.getElementById("ten").value;
    var soKW = parseFloat(document.getElementById("soKW").value);

    if (isNaN(soKW)) {
      alert("Vui lòng nhập số KW hợp lệ.");
      return;
    }

    var tienDien = 0;

    if (soKW <= 50) {
      tienDien = soKW * 500;
    } else if (soKW <= 100) {
      tienDien = 50 * 500 + (soKW - 50) * 650;
    } else if (soKW <= 200) {
      tienDien = 50 * 500 + 50 * 650 + (soKW - 100) * 850;
    } else if (soKW <= 350) {
      tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soKW - 200) * 1100;
    } else {
      tienDien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKW - 350) * 1300;
    }

    var ketQua = "Họ Tên: " + ten + "<br>Tổng Tiền Điện: " + tienDien.toFixed() + " VNĐ";
    document.getElementById("ketQua2").innerHTML = ketQua;
  }