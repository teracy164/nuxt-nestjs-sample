# nuxt-nestjs-sample

Nuxt.js と NestJS を使った TODO アプリです

## 環境構築

```shell
npx lerna bootstrap
```

## 起動

```shell
docker-compose up
```

- `http://localhost`でフロント側を表示
- `http://localhost:3000/api`で SwaggerUI を表示
- `http://localhost:8000`で pgadmin を表示
  - admin@example.com / admin 　でログイン可能
  - DB 情報については下記参照

## DB 情報（pgadmin にて追加する情報）

| 項目      | 値   |
| --------- | ---- |
| host name | db   |
| port      | 5432 |
| user name | root |
| password  | root |
