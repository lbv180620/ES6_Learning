/**
 * const let等の変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能(ESLintに引っかかる)
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言できない
// let val2 = "let変数を再宣言";

// // この変数は上書きされる可能性がある場合はletを用いる。PHPの変数に近い

// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き不可
// // val3 = "const変数を上書き";

// // const変数は再宣言も不可
// const val3 = "const変数を再宣言";

// // PHPの定数に近い

/**
 * 文字列や数値リテラルは一度設定された値が不変であることが保証されるが、オブジェクトや配列に関しては値を変えることができる。
 */

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "chako",
//   age: 16
// };

// val4.name = "ちゃこ";
// val4.address = "Osaka";
// console.log(val4);

// オブジェクトを定義するときはほとんどconstしか使わない

// constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "rabbit";
// val5.push("bird");
// console.log(val5);

// Reactの変数宣言はほとんどconstを使う。オブジェクトや配列は中身を変えれるから。
// Reactの中で動的に変わる値は、Stateで定義するので、基本的にはconstを使っていく。
//

// ーーーーーーーーーーーーーーーーーーーー

/**
 * テンプレート文字列
 */

// const name = "chako";
// const age = 16;
// 私の名前はchakoです。年齢は16歳です。

// 従来の方法
// const message = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message);

// テンプレート文字列
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// ーーーーーーーーーーーーーーーーーーーー

/**
 * アロー関数 =>
 */

// 従来の関数
// function func1(str) {
//   return str;
// }
// console.log(func1("func1です"));

// 無名関数
// const func2 = function(str) {
//   return str;
// };
// console.log(func2("func2です"));

// アロー関数
// const func3 = (str) => {
//   return str;
// };
// console.log(func3("func3です"));

// 引数が１つのとき()を省略できる(Prettierが自動整形する)
// const func4 = str => {
//   return str;
// };
// console.log(func4("func4です"));

// 処理が１行で終わる単一式の場合、returnを省略できる({}で囲った場合はreturnが必須)
// const func5 = str => str;
// console.log(func5("func5です"));
// const func6 = (a, b) => a + b;
// console.log(func6(1,2));

/**
 * 分割代入 {}
 */

// オブジェクト場合
// const myProfile = {
//   name: "ちゃこ",
//   age: 16
// };

// // 従来の方法
// //  const msg1 = `私は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// //  console.log(msg1);

// //分割代入をしよう
// const { name, age } = myProfile;
// const msg2 = `私は${name}です。年齢は${age}歳です。`;
// console.log(msg2);

// 配列の場合
// const myProfile2 = ['らむ', 15];
// 従来の場合
// const msg3 = `私は${myProfile2[0]}です。年齢は${myProfile2[1]}歳です。`;
// console.log(msg3);

// 分割代入を使用
// const [name, age] = myProfile2;
// const msg4 = `私は${name}です。年齢は${age}歳です。`;
// console.log(msg4);

// ーーーーーーーーーーーーーーーー

/**
 * デフォルト値、引数など
 */

// デフォルト値無し
// const sayHello = (name) => console.log(`${name}さん、こんにちは！`);
// sayHello(); // undefined

// JSの場合、実引数や変数に値が入っていない状態の初期値は「undefined」

// デフォルト値あり
// const sayBye = (name = "ちゃこ") => console.log(`${name}さん、さようなら！`);
// sayBye();

// ーーーーーーーーーーーーーーーーーーーーーー

/**
 * スプレッド構文 ...
 */

// 1.配列の展開
// const ary1 = [1, 2];
// console.log(ary1);
// (2) [1, 2]
// 0: 1
// 1: 2
// console.log(...ary1);
// 1 2

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(ary1[0], ary1[1]);
// スプレッド構文を使うと・・・
// sumFunc(...ary1);
// 実引数に...が付いた配列が渡されたら、順番に展開されて、仮引数に値が渡される。

// 2.まとめる(分割代入と一緒に使う)
// const ary2 = [1, 2, 3, 4, 5];
// const [num1, num2, num3, num4, num5] = ary2;
// スプレッド構文を使って、残りの値を配列として分割代入
// const [num1, num2, ...ary3] = ary2;
// console.log(num1);
// console.log(num2);
// console.log(ary3);
// // (3) [3, 4, 5]
// // 0: 3
// // 1: 4
// // 2: 5

