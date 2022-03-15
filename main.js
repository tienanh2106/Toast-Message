// Toast function
function toast({ title = "", message = "", type = "info", duration = 3000 }) {
    const main = document.getElementById("toast");
    if (main) {
      const toast = document.createElement("div");
  
      // Auto remove toast
      const autoRemoveId = setTimeout(function () {
        main.removeChild(toast);
      }, duration + 1000);
  
      // Remove toast when clicked
      toast.onclick = function (e) {
        if (e.target.closest(".toast__close")) {
          main.removeChild(toast);
          clearTimeout(autoRemoveId);
        }
      };
  
      const icons = {
        success: "fas fa-check-circle",
        info: "fas fa-info-circle",
        warning: "fas fa-exclamation-circle",
        error: "fas fa-exclamation-circle"
      };
      const icon = icons[type];
   
      const delay = (duration / 1000).toFixed(2);
  
      toast.classList.add("toast", `toast--${type}`);
      toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;
  
      toast.innerHTML = `
                      <div class="toast__icon">
                          <i class="${icon}"></i>
                      </div>
                      <div class="toast__body">
                          <h3 class="toast__title">${title}</h3>
                          <p class="toast__msg">${message}</p>
                      </div>
                      <div class="toast__close">
                          <i class="fas fa-times"></i>
                      </div>
                  `;
      main.appendChild(toast);
    
    }
  }

  function showSuccessToast() {
    toast({
      title: "Thành công!",
      message: "Bạn đã đăng ký thành công tài khoản.",
      type: "success",
      duration: 3000
    });
  }

  function showErrorToast() {
    toast({
      title: "Thất bại!",
      message: "Có lỗi xảy ra, vui lòng điền đầy đủ thông tin.",
      type: "error",
      duration: 3000
    });
  }
 
  function callAddInformation (){

    var name1 = document.getElementById("name").value;
    var phone1 = document.getElementById("phone").value;
    var network1 = document.getElementById("network");
    
    if (name1=== "" || phone1 === ""||network1.value === "0") {
        showErrorToast();
        return;
    }
    else{
        document.getElementById("container2").style.display = "block";
        document.getElementById("exportName").innerHTML = name1;
        document.getElementById("exportPhone").innerHTML = phone1;
        
        function mFunction(sel) {
            var sel = network1; 
            var text = sel.options[sel.selectedIndex].text;
            
            return text;
        }
        document.getElementById("exportNetwork").innerHTML=mFunction();
        showSuccessToast();
     }
    }   
    document.getElementById("access").onclick = function() {
        callAddInformation();
};
   

