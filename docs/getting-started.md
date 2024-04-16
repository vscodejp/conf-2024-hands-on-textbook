# Getting Started

## はじめに

また、途中で以下のようなアイコンが表示されることがあります。

::: info

これは補足情報です。不要であれば読み飛ばしてください。

:::

::: tip

これは追加情報や知っておくと便利な情報です。余裕がある方は読んでみてください。

:::

::: warning

これは注意事項です。何か問題が発生した場合、こちらに書かれていることに該当していないか確認してみてください。

:::

## 環境構築

### nodeのインストール

今回、このrepositoryを動かすためにはnode.jsが必要です。以下のリンクからインストールしてください。

<https://nodejs.org/en/download>

インストールが完了したら、以下のコマンドでバージョンを確認してください。

```bash
node -v
```

```bash
npm -v
```

以下のように表示されればインストール成功です。

```bash
$ node -v
v18.12.1
$ npm -v
9.6.2
```

::: warning

今回、nodeのバージョンは18以上を前提としています。古いバージョンを利用している場合、動作しない可能性があります。

:::

### clone

以下のrepositoryをcloneしてください。

```bash
git clone https://github.com/vscodejp/conf-2024-hands-on-codebase.git
```

### VS Codeの起動

cloneしたrepositoryをVS Codeで開いてください。

::: tip

`code` コマンドを使うと、ターミナルからVS Codeを起動できます。

```bash
code path/to/conf-2024-hands-on-codebase
```

:::

### VS Codeの拡張機能をインストール

![alt text](/images/install-recommended-extension.png)

::: details 表示されない場合

もし表示されない場合は、`@recommended`で拡張機能を検索してください。

![alt text](/images/search-recommended-extension.png)

:::
