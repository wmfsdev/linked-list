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

    // const tail = (test = newNode) =>  {   // returns the last node in the list
    //     //   console.log(test)
    //        // let copy = newNode
   
    //        // while (copy) {
    //        //     console.log(copy.value)
    //        //     copy = copy.nextNode
    //        // }
    //        if (test === newNode) {
    //        //    console.log("match")
    //            let test = newNode
    //        //    console.log(test.nextNode)
    //        } 
   
    //            if ( test.nextNode === null ) {
    //             //   console.log("null")
    //                return test
    //            } else {
    //              //  console.log(test)
    //                test = test.nextNode
    //             //   console.log(test)
    //                return tail(test)
    //            }
           
    //    }

    const log = () => console.log(newNode);
        

    return { append, log, tail, newNode };

    // const prepend = (value) => {}
    // const size = () => {}
    // const head = () => {}
    // const tail = () => {}
    // const at = (index) => {}
    // const pop = () => {}
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



