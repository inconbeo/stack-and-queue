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

    peek(){
        if(this.top === null){
            return null
        }
        return this.top.data
    }

    pop(){
        const node = this.top
        this.top = node.next
        return node.data
    }

    display(){
        let node = this.top
        while(node !== null){
        console.log(node.data, 'display')
        node = node.next
        }
    }
}

const s = new Stack()

s.push(0)
s.push(1)
s.push(2)
s.push(3)
s.push(4)
s.push(5)

// console.log(s.peek())
// console.log(s.pop())

// s.display()
console.log(s);

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    // your code goes here
    const stack = new Stack();
    for (let i = 0; i < s.length; i ++) {
        stack.push(s.charAt(i));
    }
    console.log(stack);
    for(let i = 0; i < s.length; i++) {
        if (stack.pop() !== s.charAt(i)){
            return false
        }
    }
    return true
}



console.log(is_palindrome('dadd'));

