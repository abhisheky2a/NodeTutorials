'use strict'

var EventEmitter = require('events');

class MyEmitter extends EventEmitter
{
    constructor()
    {
        super();
        this.myEvent = 'Custom Event';
    }

    greet(eventType, eventData)
    {
        this.emit(eventType, this.myEvent + ' is a ' + eventData);
    }
}

var myEmitter = new MyEmitter();
myEmitter.on('test', function(eventData){
    console.log(eventData);
})

myEmitter.greet('test','::Software Interrupt::');
