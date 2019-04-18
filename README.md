Node.js - Word Encoder NLP
=========

It's a basic word encoder. Useful when working on project that needs encoded words dictionary for **N**atural **L**anguage **P**rocessing (**NLP**).  
Includes a **JSON** with preencoded words (source: https://storage.googleapis.com/tensorflow/tf-keras-datasets/imdb_word_index.json).  
You can use it for your own [sentiment classification](https://github.com/tensorflow/tfjs-examples/tree/master/sentiment) or [text classification](https://www.tensorflow.org/alpha/tutorials/sequences/text_classification_rnn).
## Installation
Using npm:  
```cli
npm install word-encoder-nlp
```
## Usage
Import package:  
```js
const WordEncoder = require('word-encoder-nlp');
```
Then get the integer for your encoded word:
```js
const word = 'google';
const encodedWord = WordEncoder.getEncoding(word);
```
If the word is not encoded yet, then the module will encodes itself and saves it in the local _**dictionary.json**_ file. Next time when you need the encoding of that word it will already exists.  
## Features
This module contains the following features:  
- Get size of your dictionary
```js
const dictionarySize = WordEncoder.getSize();
```
- Listing all available encodings
```js
const dictionary = WordEncoder.getEncodings();
```
- Encode an array of words
```js
const wordsToEncode = ['Hi', '!', 'I', 'can', 'encode', 'every', 'word', '.'];
WordEncoder.encodeWords(wordsToEncode);
```
- Get encoding for a single word
```js
const encodedWord = WordEncoder.getEncoding('word');
```

## License
This project is licensed under the MIT License.  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)