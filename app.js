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


    //let newNode = node("head")
    // { value: null, nextNode: null }

    // const append = (value) => {
    //     console.log(newNode)
    //     if ( newNode.value === null ) {
            
    //      //   console.log(newNode)
    //         return newNode = node(value)
    //     } else {


    //        return append(newNode.nextNode)
    //        //newNode.nextNode = node(value)
    //        // console.log(newNode)
           
    //     }
    // };

    const append = (value) => {

        let tailNode = newList.tail()
        console.log(tailNode)
        tailNode.nextNode = node(value)

        //console.log(newNode)
        // if ( newNode.value === null) {
        //     newNode = node(value)
        //     return newNode
        // } 
        // else {
        //      newNode.nextNode = node(value)
        //      return newNode.nextNode
        // }
        //     //newNode.nextNode = node(value)
        //     // console.log(newNode) 
        // }
    };

    const prepend = (value) => {    // adds a new node containing value to the start of the list
        return newNode = node(value, head())
    }

    const pop = () => {     // removes the last element from the list

        let tail = newList.tail()
        //delete tail.value 
       // tail.nextNode = null
        tail = null
        // must be an object that contains a nextNode set to null

        // tail = newList.tail()
        // tail.nextNode = null

        
        // if ( newNode.nextNode === null ) {
        //     delete newNode
        // } else {
        //     newNode = newNode.nextNode
        //     return pop(newNode)
        // }
    }    

    const tail = (copy = newNode) =>  {   // returns the last node in the list
    
        //   console.log(copy)
        // let copy = newNode
        // while (copy) {
        //     console.log(copy.value)
        //     copy = copy.nextNode
        // }

        if (copy === newNode) {
            let copy = newNode
        } 
        
        if ( copy.nextNode === null ) {
            return copy
        } else {
            copy = copy.nextNode
            return tail(copy)
        }
    }

    const head = () => {    // returns the first node in the list
        return newNode
    }

    const log = () => console.log(newNode);
        
    return { append, log, tail, head, prepend, pop, newNode };

    
    // const size = () => {}
    // const tail = () => {}
    // const at = (index) => {}
    // 
    // const contains = (value) => {}
    // const find = (value) => {}
    // const toString = () => {}
    
};

const node = (value = null, nextNode = null) => {
    return { value, nextNode }
}


const newList = LinkedList();

//newList.append(42)
//newList.append(12)

//console.log(newList.newNode)
//newList.append(newNode.value)    



