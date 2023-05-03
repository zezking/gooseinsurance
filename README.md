### Introduction

This is a technical assessment project from Goose Insurance

### Setting up the Development Environment

Follow this [guide](https://reactnative.dev/docs/environment-setup) to set up your environment base on your development OS

`cp .env.exmaple .env` and use this url for AUTH_URL value `https://gslwn81z5i.execute-api.us-east-2.amazonaws.com/goose/technical-challenge/login`

### Install Dependencies

`npm i`

### Install Pod Packages

run `npx pod-install ios` from root

### Link Assets

run `npx react-native-asset`

### Fire It Up

Start metro `npx react-native start`
iOS: `npx react-native run-ios`
Android: `npx react-native run-android`

### If app could not resolve import env variable from '@env'

run `npm start -- --reset-cache` to start Metro

### If you have trouble starting android app

run `cd android && ./gradlew clean && ..`
