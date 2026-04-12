// 年月日を出力する関数を定義する

const displayToday = () => {

  // その時点の情報を、定数nowに入れる
  const now = new Date();

  // nowで指定した「年」部分を取得して定数yearに入れる
  const year = now.getFullYear();
  // nowで指定した「月」部分を取得して定数monthに入れる
  // 「月」は (0 ～ 11)を返すため、1を足す 
  const month = now.getMonth() + 1;
  // nowで指定した「日」部分を取得して定数dateに入れる
  const date = now.getDate();

  // 「○年○月○日」の形で出力する
  console.log(year + '年' + month + '月' + date + '日');
}

// 関数を実行する
displayToday();