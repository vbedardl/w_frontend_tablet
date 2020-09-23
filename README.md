# Tablet App for Carriers (Walter)

The Tablet App allows the carrier to selet a resident by his name or unit number and confirm the delivery of a package.
It creates a new "package" entity in the database that can then be access via the Web Admin Panel or the Resident Mobile App.

### How it works

The Tablet App was built using expo, react-native. It is connected to a Graphql/Prisma server using Apollo/Client.

### Screenshots

![Login Page](https://github.com/vbedardl/w_frontend_mobile/blob/master/doc/w_login.jpg?raw=true)
![Package History Page](https://github.com/vbedardl/w_frontend_mobile/blob/master/doc/w_package_history.jpg?raw=true)
![USer Settings Page](https://github.com/vbedardl/w_frontend_mobile/blob/master/doc/w_user_settings.jpg?raw=true)

## Getting Started

- Install all dependencies using `npm install` command
- Clone the w_backend from https://github.com/vbedardl/w_backend and run the development server using `npm start`
- On a separate terminal, run development build using `npm start` from project root folder

## Current Functionality

- Create a new "package" for a user.

- Get a list of all the residents by their name and their unit

## Further Development

- See [w_backend](https://github.com/vbedardl/w_backend) for further development
