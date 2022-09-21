// 제품 데이터 가져오기
function getData() {
    // 여기에 여러분 깃허브 JSON 파일 경로(서버 데이터 주소)
    const DataURL = 'https://raw.githubusercontent.com/six6na/vivienneWestwood/main/data.json';
    fetch(DataURL)
    .then(function(res){
      return res.json(); // JSON 객체 변환
    })
    .then(function(obj){
      // obj 동물데이터
      showDetail(obj);
      console.log(obj);
    });
  }
  
  function showDetail(obj) {
    // 현재 페이지의 URL query 파라미터(매개변수)
    const query = location.search;
    console.log(query);
    // ? URL query문을 object(변수)로 변경
    let params = new URLSearchParams(query).get('id');
    console.log(params);  
  
    // 해당 id 제품 출력
    // let category = obj[params].category;
    let productName = obj[params].productName;
    let price = obj[params].price;
    let image = obj[params].image;
    let text = obj[params].text;
    console.log('name = ', productName);
    
    // deltail.html에 각 변수값 주입
    $('#product main .rightCont h4').text(productName);
    $('#product main .rightCont .price span').text(price);
    $('#product main figure img').attr('src',image);
    $('#product main .infoDepth2 p').text(text);

  }

  const moreToggleBtn = document.querySelector('.moreToggleBtn');

          moreToggleBtn.addEventListener("click", (event) => {
            event.currentTarget.classList.toggle('active');
        });

        $(document).ready(function(){

        $(".moreToggleBtn").click(function(){
        $(".infoDepth2").stop().slideToggle(300);
        })
  
        
        });

  const postToggleBtn = document.querySelector('.postToggleBtn');

          postToggleBtn.addEventListener("click", (event) => {
            event.currentTarget.classList.toggle('active');
        });

        $(document).ready(function(){

        $(".postToggleBtn").click(function(){
        $(".postDepth2").stop().slideToggle(300);
        })
  
        
        });

  $(function(){
     getData();
    })
