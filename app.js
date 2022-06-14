//페이지가 모두 로딩 된 후에 function을 실행하도록 설정 (head -> body 순으로 코드가 실행)
window.addEventListener("load",function() {
  //h1 태그의 첫 번째 값을 읽어온다// .text = 하나의 jQuery함수로 get/set기능 모두 가능
  console.log($("h1").text());
  var txt = $("h1").text(); //text()는 모든 태그의 값을 조회. val()는 첫번째 태그만 조회
  //$("h1") = jQuery 객체
  $("h1").text("변경됨");  //묵시적 반복, 모든 태그에 적용
})
//$("p").html("변경됨"); 