#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;

int main() {

	int num;

	cin >> num;

	for (int i = 1; i <= num; i++) {

		for (int j = num - i - 1; j>=0; j--) {

			cout << " ";

		}
		
		for (int t = 0; t < 2 * i - 1; t++) {

			if (t % 2 == 0) cout << "*";

			else cout << " ";

		}

		cout << "\n";

	}




}