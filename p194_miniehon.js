// リクエストの送信とデータ受信
function load_data(id) {
  // XMLHttpRequest オブジェクトの作成
  xmlhttp = new XMLHttpRequest();

  // 受信用コールバック関数の定義
  xmlhttp.onreadystatechange = function () {
    // すべての応答データを取得済 && サーバーからの応答正常
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      // CGIの出力内容をJSON形式と見暗視、rcvdataに格納
      rcvdata = eval(xmlhttp.responseText);
      show_data(id);
    }
  };

  // リクエストの送信 CGIのパラメータとしてタブidを送信
  xmlhttp.open('GET', '/cgi-bin/p194_dictionary.cgi?' + id);
  xmlhttp.send(null);
}

// 受信データを元に結果をブラウザに反映
function show_data(id) {
  // タブの切り替え
  for (i = 1; i <= 3; i++) {
    var color = (i == id) ? '#AABBBB' : '#FFFFFF';
    document.getElementById("td_" + i).style.backgroundColor = color;
  }

  // インデックスの作成
  var s = "<select name='index' size='6' id='index_list' onchange='select_index()'>";
  for (i = 0; i < rcvdata.length; i++) {
    s += ("<option value='" + i + "'>" + rcvdata[i].index);
  }
  s += "</select>"
  document.getElementById("div_index_list").innerHTML = s;
  // テキストエリアのクリア
  document.getElementById("contents").value = "";
}

// インデックスが選択されたときに呼び出される
function select_index() {
  var selected_index = document.getElementById("index_list").selectedIndex;
  document.getElementById("contents").value = rcvdata[index_list.options[selected_index].value].contents;
}