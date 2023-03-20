export class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }

    append = value => {
        const newNode = new ListNode(value)

        if (this.head === null) {
            this.head = newNode
        }
        else {
            let currentNode = this.head
            while (currentNode.next != null) {
                currentNode = currentNode.next
            }

            currentNode.next = newNode
        }
        ++this.length
    }

    prepend = value => {
        const newNode = new ListNode(value, this.head)
        this.head = newNode

        ++this.length
    }

    tail = () => {
        let currentNode = this.head
        while (currentNode.next !== null) {
            currentNode = currentNode.next
        }

        return currentNode
    }

    at = index => {
        let currentNode = this.head
        let currentIndex = 0
        while (currentIndex < this.length) {
            if (currentIndex === index) {
                return currentNode
            }
            ++currentIndex
            currentNode = currentNode.next
        }
        return -1
    }

    
    pop = () => {
        let currentNode = this.head
        while (this.head !== null && currentNode.next !== null) {
            const nextNode = currentNode.next
            // If the next node is the last node
            if (nextNode.next === null) {
                currentNode.next = null
                return nextNode
            }
            currentNode = nextNode
        }
        const oldHead = this.head
        this.head = null
        return oldHead
    }

    size = () => {
        return this.length
    }

    toString = () => {
        let currentNode = this.head
        let string = ""
        while (currentNode != null) {
            string += `( ${currentNode.value} ) -> `
            currentNode = currentNode.next
        }
        string += "null"
        return string
    }
}

class ListNode {
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }
}