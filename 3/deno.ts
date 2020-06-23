// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?
// 600851475143の素因数で最も大きな数は？

let target = 600851475143

// function isPrime(value: number, current: number): boolean {
//   if (current === 1) return true
//   if (value % current === 0) return false
//   return isPrime(value, current - 1)
// }

// function* genPrime() {
//   let current = 1
//   while(true) {
//     current++
//     if (isPrime(current, current - 1)) {
//       yield current
//     }
//   }
// }

// const gen: Generator = genPrime()
// let prime: number = gen.next().value

let prime: number = 2

while(true) {
  if (target % prime === 0) {
    target = target / prime
  } else {
    prime++
  }
  if (target === 1) {
    break
  }
}
console.log(prime)
