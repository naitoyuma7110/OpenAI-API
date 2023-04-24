# OpenAI(chatGPT3)と通信する API

## 概要

- OpenAI が公開している API に質問リクエストを送りレスポンスで回答を得る
- 回答が適切か評価する。「good」 or 「bad」
- 質問内容、回答、評価を DB 保存
- リクエストの度に DB の内容を送信し、回答を今までのやり取りによって最適化させる

## 使用技術

- Javascript(Typescript)
- Nest.js
- Prisma
- Docker(DB:PostgreSQL)
