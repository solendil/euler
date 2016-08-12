
// The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.
// There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.
// How many circular primes are there below one million?
problem[35] = {
    answer: 55,
    solver: function() {
      let res = 0;
      out: for (let i of range(0,999999)) {
        for (let nb of digit_rotations(i))
          if (!isPrime(nb))
            continue out;
        res++;
      }
      return res;
    }
};
