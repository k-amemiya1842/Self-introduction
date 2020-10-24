
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

  // 必須項目チェック
document.addEventListener("DOMContentLoaded",function() {
  var targets = document.getElementsByClassName("check");
  for (var i =0 ; i<targets.length ; i++) {
      //文字が入力されたタイミングでチェックする
      targets[i].oninput = function () {
        var alertelement = this.parentNode.getElementsByClassName("alertarea");
        if(this.value.trim().length < 2) {
          //空白を除いた入力文字数が2文字よりも少なければ
          if(alertelement[0]) {
            alertelement[0].innerHTML = "必須項目です。2文字以上を入力して下さい。";
          }
          this.style.border = "2px solid red";
        }
        else {
          //何も入力がないか、または指定文字しかないなら
          if(alertelement[0]) {
            alertelement[0].innerHTML = "";
          }
          this.style.border = "1px solid black";
        }
      }
    }
});

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