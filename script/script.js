document.getElementById("emailForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    if (email) {
        fetch("step2.html")
            .then((response) => response.text())
            .then((html) => {
                // Chèn nội dung step2.html vào trang hiện tại
                document.body.innerHTML = html;

                document.getElementById("startAssessment").addEventListener("click", function () {
                    alert("Bắt đầu bài đánh giá!");
                });
            })
            .catch((error) => console.error("Lỗi khi tải step2.html:", error));
    } else {
        alert("Vui lòng nhập email hợp lệ!");
    }
});

