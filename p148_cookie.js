// クッキーからデータを取得する
function getCookie(key) {
  var data = "";
  var cookies = document.cookie.split(";"); // クッキーを;で分割
  console.log(cookies);
  for (var i = 0; i < cookies.length; i++) {
    // 引数と同じ変数名のクッキーを探してその値を取得
    if (cookies[i].substr(0, key.length) == key) {
      data = cookies[i].substr(key.length + 1, cookies[i].length);
      console.log("data=", data);
      break;
    }
  }
  return unescape(data); // デコードした値を返す
}

// クッキーのデータをクリアする
function setCookie(key, data, days) {
  var msecs = days * 24 * 60 * 60 * 1000; // ミリ秒に変換
  var now = new Date();
  var expires = new Date();

  // エンコードした値をクッキーに書き込む
  document.cookie = key + "=" + escape(data) + "; " + "expires=" + expires.toGMTString() + ";";
  //alert(document.cookie);
}

// クッキーのデータをクリアする
function clearCookie(key) {
  var expires = new Date();
  expires.setTime(0); // データの保存期限を過去に設定
  document.cookie = key + "=a;" + "expires=" + expires.toGMTString() + ";";
}