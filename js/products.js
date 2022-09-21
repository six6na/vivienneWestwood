function getData() {
    // 여기에 여러분 깃허브 JSON 파일 경로(서버 데이터 주소)
    const DataURL = 'https://raw.githubusercontent.com/six6na/vivienneWestwood/main/data.json';
    fetch(DataURL)
        .then(function (res) {
            return res.json(); // JSON 객체 변환
        })
        .then(function (obj) {
            // obj 동물데이터
            showProducts(obj);
            console.log(obj);
        });
}

function showProducts(obj) {
    // 현재 페이지의 URL query 파라미터(매개변수)
    const query = location.search;
    console.log(query);
    // ? URL query문을 object(변수)로 변경
    let params = new URLSearchParams(query).get('category');

    // params == null 이면(시작 페이지 모든 제품 출력)
    if (params == null || params == 'all') {
        params = null;
    }
    console.log(params);

    // 상품 데이터 출력
    obj.forEach(function (product, i) {
        // 카테고리 구분 wireless | 무선헤드폰 | 유선헤드폰
        // 요청한 params와 제품카테고리명이 일치하는 데이터만 출력
        let category = product.category;
        let productName = product.productName;
        let price = product.price;
        let image = product.image;
        let type = product.type;
        console.log(category);
        let html = `
      <div id="product" data-id=${i}>
      <button class="like"><i class="bi bi-heart"></i><i class="bi bi-heart-fill"></i></button>
        <a href="product.html?id=${i}">
          <img src="${image}" alt=${productName}>
          <div class="info">
            <p class="title">${productName}</p>
            <p class="price"><span>₩</span>${price}</p>
          </div>
        </a>
      </div>
      `

        //카테고리 별로 보기
        if (params == product.category) {
            $('main .products').append(html);
        }

        // 상품 전체보기
        if (params == null) {
            $('main .products').append(html);
            console.log(`i = `, i)
        }

    });

    $(document).ready(function(){
        $(".like").click(function(){
            $(this).find(".bi-heart-fill").toggleClass("on");
        });
        $(".like").click(function(){
            $(this).find(".bi-heart").toggleClass("on");
        });
    });
}

$(function () {
    getData();
});

