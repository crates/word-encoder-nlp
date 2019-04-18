'use strict';
const jsonfile = require('jsonfile');

let dictionaryFilePath = __dirname + '/dictionary.json';
let dictionary = null;

const loadDictionary = (forceRead = false) => {
  if (forceRead || !dictionary) {
    try {
      dictionary = jsonfile.readFileSync(dictionaryFilePath);
    } catch (error) {
      console.error(error);
      dictionary = {};
    }
  }
  return dictionary;
};

const writeFile = (encoding) => {
  let dictionary = loadDictionary();
  dictionary = {...dictionary, ...encoding};

  try {
    jsonfile.writeFileSync(dictionaryFilePath, dictionary);
    loadDictionary(true);
  } catch (error) {
    console.error(error);
  }
};

const getMaxIndex = () => {
  const dictionary = loadDictionary();

  return Math.max(...Object.values(dictionary));
};

exports.getSize = () => {
  const dictionary = loadDictionary();

  return Object.keys(dictionary).length;
};

exports.encodeWord = (word = null) => {
  if (word) {
    const maxIndex = getMaxIndex();
    const nextIndex = (maxIndex + 1);
    const encoding = {
      [word]: nextIndex
    };
    writeFile(encoding);
    return nextIndex;
  }
  return null;
};

exports.encodeWords = (wordArray = []) => {
  if (wordArray.isArray()) {
    wordArray.forEach(word => {
      this.encodeWord(word);
    });
  }
};

exports.getEncoding = (word) => {
  const dictionary = loadDictionary();
  let encoding = dictionary[word];

  if (!encoding) {
    encoding = this.encodeWord(word);
  }

  return encoding;
};

exports.getEncoddings = () => {
  return loadDictionary();
};
