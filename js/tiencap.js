function onChangeLoaiKhachHang() {
    var loaiKhachHang = document.getElementById("loaiKhachHang").value;
    var soKetNoiInput = document.getElementById("soKetNoi");
  
    if (loaiKhachHang === "doanhNghiep") {
      soKetNoiInput.disabled = false;
    } else {
      soKetNoiInput.disabled = true;
      soKetNoiInput.value = "";
    }
  }
  
  function tinhHoaDon() {
    var maKhachHang = document.getElementById("maKhachHang").value;
    var loaiKhachHang = document.getElementById("loaiKhachHang").value;
    var soKetNoi = parseInt(document.getElementById("soKetNoi").value) || 0;
    var soKenhCaoCap = parseInt(document.getElementById("soKenhCaoCap").value) || 0;
    var ketQuaElement = document.getElementById("ketQua4");
  
    // Kiểm tra hợp lệ
    if (maKhachHang === "" || isNaN(soKenhCaoCap) || (loaiKhachHang === "doanhNghiep" && isNaN(soKetNoi))) {
      alert("Hãy chọn loại khách hàng.");
      return;
    }
  
    var phiXuLyHoaDon, phiDichVuCoBan, phiThueKenhCaoCap;
  
    if (loaiKhachHang === "nhaDan") {
      phiXuLyHoaDon = 4.5;
      phiDichVuCoBan = 20.5;
      phiThueKenhCaoCap = 7.5 * soKenhCaoCap;
    } else {
      phiXuLyHoaDon = 15;
      phiDichVuCoBan = 75;
      phiThueKenhCaoCap = (soKetNoi > 10 ? (soKetNoi - 10) * 5 : 0) + (soKenhCaoCap * 50);
    }
  
    var tongTien = phiXuLyHoaDon + phiDichVuCoBan + phiThueKenhCaoCap;
  
    ketQuaElement.textContent = "Tổng tiền hóa đơn cho khách hàng " + maKhachHang + ": $" + tongTien.toFixed();
  }