class Node {
    constructor(value = '') {
        this.value = value;
        this.child = new Map;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(string) {
        let currentNode = this.root;

        for(const char of string) {
            if(!currentNode.child.get(char)) {
                currentNode.child.set(
                    char, new Node(currentNode.value + char)
                )
            }

            currentNode = currentNode.child.get(char)
        }
    }

    has(string) {
        let currentNode = this.root;

        for(const char of string) {
            if(!currentNode.child.has(char)) {
                return false;
            }

            currentNode = currentNode.child.get(char);
        }
        
        return true;
    }
}

let trie = new Trie();
trie.insert('cat');
trie.insert('can');
console.log(trie.has('can'));
console.log(trie.has('ca'));
console.log(trie.has('c'));
console.log(trie.has('dad'));