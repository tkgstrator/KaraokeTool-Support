// Home.tsx
import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import "./App.css";

const md = `
## Karaoke Toolについて

Karaoke Tool(以下, カラオケツール)は第一興商社が展開するカラオケ筐体(以下, DAM)で利用できるリモコンアプリです.

### 利用方法

1. DAMで8989-01で予約し, デンモクminiペアリング用のQRコードを表示させます. 
2. アプリ設定から"DAMと接続する"を選択し, カメラを起動します.
3. カメラの使用許可を求めるダイアログが表示されるので, 許可してください.
4. QRコードを読み込むと自動でペアリングが行われます.
5. 予約, リモコン操作などができるようになります.

DAM☆ともアカウントでログインいただくと, マイリストの利用, 採点履歴の保存などより便利にご利用いただけます.

### 免責事項

カラオケツールは第一興商社非公認のサービスです. コンテンツのアップデート, サービスの終了, 仕様の変更などにより利用できなくなる場合があります. その場合, 当社は一切の責任を負わず, 返金などの対応も致しません.

### [プライバシーポリシー](/privacy)

カラオケツールはそのサービスを利用して取得した全ての個人情報を, 本人の許可なしにあらゆる第三者に開示することはありません. 詳しくは上記, プライバシーポリシーをご一読ください.

### [使用許諾契約](/agreement)

カラオケツールを利用するユーザは上記の使用許諾契約に同意したものします.

### 連絡先

不具合報告・バグ報告は[こちら](mailto: "nasawake.am@gmail.com")までお願いいたします.
`;

export default class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <ReactMarkdown>{md}</ReactMarkdown>
      </div>
    );
  }
}
