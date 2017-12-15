"use stric";
function createNode(data=null, next=null) {
    return {
        data,
        next
    }
}

class Stack {
    constructor () {
        this.top = null;
    }

    push(data) {
        if(this.top === null) {
            this.top = createNode(data);
            return this.top;
        }

        const node = createNode(data, this.top);
              this.top = node;  
             
    }
}