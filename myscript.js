let count=0;
let elementClass=null;
let nowValue=document.getElementById("counter").textContent;
const buttonList=document.querySelectorAll("button"); //、1.すべてのボタンを選択します

// 2.myFuntion->配列要素ごとに実行する関数。
buttonList.forEach(myFuntion);

// item-> 現在の要素の値。
function myFuntion(item){
  item.addEventListener("click", doFuntion);//3.各ボタンにイベントリスナーを追加
  // https://www.w3schools.com/jsref/met_document_addeventlistener.asp
}

//4.ボタンがクリックされたときに実行する関数
function doFuntion(event){
  /*event ->イベントが発生した要素を取得します。
  https://www.w3schools.com/jsref/event_target.asp */ 


  // classListを使うと、クリックされたボタンが持つクラスのリストを取得できます。
  // target プロパティは、イベントが発生した要素を返します。
  elementClass=event.target.classList;
  

  // 5.クラスに応じて、カウンタの値を増減またはリセット。
  https://www.w3schools.com/jsreF/dom_obj_html_domtokenlist.asp

  if (elementClass.contains("increase")) {
    count +=1;
     
  }else if (elementClass.contains("decrease")){
    count -=1;
     
  }else  {
    count=0;
    
  }
  // 6.カウンタの値を画面に表示。
  document.getElementById("counter").innerHTML=count;

  // 7.カウンタの値が正・負・ゼロの場合で色を変える。
  changeColor()
}

function changeColor(){
  if (count>0) {
    document.getElementById("counter").style.color="blue";
  }else if (count<0) {
    document.getElementById("counter").style.color="red";
  }else {
    document.getElementById("counter").style.color="black";
  }
}
