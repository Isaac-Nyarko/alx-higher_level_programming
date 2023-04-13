#!/usr/bin/node

const Rectangle = require('./4-rectangle');

/**
 * Represents a Rectangle with 4 equal sides.
 */
class Square extends Rectangle {
  constructor (size) {
    super(size, size);
  }
}

module.exports = Square;
