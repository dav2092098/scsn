/*
Ayodele, David
INFSCI 2170
HW 6 Pb 2
3/18/19
*/
#include <cstdio>
#include <cassert>
#include <cstdlib>
#include <cstring>
#include <ctime>

/*int a, b;*/

int gccd(int x, int y, int &a, int &b) {
	if (y == 0) {
		a = 1;
		b = 0;
		assert(a*x + b*y == x);
		return x;
	} else {
		int a_t, b_t;
		int r = gccd(y, x % y, a_t, b_t); // given initial values, feedsback into itself, substituting the 2nd parameter, y,  with the remainder each time until the remainder = 0 or 1 (the base case)
		// code below not reached until y = 0 or y = 1 (the base case).
		// if y = 0, a is set to 1 and b is set to 0 and we exit
		// if y = 1, we have found at least one common factor and we cascade up the stack performing the operations below each time until the assertion no longer holds
		a = b_t; // use b_t as the new a
		b = a_t - b_t * (x / y); // subtract from a_t a fraction of b_t, the fraction (x/y), and use this as the new b 
		assert(a * x + b * y == r); // check if r satisfies the relationship, and store result in r if so
		return r;
	}
}


int main() {
	clock_t tic = clock();
	
	#define LINE_MAX 256
	char buf[LINE_MAX];
	char *end;

	char *p, c[128];
	int a, b, s, t, x, y, a2, b2;
	
	
	printf("Please enter an integer: ");
    while (fgets(c, sizeof(c), stdin)) {
        s = strtol(c, &p, 10);
        if (p == c || *p != '\n') {
            printf("Please enter an integer: ");
        } else break;
    }
    
	printf("Please enter another integer (modulus): ");
	while (fgets(c, sizeof(c), stdin)) {
        t = strtol(c, &p, 10);
        if (p == c || *p != '\n') {
            printf("Please enter an integer (modulus): ");
        } else break;
    }
	
	int r = gccd(s, t, a, b);
	
	printf("a = %d\nb = %d\n", a, b);
	printf("a*s + b*t = r =>\n");
	printf("%d * %d + %d * %d = %d\n", a, s, b, t, r);
	
	if (a < 0 && b < 0) {
		a2 = t + a;
		b2 = t + b;
		printf("or\n");
		printf("%d * %d + %d * %d = %d\n", a2, s, b2, t, r);
	} else if (a < 0) {
		a2 = t + a;
		printf("or\n");
		printf("%d * %d + %d * %d = %d\n", a2, s, b, t, r);
	} else if (b < 0) {
		b2 = t + b;
		printf("or\n");
		printf("%d * %d + %d * %d = %d\n", a, s, b2, t, r);
	} 
	
	clock_t toc = clock();
     
    printf("Elapsed time: %f seconds\n", (double)(toc - tic) / CLOCKS_PER_SEC); // CLOCKS_PER_SEC defined in time.h
	return 0;
}
