class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    enqueue(value) {
        const newNode = new Node(value);

        if (this.head === null) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    dequeue() {
        const value = this.head.value;

        this.head = this.head.next;

        return value;
    }

    peek() {
        return this.head.value;
    }

    display() {
        let node = this.head;
        let nodes = '';

        while (true) {
            nodes += node.value[0] + ', ';
            if (node.next === null) {
                nodes = nodes.substr(0, nodes.length - 2);
                console.log(nodes);
                return;
            }
            node = node.next;
        }
    }
}

function solution(priorities, location) {
    const queue = new Queue();

    for (let i = 0; i < priorities.length; i++) {
        queue.enqueue([priorities[i], i]);
    }

    priorities.sort((a, b) => b - a);

    let count = 0
    while (true) {
        let current = queue.peek();

        if (current[0] < priorities[count]) {

            queue.enqueue(queue.dequeue());
        } else {
            count += 1;

            const value = queue.dequeue();
            if (location === value[1]) {
                return count;
            }
        }
    }

    return count;
}

console.log(solution([1, 1, 9, 1, 1, 1], 0));

/*
    일단은 값들은 본인의 값은 물론 인덱스 값도 가지고 있어야함
    자유롭게 추가와 제거가 가능해야함 -> 배열은 불가능
    값들을 작은 것들을 계속 뒤로 보내면서 정렬함
*/