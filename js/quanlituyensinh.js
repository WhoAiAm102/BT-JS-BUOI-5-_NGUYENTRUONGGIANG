function kiemTraTuyenSinh() {
    // Lấy giá trị từ người dùng
    const standardScore = parseFloat(document.getElementById("standardScore").value);
    const subject1Score = parseFloat(document.getElementById("subject1Score").value);
    const subject2Score = parseFloat(document.getElementById("subject2Score").value);
    const subject3Score = parseFloat(document.getElementById("subject3Score").value);
    const regionPriority = document.getElementById("regionPriority").value;
    const targetPriority = document.getElementById("targetPriority").value;

    // Tính điểm tổng kết và điểm ưu tiên
    const totalScore = subject1Score + subject2Score + subject3Score;
    const priorityScore = (regionPriority === "A" ? 2 : (regionPriority === "B" ? 1 : 0.5)) +
                          (targetPriority === "1" ? 2.5 : (targetPriority === "2" ? 1.5 : 1));

    // Tổng điểm đạt được
    const totalResult = totalScore + priorityScore;

    // Kiểm tra điều kiện đậu hay rớt
    const resultMessage = totalResult >= standardScore && subject1Score > 0 && subject2Score > 0 && subject3Score > 0
        ? "Chúc mừng! Bạn đã đậu."
        : "Rất tiếc, bạn đã rớt.";

    // Hiển thị kết quả
    document.getElementById("ketQua").innerHTML = `${resultMessage} Tổng số điểm đạt được: ${totalResult}`;
}
