#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main() {

	string input = "";


	int num;

	cin >> num;

	cin >> input;

	int sum = 0;

	for (int i = 0; i < num; i++) {

		sum += input[i] - '0';

	}

	cout << sum << "\n";



	return 0;

}