const fib = (n) => {
	return n <= 1 ? 1 : n + fib(n-1);
}

const nfac = (n) => n>=1 ?  n * nfac(n-1) : 1

const nsum = (n) => n>1 ?  n + nsum(n-1) : n

module.exports = { fib,nfac,nsum };
