function myResult(jankenUser) {
  var jankenComp = Math.floor(Math.random() * 3);
  var jankenName = ["グー", "チョキ", "パー"];

  var msg;
  if (jankenUser == jankenComp) {
    msg = "あいこです";
    // } else if ((jankenUser == 0 && jankenComp == 1) || (jankenUser == 1 && jankenComp == 2) || (jankenUser == 2 && jankenComp == 0)) {
  } else if ((jankenComp + 2) % 3 == jankenUser) {
    msg = "貴方の勝ちです";
  } else {
    msg = "貴方の負けです";
  }
  return "相手は" + jankenName[jankenComp] + "、" + msg
}