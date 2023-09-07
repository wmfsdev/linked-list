#!/usr/bin/node

const LinkedList = () => {

    let newNode = {
        value: "head",
        nextNode: {
            value: 2,
            nextNode: {
                value: 3,
                nextNode: {
                    value: 4,
                    nextNode: null
                }
            }
        }
    };

    const append = (value) => {

        let tailNode = newList.tail()
        console.log(tailNode)
        tailNode.nextNode = node(value)

    };

    const prepend = (value) => {    // adds a new node containing value to the start of the list
        return newNode = node(value, head())
    };

    const pop = (copy = newNode) =>  {   // removes the last element from the list
      
        if (copy === newNode) {
            let copy = newNode
        }
        if ( copy.nextNode.nextNode === null ) {
            return copy
        } else {
            copy = copy.nextNode.nextNode
            return pop(copy)
        }
    };

    const tail = (copy = newNode) =>  {   // returns the last node in the list

        if (copy === newNode) {
            let copy = newNode
        } 
        
        if ( copy.nextNode === null ) {
            return copy
        } else {
            copy = copy.nextNode
            return tail(copy)
        }
    };

    const head = () => {    // returns the first node in the list
        return newNode
    };
    
    const size = (copy = newNode, count = 0) => {    // returns the total number of nodes in the list
        
        if (copy === newNode) {
            let copy = newNode
        } 
        
        if ( copy.nextNode === null ) {
            count++
            return count
        } else {
            count++
            copy = copy.nextNode
            return size(copy, count)
        }
    };

    const at = (index, copy = newNode) => {     // returns the node at the given index

        if (copy === newNode) {
            let copy = newNode
        } 

        if ( index === 0 ) {
            return copy
        } else {
            copy = copy.nextNode
            return at(index - 1, copy)
        }

    };

    const find = (value) => {   //  returns the index of the node containing value, or null if not found.


    } 


    const log = () => console.log(newNode);
  

    // const contains = (value) => {} // returns true if the passed in value is in the list and otherwise returns false.
    // const toString = () => {} //  represents your LinkedList objects as strings, so you can print them out and preview them in the console.
    
    return { append, log, tail, head, prepend, pop, size, at, find, toString, newNode };
};

const node = (value = null, nextNode = null) => {
    return { value, nextNode }
};


const newList = LinkedList();