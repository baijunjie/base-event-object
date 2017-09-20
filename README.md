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
const eventObject = new BaseEventObject(['ready', 'change']);

const handle = (...args) => {};

let listener = eventObject.on('ready', handle); // Add 'ready' listener
listener.remove(); // Remove 'ready' listener
// or
eventObject.off('ready', handle); // Remove 'ready' listener

eventObject.off('ready'); // Remove all 'ready' listener
eventObject.off(); // Remove all listener

eventObject.emit('ready', ...args); // Emit 'ready' event
```



## Inheritance

ES6

```js
class EventObject extends BaseEventObject {
    constructor() {
        super(['change']);
    }
}
const eventObject = new EventObject();
```

ES5

```js
function EventObject () {}
EventObject.prototype = new BaseEventObject(['change']);
const eventObject = new EventObject();
```

