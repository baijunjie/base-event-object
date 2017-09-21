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
const eventObject = new BaseEventObject(['change']);

const handle = (e, ...args) => {};

let listener = eventObject.on('change', handle); // Add 'change' listener

listener.remove(); // Remove 'change' listener
// or
eventObject.off('ready', handle); // Remove 'change' listener

eventObject.off('ready'); // Remove all 'change' listener
eventObject.off(); // Remove all listener

eventObject.emit('change', ...args); // Emit 'change' event
```



## More usage

```js
const eventObject = new BaseEventObject({
    // Every time the emit will trigger the event
    events: ['change'],
  
    // Emit only once, and the event will be executed immediately after each registration
    onceEvents: ['ready']
});

eventObject.once('change', e => {}); // The handler will only execute once

eventObject.on('ready', e => {}); // Wait for the emit to execute
eventObject.emit('ready');
eventObject.on('ready', e => {}); // It will be implemented immediately

// Register multiple event listeners simultaneously
eventObject.on('ready change', e => {});
```



## Inherit

ES6

```js
class EventObject extends BaseEventObject {
    constructor(events) {
        super(events);
    }
}
const eventObject = new EventObject(['change']);
```

ES5

```js
function EventObject (events) {
    BaseEventObject.call(this, events);
}
EventObject.prototype = Object.create(BaseEventObject.prototype);
const eventObject = new EventObject(['change']);
```



## Extend

```js
const customObject = new CustomObject();
const eventObject = new BaseEventObject(['change']);
Object.assign(customObject, eventObject);
```



## Params

**BaseEventObject( events )**

`events` {String|Array|Object}  Single event name, or event name array, or event option.

If it is an event option, it contains two optional attributes.

Each property is an array containing supported event names.

- events          : Every time the emit will trigger the event.
- onceEvents : Emit only once, and the event will be executed immediately after each registration.

```js
new BaseEventObject('change');
// or
new BaseEventObject(['change']);
// Is equivalent to
new BaseEventObject({ events: ['change'] });
```





