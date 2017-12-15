'use strict';
function createNode(data=null, next=null, prev=null) {
    return {
        data,
        next,
        prev
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(data) {
        let node = createNode(data);
        if(this.last) {
            node.next = this.last;
            this.last.prev = node;
        }
        this.last = node;

        if(this.first === null) {
            this.first = node;
        }
    }
            
}