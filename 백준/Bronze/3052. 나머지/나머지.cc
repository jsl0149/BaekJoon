#include <iostream>
#include <vector>
#include <cstring>
#include <string>
const int arsize = 10;
using namespace std;



int main() {
	
	int num[arsize];
	int namu[42] = { 0, };
	int count = 0;

	for (int i = 0; i < arsize; i++) {

		cin >> num[i];

	}

	for (int i = 0; i < arsize; i++) {

		num[i] = num[i] % 42;

	}
	
	
	
	for (int i = 0; i < 42; i++) {

		for (int j = 0; j < arsize; j++) {

			if (num[j] == i) {

				++namu[i];

			}

		}
	}


	for (int i = 0; i < 42; i++) {

		if (namu[i] >= 1) {

			++count;

		}

	}

	cout << count;

	

	return 0;
}
