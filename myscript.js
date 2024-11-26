function changeColor() {
  // 使用する文字（16進数の数字と文字）を定義
  const letters = "0123456789ABCDEF";
  
  // 16進数のカラーコードは"#"で始まる
  let color = "#";

  // カラーコードを生成するために6回繰り返す（#RRGGBB形式なので6桁必要）
  for (let i = 0; i < 6; i++) {
    // letters配列の長さを掛けたランダムな数値を生成
    let number = Math.random() * letters.length;

    // 生成した数値を小数点以下切り捨ててインデックスとして使用
    color += letters[Math.floor(number)];
  }

  // 生成されたカラーコードをHTML内の要素に表示
  document.getElementById("nowColor").innerHTML = color;

  // 生成したカラーコードを背景色として適用しています。
  document.body.style.backgroundColor = color;
}
