class Sorter {
  constructor() {
    return this;
  }

 add(element) {
    if (this.arr === undefined) {
      this.arr = [];
    } 
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) { 
    this.defaultComparator = function compareNum(a, b) { 
      return a - b; 
    }; 
    indices.sort(this.defaultComparator); 

    if (this.comparator === undefined) { 
      this.comparator = this.defaultComparator; 
    } 

    for (var i = 0; i < indices.length - 1; i++) { 
      for (var j = i + 1; j < indices.length; j++) { 
        var first = indices[i]; 
        var second = indices[j]; 

        if (this.comparator(this.arr[first], this.arr[second]) > 0) { 
          swap(first, second, this.arr) 
        } 
      } 
    }
     
    function swap(first, second, arr) { 
      var temp = arr[first]; 
      arr[first] = arr[second]; 
      arr[second] = temp; 
    } 
  }

  setComparator(compareFunction) {
    return this.comparator = compareFunction;
  }
}

module.exports = Sorter;