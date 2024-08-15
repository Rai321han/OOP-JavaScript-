class MathFn {
  sum(...inputs) {
    switch (
      arguments.length // or we can use "inputs.length"
    ) {
      case 2: {
        const [a, b] = inputs;
        return a + b;
      }
      case 3: {
        const [a, b, c] = inputs;
        return a + b + c;
      }
      case 4: {
        const [a, b, c, d] = inputs;
        return a + b + c + d;
      }
    }
  }
}

const math = new MathFn();
console.log(math.sum(3, 4)); // 7
console.log(math.sum(3, 4, 3)); // 10
console.log(math.sum(1, 4, 3, 5)); // 13
