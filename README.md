# base-event-object
## Installation

npm

```shell
$ npm install base-event-object --save
```

yarn

```shell
$ yarn add base-event-object
```



## Usage

```jsx
import BaseEventObject from 'base-event-object';

// Pass in an array of event names for initializing the supported events
const eventer = new BaseEventObject(['ready', 'change']);

const handle = (...args) => {};

let listener = eventer.on('ready', handle); // Add 'ready' listener
listener.remove(); // Remove 'ready' listener
// or
eventer.off('ready', handle); // Remove 'ready' listener

eventer.off('ready'); // Remove all 'ready' listener
eventer.off(); // Remove all listener

eventer.emit('ready', ...args); // Emit 'ready' event
```
