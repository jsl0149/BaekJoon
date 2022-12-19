#include <iostream>
#include <vector>
#include <cstring>
#include <string>
using namespace std;



int main() {

	int num[10];
	int check = 0;
	for (int i = 0; i < 8; i++) {

		cin >> num[i];

	}

	for (int i = 0; i < 7; i++) {

		

		if (num[i + 1] > num[i] ) {

			++check;

		}

		else if (num[i + 1] < num[i] ) {

			--check;

		}

	}
	

	if (check == 7) {

		cout << "ascending";

	}

	else if (check == -7) {

		cout << "descending";

	}
	else
		cout << "mixed";


	

	return 0;
}

