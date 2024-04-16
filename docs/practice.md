# Practice

ここでは、GitHub Copilotを使って簡単なTypeScriptのコードを生成していきます。

## Practice 1 コードのサジェッション

引数で与えられた数値までのフィボナッチ数列を返す関数を実装してください。

```ts
function fibonacci
```

::: info ステップ

1. `function fibonacci` の後ろにカーソルを合わせる
2. `Alt` + `\` を押すか、続きのコード（ `(` を書き始めるとサジェストが表示される
3. `tab` キーを押すと、サジェストされたコードが挿入される
4. `enter` キーを押すと、次のコードがサジェストされる
5. これを繰り返して、コードを完成させる

:::

::: details one more

以下のようなts-docコメントを事前に書いてから同じことをしてみましょう。

```ts
/**
 * 与えられた数値までのフィボナッチ数列を返す
 * @param n1 代1項
 * @param n2 代2項
 * @param n 生成する数列の長さ
 * @returns フィボナッチ数列配列
 */
function fibonacci
```

:::

::: tip コンテキストとしてのコメント

GitHub Copilotは、現在カーソルのある周辺のソースコードをコンテキストとして利用します。そのため、関数のドキュメントコメントを書いておくことで、より適切なコードをサジェストしてくれることがあります。

:::

## Practice 2 インラインチャットによるコードの修正

現在、 `Japanese` と `American` の2つの型があります。タグ付きユニオン型を使って、 `introduce()` が正しく型を絞り込めるようにしてください。

```ts
type Japanese = {
    firstName: string;
    lastName: string;
}

type American = {
    firstName: string;
    middleName: string;
    lastName: string;
}

type Person = Japanese | American;

const introduce = (person: Person) => {
    if (/* person が Japanese 型の場合 */) {
        return `こんにちは、${person.lastName} ${person.firstName} です。`;
    } else {
        return `Hi, I'm ${person.firstName} ${person.middleName} ${person.lastName}.`;
    }
}
```

::: info ステップ

1. `type Japanese` から `introduce()` 全体までを範囲選択する
2. `Cmd` / `Ctrl` + `i` を押して、インラインチャットを表示させる
3. コードに対して行ってほしいプロンプトを入力する
4. しばらくすると変更案がサジェストされるので、内容を確認して `cmd` / `ctrl` + `enter` を押す

:::

::: details one more

同じ方法で、Practice 1 のコードをアロー関数に変更してみましょう。

:::

## Practice 3 型パズルの解決

以下のコードは、4行目で `プロパティ 'extra' は型 '{ info: string; }' に存在しません。` というエラーが発生します。このエラーを解消してください。

```ts
type Data<T> = T extends { type: 'special' } ? { info: string, extra: string } : { info: string };

function handleData<T>(data: Data<T>): string {
  return data.extra;
}

const myData = {
  type: 'special',
  info: 'Something important',
  extra: 'Additional info'
};

const result = handleData(myData);
```

::: info ステップ

1. エラーが発生している部分にカーソルを合わせる
2. `Cmd` / `Ctrl` + `.` を押して、「Copilotを使って修正」を選択する
3. サジェストされた修正案を確認して、`cmd` / `ctrl` + `enter` を押す

:::

## Practice 4 テスト駆動開発

`demo/practice.test.ts` を開くと、 `isInsideCircle()` という関数がテストされています。このテストケースを元に、 `isInsideSquare()` という関数を生成してください。

```ts
export function
```

::: info ステップ

1. `demo/practice.ts` と `demo/practice.test.ts` を2カラムで開く
2. `export function` の後ろにカーソルを合わせる
3. `Alt` + `\` を押すか、続きのコード（ `(` を書き始めるとサジェストが表示される
4. `tab` キーを押すと、サジェストされたコードが挿入される
5. `npx vitest demo/practice.test.ts` を実行して、テストが通ることを確認する

:::

::: tip コンテキストとして扱われるファイル

GitHub Copilotでは、以下のようなファイルやソースコードをコンテキストとして扱います。

- 現在カーソルがあるファイルのカーソル周辺のコード
- 現在開いているファイルのコード

:::

## Practice 5 Chatによるエラーの説明

テストコードを意図的に失敗するように変更すると、 `Tests failed.` となってしまいます。このエラーをGitHub Copilot Chatによって説明してもらいましょう。

::: info ステップ

1. `demo/practice.test.ts` を開く
2. `isInsideCircle()` のテストコードを変更して、テストが失敗するようにする
3. `npx vitest demo/practice.test.ts` を実行して、意図的にテストを失敗させる
4. ターミナルに表示されたエラーメッセージを範囲選択する
5. その状態でGitHub Copilot Chatを開く
6. `#terminalSelection このエラーの原因の修正方法を教えて下さい。` と入力する

:::
