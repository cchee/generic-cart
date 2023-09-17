# generic-cart

This is a generic web app template using Ionic with React.

Here are the steps taken to setup this project initially:

- npm install -g @ionic/cli
- ionic start generic-cart --type react blank

To run the generic-cart after checkout from GIT:

- cd generic-cart
- ionic serve

## Developer's Notes

In React properties are being passed down the component tree to facilitate data synchronization between components within the tree. Websocket can be used for real-time update between the browser and node.js server, but it is not that scalable for large data transfer (e.g. export to file). Use http/s for large data transfer because request/response provide a way for UI to do status monitoring of export in-flight. Using this approach allows faster transfer as well as larger (technically unlimit) data transfer.

## Disclaimer

This is my first attempt to do typescript based UI
