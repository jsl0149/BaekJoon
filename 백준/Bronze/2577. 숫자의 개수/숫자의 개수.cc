#include <iostream>
#include <vector>
#include <cstring>
#include <string>
using namespace std;



int main() {
	int very[10] = {0,};
	int a, b, c;
	int sum;

	cin >> a >> b >> c;

	sum = a * b * c;

	while (sum > 0) {

		very[sum % 10]++;
		sum /= 10;

	}

	for (int i = 0; i < 10; i++) {

		cout << very[i] << endl;

	}




	return 0;
}
