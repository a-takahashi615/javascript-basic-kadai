//btnというidを持つHTML要素を取得し、クリックイベントを扱う定数として命名
const btn = document.getElementById('btn');
//textというidを持つHTML要素を取得し、表示を更新するターゲットとして命名
const text = document.getElementById('text');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  // 2秒（2000ミリ秒）の待ち時間を設定し、非同期処理を実行する
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  },2000);
});