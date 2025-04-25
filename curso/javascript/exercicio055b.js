function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  const termos = 10;
  console.log("Sequência de Fibonacci (recursiva):");
  for (let i = 0; i < termos; i++) {
    console.log(fibonacci(i));
  }
  