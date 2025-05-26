var productId = getProductIdFromUrl(); // Hàm này cần được triển khai để lấy productId từ URL

var productDetailContainer = document.getElementById("product-detail");

function displayProductDetail() {
  var products = getProductById(productId);
  let output = `
        <div id="product-detail"
            style="background-color: aliceblue; height: auto; width: 70%; margin: 0 auto; padding: 20px;">

            <!-- Tiêu đề -->
            <h1
                style="width: 100%; font-weight: bold; font-size: 70px; background-color: #AFEEEE	; color: #ffffff; text-align: center;">
                ${products.name}
            </h1>

            <!-- Nội dung chính -->
            <div style="display: flex; gap: 40px; margin-top: 35px;">

                <!-- Phần giới thiệu -->
                <div class="intro" style="flex: 2;">
                    <p
                        style="color:black; font-size: 18px; margin-top: 20px; font-family: 'Times New Roman', Times, serif; text-transform: capitalize;">
                        ${products.detail1}
                    </p>
                    <div
                        style="color:black; font-size: 18px; margin-top: 20px; font-family: 'Times New Roman', Times, serif; text-transform: capitalize;">
                        ${products.detail2}
                    </div>
                    <div
                        style="color:black; font-size: 18px; margin-top: 20px; font-family: 'Times New Roman', Times, serif; text-transform: capitalize;">
                        ${products.detail3}
                    </div>
                    <div
                        style="color:black; font-size: 18px; margin-top: 20px; font-family: 'Times New Roman', Times, serif; text-transform: capitalize; margin-bottom: 3  0px;">
                        ${products.detail4}
                    </div>
                    <div
                        style="color:black; font-size: 18px; margin-top: 20px; font-family: 'Times New Roman', Times, serif; text-transform: capitalize; margin-bottom: 3  0px;">
                        ${products.detail5}
                    </div>
                </div>

                <!-- Hình ảnh và detail 3 -->
                <div style="flex: 1; text-align: center;">
                    <img src="${products.img1}" alt="" style="height: 300px; width: 250px; object-fit: cover; ">
                    <div
                        style="margin-top: 15px; font-size: 20px; font-family: 'Times New Roman', Times, serif; text-transform: capitalize;">
                        ${products.img_name1}
                    </div>
                    <img src="${products.img2}" alt=""
                        style="height: 300px; width: 250px; object-fit: cover; margin-top: 90px;">
                    <div
                        style="margin-top: 15px; font-size: 20px; font-family: 'Times New Roman', Times, serif; text-transform: capitalize;">
                        ${products.img_name2}
                    </div>
                </div>
            </div>
        </div>
  `;
  productDetailContainer.innerHTML += output;
}
displayProductDetail(data);

function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  expandImg.src = imgs.src;
}

function getProductIdFromUrl() {
  // Triển khai hàm để lấy productId từ URL, ví dụ: product.html?id=1
  var params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function getProductById(id) {
  // Triển khai hàm để lấy thông tin sản phẩm từ danh sách products
  return data.find((product) => product.id == id);
}
