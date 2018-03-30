console.log([...Array(1000).keys()].filter(i => i % 3 == 0 || i % 5 == 0).reduce((c, i) => c + i));
