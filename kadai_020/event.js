//btnというidを持つHTML要素を取得し、クリックイベントを扱う定数として命名
const clickBtn = document.getElementById('btn');
//textというidを持つHTML要素を取得し、表示を更新するターゲットとして命名
const statusText = document.getElementById('text');

// HTML要素がクリックされたときにイベント処理を実行する
clickBtn.addEventListener('click', () => {
  // メッセージのテキストを変更する
  statusText.textContent = 'ボタンをクリックしました';
});