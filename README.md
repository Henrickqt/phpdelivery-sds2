# PHP-Delivery

![](https://github.com/Henrickqt/phpdelivery-sds2/blob/main/assets/app.gif)

Sales delivery project, in which the web version is used for customers to place their orders and point out the delivery location, and the mobile version is used by the delivery person to obtain the data of the orders to be delivered and their respective routes.

This project uses:
- [Java](https://www.java.com/en/) + [Spring Boot](https://spring.io/projects/spring-boot) + [PostgreSQL](https://www.postgresql.org/) (back-end)
- [ReactJS](https://reactjs.org/) + [ReactNative](https://reactnative.dev/) + [TypeScript](https://www.typescriptlang.org/) (front-end)

## Front-end Web

To access the web version published on [Netlify](https://www.netlify.com/), access: `https://php-delivery.netlify.app/`

**OR**

Run `yarn start` to start the Web App, then navigate to `http://localhost:3000`

## Front-end Mobile

To run the Mobile App, you need to:
1. Run `yarn global add expo-cli` to install Expo globally.
2. Download the Expo App from PlayStore/AppStore in your smartphone (recommended) **OR** use some emulator.

Run `yarn start` to start the Metro Bundler, then scan the QR-Code in your smartphone.

*Remembering that your smartphone needs to be in the same network as your computer that is running the Metro Bundler.*
