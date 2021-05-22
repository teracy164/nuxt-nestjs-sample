# nuxt-nestjs-sample

Nuxt.js と NestJS を使った TODO アプリです

## 前提

- Node.js インストール済み
- docker / docker-compose インストール済み

## 環境構築

- プロジェクトルートで以下実行

```shell
npm install
```

### ローカル環境構築

```shell
npm run init:dev
```

### ローカル環境起動

```shell
npm run dev
```

- `http://localhost`でフロント側を表示
- `http://localhost:3000/api`で SwaggerUI を表示
- `http://localhost:8000`で pgadmin を表示
  - admin@example.com / admin 　でログイン可能
  - DB 情報については下記参照

#### DB 情報（pgadmin にて追加する情報）

| 項目      | 値   |
| --------- | ---- |
| host name | db   |
| port      | 5432 |
| user name | root |
| password  | root |

### 本番環境構築

```shell
npm run init:prod
npm run build
```

### 本番環境起動

```shell
npm run start
```

- `http://localhost:3000`にアクセス
