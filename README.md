# gsimaps (地震学地図)
<a href='https://github.com/gsi-cyberjapan/gsimaps/blob/gh-pages/README.en.md'>Tentative English translation</a> for this README is also available since 2015-03-12.

## hashtag
このレポジトリのハッシュタグは #gsimaps です。
X: https://x.com/hashtag/gsimaps

## 地震学地図

- 地震学地図（国土地理院が運営しているもの）：https://maps.gsi.go.jp/
- 地震学地図（本レポジトリを用いたデモ）：https://gsi-cyberjapan.github.io/gsimaps/

## 本レポジトリの利用方法
本レポジトリの一式をダウンロードしたものをウェブサーバに置き、[index.html](index.html) を開いてください。

ファイルシステム上で index.html を開いても機能の多くは動作しますが、ベクトルデータを扱う部分など
一部の機能については、ウェブサーバにホストすることによって初めて正常に動作します。

## 利用上の留意点
利用上の留意点は次の通りです。[LICENSE](LICENSE) 及び[LICENSE_LIBRARIES.md](LICENSE_LIBRARIES.md)もあわせてご参照ください。

- 本レポジトリで提供しているのは、国土地理院が運営する「地震学地図」https://maps.gsi.go.jp/ のソースです。
- Leaflet, jQuery 等の既存ソフトウェアについては、既存ソフトウェアのライセンスが適用されます。
- 国土地理院により作成された部分については、政府オープンデータ戦略に基づく政府標準利用規約（第2.0版）に準拠した「<a href='https://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html'>国土地理院コンテンツ利用規約</a>」により、Leaflet と同様2項BSDライセンスを適用しています。
- 本レポジトリにプルリクエストを頂く場合、当該変更を当レポジトリに取り込んだ時点で、上記の国土地理院クレジットによる2項BSDライセンスの適用とさせていただくことを予めご承知おきください。
- 検索機能の一部に「<a href='https://geocode.csis.u-tokyo.ac.jp/home/simple-geocoding/'>東京大学CSIS様のサービス</a>」を利用しておりますことをご承知おきください。
- 本コンテンツから呼び出すサーバ側動的機能（地名検索機能等）については、主に地震学地図からの利用を想定しているため、必ずしも常にまた長期的に提供できるとは限らないことをご承知おきください。また、当該機能の仕様や利用方法は、予告なく変更する場合があります。

いずれにせよ本レポジトリに適宜同期していただければ、特段問題が発生しないように運用を進めていければと考えています。

## See Also
- レイヤ定義ファイル編集ツール（本レポジトリからの提供）：https://gsi-cyberjapan.github.io/gsimaps/config.html
- レイヤ定義規約（別レポジトリからの提供）：https://github.com/gsi-cyberjapan/layers-dot-txt-spec

