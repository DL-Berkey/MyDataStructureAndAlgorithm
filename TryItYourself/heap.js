class MaxHeap {
    constructor() {
        this.heap = [null];
    }

    push(value) {
        this.heap.push(value);

        let current = this.heap.length - 1;
        let parent = Math.floor(current / 2);

        while (
            parent !== 0 &&
            this.heap[parent] < value
        ) {
            [this.heap[current], this.heap[parent]] = [this.heap[parent], this.heap[current]]

            current = parent;
            parent = Math.floor(current / 2);
        }
    }

    pop() {
        if(this.heap.length === 1) {
            return false;
        }
        let returnValue;

        if (this.heap.length !== 2) {
            returnValue = this.heap[1];
            this.heap[1] = this.heap.pop();
        } else {
            returnValue = this.heap.pop();
        }

        let current = 1;
        let left = 2;
        let right = 3;

        while (
            this.heap[current] < this.heap[left] ||
            this.heap[current] < this.heap[right]
        ) {
            if (this.heap[current] < this.heap[left]) {
                [this.heap[current], this.heap[left]] = [this.heap[left], this.heap[current]];

                current = left;
            } else {
                [this.heap[current], this.heap[right]] = [this.heap[right], this.heap[current]];

                current = right;
            }

            left = current * 2;
            right = current * 2 + 1;
        }

        return returnValue;
    }
}

let heap = new MaxHeap();
heap.push(1);
heap.push(2);
heap.push(3);
heap.push(4);
heap.push(5);

console.log(heap.heap);

console.log(heap.pop());
console.log(heap.heap);
console.log(heap.pop());
console.log(heap.heap);
console.log(heap.pop());
console.log(heap.heap);
console.log(heap.pop());
console.log(heap.heap);
console.log(heap.pop());
console.log(heap.heap);
console.log(heap.pop());
console.log(heap.heap);
