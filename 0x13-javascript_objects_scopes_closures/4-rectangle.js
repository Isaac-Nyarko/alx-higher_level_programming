#!/usr/bin/node

/**
 * Represents a parallelogram with 4 right angles.
 */
class Rectangle {
 
  constructor (width, height) {
    if (width > 0 && height > 0) {
      this.width = width;
      this.height = height;
    }
  }

  /**
   * Prints this Rectangle with the character 'X'.
   */
  print () {
    const rowChars = new Array(this.width).fill('X', 0, this.width);
    const rows = new Array(this.height).fill(rowChars.join(''), 0, this.height);
    console.log(rows.join('\n'));
  }

  /**
   * Swaps the width and height of this Rectangle.
   */
  rotate () {
    const temp = this.width;
    this.width = this.height;
    this.height = temp;
  }

  /**
   * Doubles the dimensions of this Rectangle.
   */
  double () {
    this.width *= 2;
    this.height *= 2;
  }
}

module.exports = Rectangle;
