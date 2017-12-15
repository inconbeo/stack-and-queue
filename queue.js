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

    dequeue() {
        if(this.first === null) {
            return 
        }

        let node = this.first
        this.first = node.prev
        if(node === this.last){
            this.last = null
        }
        return node.data
    }  
    
    display(){
        let node = this.first
        while(node !== null){
            console.log(node.data)
            node = node.prev
        }
    }
 }


 const q = new Queue()

 q.enqueue('Quang')
 q.enqueue('Adam')
//  q.enqueue('Sara')
//  q.enqueue('Batman')
//  q.enqueue('Dennis')
//  q.enqueue('Moon Man')
//  q.enqueue('Ho')

// console.log(q.dequeue(), 'dequeue')
// console.log(q.dequeue(), 'dequeue')
q.display();
console.log(q)

