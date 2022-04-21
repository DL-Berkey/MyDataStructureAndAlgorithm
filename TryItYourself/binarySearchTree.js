class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);

        if(this.root === null) {
            this.root = newNode;
            return;
        }

        let currentNode = this.root;
        while(currentNode !== null) {

            if(currentNode.value < value) {
                if(currentNode.right === null) {
                    currentNode.right = newNode;
                    break;
                }
                currentNode =currentNode.right;
            } else {
                if(currentNode.left === null) {
                    currentNode.left = newNode;
                    break;
                }
                currentNode =currentNode.left;
            }
        }
    }

    has(value) {
        let currentNode = this.root;

        while(currentNode !== null) {
            if(currentNode.value === value) {
                return true;
            }

            if(currentNode.value < value) {
                currentNode = currentNode.right;
            }else {
                currentNode = currentNode.left;
            }
        }

        return false;
    }
}

let b = new BinarySearchTree();

b.insert('1');
b.insert('2');
b.insert('3');
b.insert('0');
console.log(b.root);
console.log(b.has(String(1)));