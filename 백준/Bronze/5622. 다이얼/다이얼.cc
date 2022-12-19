#include <iostream>
#include <vector>
#include <cstring>
#include <string>
using namespace std;
const int arsize = 1000;



int main() {

	char ch;

	int sum = 0;
	cin.get(ch);

	while (ch != '\n') {
		if (ch == '0') {
			sum += 11;
		}
		if (ch == '1') {
			sum += 2;
		}
		if (ch >= 'A' && ch <= 'C') {
			sum += 3;
		}
		if (ch >= 'D' && ch <= 'F') {
			sum += 4;
		}
		if (ch >= 'G' && ch <= 'I') {
			sum += 5;
		}
		if (ch >= 'J' && ch <= 'L') {
			sum += 6;
		}
		if (ch >= 'M' && ch <= 'O') {
			sum += 7;
		}
		if (ch >= 'P' && ch <= 'S') {
			sum += 8;
		}
		if (ch >= 'T' && ch <= 'V') {
			sum += 9;
		}
		if (ch >= 'W' && ch <= 'Z') {
			sum += 10;
		}

	
		cin.get(ch);
			
	}

	cout << sum;
	
	
	return 0;
}

