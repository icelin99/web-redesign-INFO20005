
var checkoutForm = document.getElementById("checkoutForm");
var successMessage = document.getElementById("successMessage");

// 提交表单时的事件处理程序
checkoutForm.addEventListener("submit", function(event) {
  event.preventDefault(); 

  // 进行表单验证
  var name = document.getElementById("name").value;
  var address = document.getElementById("address").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;

//   if (name && address && phone && email) {
    // 显示成功消息
    successMessage.classList.remove("hidden");
    checkoutForm.classList.add("hidden");

    // 延迟 3 秒后跳转回购物车页面
    // setTimeout(function() {
    //   window.location.href = "cart.html";
    // }, 3000);
//   }
});
