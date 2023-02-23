function handleSubmit() {
  //Lay gia tri email va chuyen sang chu thuong
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();
  //Lay phan tu the p hien thi loi
  const errorEmail = document.getElementById("error-email");
  //Dieu kien de la mot email
  const checkmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //DUng match de kiem tra email vua nhap

  const check = emailValue.match(checkmail);
  //Lay phan tu chua thong tin user
  const personalinfo = document.querySelector("#personal-info .personalinfo");

  //Lay element de kiem soat
  const submitcontrol = document.querySelector(".submit-email");
  if (check) {
    personalinfo.style.display = "block";
    submitcontrol.style.display = "none";
    errorEmail.innerHTML = "";
  } else {
    errorEmail.innerHTML = "Vui lòng nhập đúng định dạng email";
  }
}
//Hien thi nut view more khi di chuyen chuot vao
function handleOnMouseOver(element) {
  const viewmore = element.querySelector(".control-view");
  viewmore.style.display = "inline-block";
}
//tắt viewmore khi di chuyen chuột ra ngoài phần tử
function handleOnMouseOut(element) {
  const viewmore = element.querySelector(".control-view");
  viewmore.style.display = "none";
  if (!viewmore.classList.value.includes("View-more")) {
    viewmore.style.display = "none";
  }
}
//tắt bật hiển thị viewmore và viewless sau khi ấn,đồng thời hiển thị hoặc ẩn nội dung khối
function handleViewMore(element) {
  const parentElement = element.closest(".parrent");
  const viewmore = parentElement.querySelector(".control-view");
  const sectionContent = parentElement.querySelectorAll(".job-content");
  if (viewmore.classList.value.includes("View-more")) {
    sectionContent.forEach((element) => {
      element.style.display = "block";
    });
    viewmore.classList.remove("View-more");
    viewmore.classList.add("View-less");
    viewmore.innerHTML = "View less";
  } else {
    sectionContent.forEach((element) => {
      element.style.display = "none";
    });
    viewmore.classList.remove("View-less");
    viewmore.classList.add("View-more");
    viewmore.innerHTML = "View more";
  }
}
