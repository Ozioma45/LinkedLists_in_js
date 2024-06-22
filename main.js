// main.js
import { LinkedList } from "./LinkedList.js";

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.prepend(0);

console.log(list.toString()); // ( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> null
console.log("Size:", list.size()); // Size: 4
console.log("Head:", list.head().value); // Head: 0
console.log("Tail:", list.tail().value); // Tail: 3
console.log("At index 2:", list.at(2).value); // At index 2: 2
console.log("Contains 2:", list.contains(2)); // Contains 2: true
console.log("Index of 2:", list.find(2)); // Index of 2: 2

list.pop();
console.log(list.toString()); // ( 0 ) -> ( 1 ) -> ( 2 ) -> null

list.insertAt(1.5, 2);
console.log(list.toString()); // ( 0 ) -> ( 1 ) -> ( 1.5 ) -> ( 2 ) -> null

list.removeAt(2);
console.log(list.toString()); // ( 0 ) -> ( 1 ) -> ( 2 ) -> null
