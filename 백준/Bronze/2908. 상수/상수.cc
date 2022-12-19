#include <iostream>
#include <vector>
#include <cstring>
#include <string>
using namespace std;
const int arsize = 1000;
int numsex(int);



int main() {

	int a;
	int b;
	int c;

	cin >> a >> b;
	
	
    c =	numsex(a)>numsex(b)? numsex(a) : numsex(b);

	cout << c;
	
	
	

	return 0;
}



int numsex(int x) {

	return (((x % 100) % 10 * 100) + ((x % 100) / 10) * 10 + x / 100);

}
