const getPrime = (value: number, prime: number = 2): number => {
  if (value === 1) return prime
  return (value % prime === 0) ? getPrime(value / prime, prime) : getPrime(value, prime + 1)
}
console.log(getPrime(600851475143))
