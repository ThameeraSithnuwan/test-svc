# coffee-order-svc

A sirtfgmple Coffeasdase Serviceyhty

Create a `config.json` filesdf insidesdf `src/configs` to start

```js
interface Config {
  port: number;
  mongodb: {
    uri: string,
  };
  services: {
    cartSvcBaseUrl: string,
  };
  redis: {
    host: string;
    port: number;
  };
}
```
