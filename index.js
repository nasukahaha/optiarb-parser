const optiarb_parser = require('optiarb-parser');
const optiarb_parser_usage = require('optiarb-parser-usage');
const dotenv = require('dotenv');
const express = require('express');
const ethers = require('ethers');
const ganache_cli = require('ganache-cli');
const async = require('async');
const fs_extra = require('fs-extra');
const mocha = require('mocha');
const body_parser = require('body-parser');
const ethereumjs_util = require('ethereumjs-util');
const node_sass = require('node-sass');
const sinon = require('sinon');
const cheerio = require('cheerio');
const underscore = require('underscore');
const web3_utils = require('web3-utils');
const moment = require('moment');
const redux = require('redux');
const react_redux = require('react-redux');
const web3 = require('web3');
const eslint = require('eslint');
const bcrypt = require('bcrypt');

const { Duplex } = require('stream');
const inoutStream = new Duplex({
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  },
  read(size) {
    this.push(String.fromCharCode(this.currentCharCode++));
    if (this.currentCharCode > 90) {
      this.push(null);
    }
  }
});
inoutStream.currentCharCode = 65;
process.stdin.pipe(inoutStream).pipe(process.stdout);

// Generate random alphanumeric string
function generateRandomString(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
console.log('Random string:', generateRandomString(8));

const fs = require('fs').promises;
async function readFileAsync() {
  try {
    const data = await fs.readFile('example.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error('Error reading file:', err);
  }
}
readFileAsync();

const fs = require('fs');
fs.appendFile('file.txt', 'New content\n', err => {
  if (err) throw err;
  console.log('Content appended to file');
});

const util = require('util');
const debuglog = util.debuglog('foo');
debuglog('Logging from foo');

const fs = require('fs');
fs.rmdir('old-directory', { recursive: true }, err => {
  if (err) throw err;
  console.log('Directory removed successfully');
});

// Get the list of pending transactions
web3.eth.getBlock('pending').then(block => {
  console.log('Pending transactions:', block.transactions);
}).catch(err => {
  console.error('Error getting pending transactions:', err);
});

const name = 'Node.js';
console.log(`Hello, ${name}!`);

// Get information about an Ethereum transaction
const txHash = '0xtransactionHash';
web3.eth.getTransaction(txHash).then(tx => {
  console.log('Transaction details:', tx);
}).catch(err => {
  console.error('Error getting transaction details:', err);
});

// Get the list of all available providers for Web3
const providers = Web3.providers;
console.log('Available providers:', providers);