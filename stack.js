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
// console.log(s);

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
// console.log(is_palindrome('dadd'));

function matchParens(expression){
    const stack = new Stack();
    
    for(let i = 0; i<expression.length; i++){
        let char = expression.charAt(i)
        console.log(char, 'line 84')
        if(char === '('){
            console.log(i, 'i')
            console.log(char, 'charOpening')
            stack.push(char)
        }else if(char === ')'){
            const openBrackets = stack.peek()
            console.log(char, 'charClose')
            if(!openBrackets){
                return false
            }
            stack.pop()
        }
        
    }
        console.log(stack), 'stack'
        console.log(expression, 'expression')
        if (stack.peek()){
            return false
        }
        return true
}

console.log(matchParens('2+(3*)(4)('));
// console.log(matchParent('(2+3-(2+4)'); //false

////////////////////////////////////////////////////