// 3. 配列のコピー、結合(Reactでもよく使われる)
// const ary4 = [10, 20];
// const ary5 = [30, 40];

// ary4をコピー(ディープコピー)
// const ary6 = [...ary4];
// console.log(ary6);
// (2) [10, 20]
// 0: 10
// 1: 20
// ary6[0] = 100;
// console.log(ary6); // (2) [100, 20]
// console.log(ary4); // (2) [10, 20]

//arys4とary5を結合する
// const ary7 = [...ary4, ...ary5];
// console.log(ary7);
// (4) [10, 20, 30, 40]
// 0: 10
// 1: 20
// 2: 30
// 3: 40

// スプレッド構文を使わずにそのまま代入すると・・・
// const ary8 = ary4;
// console.log(ary8); // (2) [10, 20]

// 参照がそのまま引き継がれてしまう
// この場合は、配列ary4の先頭の要素が指し示す値のアドレスが代入されているのであって、値そのものが代入されているわけではない。
// ary8に変更があると、ary4も影響を受けてしまう(ナローコピー)
// ary8[0] = 100;
// console.log(ary4);
// (2) [100, 20]
// 0: 100
// 1: 20

// このように配列をコピーするときは、スプレッド構文を使う(どうしても参照を引き継ぎたい場合を除いて)

// ーーーーーーーーーーーーーーーーーーー

/**
 * mapやfilterを使った配列の処理
 */

// const nameAry = ["田中", "山田", "猫山"];

// for文
// for (let i = 0; i < nameAry.length; i++) {
//   console.log(`${i + 1}: ${nameAry[i]}`);
// }

/** map(①元の配列から新しい配列を作る ②ループ処理 二つの使い方) */

// const nameAry2 = nameAry.map((name) => name);
// console.log(nameAry2); // (3) ["田中", "山田", "猫山"]

// for文と同等
// nameAry.map((name) => console.log(name));

// 一つ目の引数には配列の値、二つ目の引数にはインデックスが入る
// nameAry.map((name, index) => {
//   console.log(`${index + 1}：${name}`);
// });

/** filter(ある条件に一致したものだけを返却して新しい配列を生成する) */

// const numAry = [1, 2, 3, 4, 5];
// const newNumAry = numAry.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumAry); //(3) [1, 3, 5]

// const newNameAry2 = nameAry.map((name) => {
//   if (name.match(/猫山/)) {
//     return name;
//   } else {
//     return name + "さん";
//   }
// });

// console.log(newNameAry2);

// mapは画面表示させる際にもよく使う

// ーーーーーーーーーーーーーーーーーー

/**
 * 三項演算子 ? :
 */

// ある条件 ? 条件がtrueの時 : 条件がfalseの時;
// const val1 = 1 < 0 ? 'trueです' : 'falseです';
// console.log(val1);

// const num = 1300;
// const num = "1300";
// console.log(num.toLocaleString()); // 1,300
// 数値をカンマ区切りの文字列リテラルに変換してくれる

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString : "数値を代入してください";
// console.log(formattedNum);

// 関数のreturn部分に三項演算子を使う例
// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? true : false;
// };
// if (checkSum(55, 49)) {
//   console.log("100を超えています");
// } else {
//   console.log("許容範囲内です");
// }

// ーーーーーーーーーーーーーーーー

/**
 * 論理演算子の本当の意味を知ろう && ||
 */

// const flg1 = true;
// const flg2 = true;

// if (flg1 || flg2) {
//   console.log("1か2はtrueになります。");
// }

// if (flg1 && flg2) {
//   console.log("1も2もtrueになります。");
// }

/**
 * ||
 * は左側がfalseになら、右側を返す
 * 左側がtrueなら、左側を返す
 */
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee); //金額未設定です

// const num = 100;
// const fee = num || "金額未設定です";
// console.log(fee); //100

/**
 * &&
 * は左側がtrueなら、右側を返す
 * 左側がfalseなら、左側を返す
 */

// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);

// RaectのJSXの中で&&をよく使う
