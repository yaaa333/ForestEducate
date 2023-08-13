$(document).ready(function() {
    generateVerificationCode();

    $("#verify-button").click(function() {
        var enteredCode = $("#entered-code").val();
        var verificationCode = $("#verification-code").text();

        if (enteredCode === verificationCode) {
            $("#message").text("驗證成功");
        } else {
            $("#message").text("驗證失敗，請檢查輸入的隨機碼");
            generateVerificationCode(); // 重新生成隨機碼
        }
    });
});

function generateVerificationCode() {
    var code = Math.floor(Math.random() * 9000) + 1000; // 生成四位數的隨機數字
    $("#verification-code").text(code);
}




window.addEventListener("load", init, false);