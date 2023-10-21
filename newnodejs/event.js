const events = require('events');
const eventEmitter = new events.EventEmitter();
eventEmitter.on('myname',()=>{
    console.log('my name is a afroz');
})
eventEmitter.emit('myname')
eventEmitter.emit('myname')
eventEmitter.emit('myname')
eventEmitter.emit('myname')