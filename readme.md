# LinkedList Implementation in JavaScript

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [Creating a LinkedList](#creating-a-linkedlist)
  - [Appending a Node](#appending-a-node)
  - [Prepending a Node](#prepending-a-node)
  - [Getting the Size](#getting-the-size)
  - [Accessing the Head](#accessing-the-head)
  - [Accessing the Tail](#accessing-the-tail)
  - [Accessing a Node by Index](#accessing-a-node-by-index)
  - [Popping the Last Node](#popping-the-last-node)
  - [Checking if Value Exists](#checking-if-value-exists)
  - [Finding the Index of a Value](#finding-the-index-of-a-value)
  - [Printing the LinkedList](#printing-the-linkedlist)
  - [Inserting a Node at an Index](#inserting-a-node-at-an-index)
  - [Removing a Node at an Index](#removing-a-node-at-an-index)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project implements a basic singly linked list in JavaScript. It includes methods to append, prepend, insert, and remove nodes, as well as various utility methods for working with the list. This project is part of the JavaScript full stack curriculum from ([The Odin Project](https://www.theodinproject.com/lessons/javascript-linked-lists)).

## Features

- Append a node to the end of the list
- Prepend a node to the start of the list
- Get the size of the list
- Access the head (first node) of the list
- Access the tail (last node) of the list
- Access a node at a specific index
- Pop the last node from the list
- Check if a value exists in the list
- Find the index of a value in the list
- Print the list as a string
- Insert a node at a specific index
- Remove a node at a specific index

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/linked-list-js.git
   ```
2. Navigate to the project directory:
   ```bash
   cd linked-list-js
   ```
3. Install dependencies (if any):
   ```bash
   npm install
   ```

## Usage

### Creating a LinkedList

First, import the `LinkedList` class from the module.

```javascript
import { LinkedList } from "./LinkedList.js";

const list = new LinkedList();
```

### Appending a Node

Add a node to the end of the list.

```javascript
list.append(10);
list.append(20);
```

### Prepending a Node

Add a node to the start of the list.

```javascript
list.prepend(5);
```

### Getting the Size

Get the total number of nodes in the list.

```javascript
console.log(list.size()); // Output: 3
```

### Accessing the Head

Get the first node in the list.

```javascript
console.log(list.head()); // Output: Node { value: 5, nextNode: Node { value: 10, ... } }
```

### Accessing the Tail

Get the last node in the list.

```javascript
console.log(list.tail()); // Output: Node { value: 20, nextNode: null }
```

### Accessing a Node by Index

Get the node at a specific index.

```javascript
console.log(list.at(1)); // Output: Node { value: 10, nextNode: Node { value: 20, ... } }
```

### Popping the Last Node

Remove and return the last node from the list.

```javascript
console.log(list.pop()); // Output: Node { value: 20, nextNode: null }
```

### Checking if Value Exists

Check if a value exists in the list.

```javascript
console.log(list.contains(10)); // Output: true
console.log(list.contains(100)); // Output: false
```

### Finding the Index of a Value

Find the index of a node with a specific value.

```javascript
console.log(list.find(10)); // Output: 1
console.log(list.find(100)); // Output: null
```

### Printing the LinkedList

Represent the list as a string.

```javascript
console.log(list.toString()); // Output: ( 5 ) -> ( 10 ) -> null
```

### Inserting a Node at an Index

Insert a node at a specific index.

```javascript
list.insertAt(15, 1);
console.log(list.toString()); // Output: ( 5 ) -> ( 15 ) -> ( 10 ) -> null
```

### Removing a Node at an Index

Remove the node at a specific index.

```javascript
list.removeAt(1);
console.log(list.toString()); // Output: ( 5 ) -> ( 10 ) -> null
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
