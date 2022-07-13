function selectText() {
  var text = document.getElementById('txtBox1');
  text.select();
  text.setSelectionRange(0, 1000);
  navigator.clipboard.writeText(text.value);
}
