
//スマホ用ナビ
function hamburger() {
    document.getElementById('line1').classList.toggle('line_1');
    document.getElementById('line2').classList.toggle('line_2');
    document.getElementById('line3').classList.toggle('line_3');
    document.getElementById('navi').classList.toggle('in');
}
document.getElementById('hamburger').addEventListener('click' , function () {
    hamburger();
} );

//必須項目チェック
function checkText() {
  var text = document.myform.check.value;

  if(text.length === 0) {
      alert('必須項目を入力して下さい');
      return false;
    }
}

//スムーズスクロール
document.addEventListener("click", e => {
  const target = e.target;
  if (!target.classList.contains("js-smooth-scroll")) return;
  e.preventDefault();
  const targetId = target.hash;
  document.querySelector(targetId).scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});