Node.js - Word Encoder NLP
=========

It's a basic word encoder. Useful when working on projects, which need encoded words dictionary for **N**atural **L**anguage **P**rocessing (**NLP**).  
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
If the word is not encoded yet, then the module will encode itself and saves it in the local _**dictionary.json**_ file. Next time when you need the encoding of that word it will already exist.  
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
- Get encoding for a single word
```js
const encodedWord = WordEncoder.getEncoding('word'); // returns 88649
```
- Encode an array of words
```js
const wordsToEncode = ['Hi', '!', 'I', 'can', 'encode', 'every', 'word', '.'];

const encodingList = WordEncoder.encodeWords(wordsToEncode);
//[88643, 88644, 88645, 88646, 88647, 88648, 88649, 88650]

const encodingList = WordEncoder.encodeWords(wordsToEncode, true);
//[{"Hi":88643},{"!":88644},{"I":88645},{"can":88646},{"encode":88647},{"every":88648},{"word":88649},{".":88650}]
```

## License
This project is licensed under the MIT License.  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)