#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main() {
	
	

	string input;

	cin >> input;


	int count = 0;

	for (int i = 0;i<input.length(); i++) {
		
		count++;

		if (count % 10 == 0) {
			printf("%c\n", input[i]);
			count = 0;
		}

		else {
			cout << input[i];
		}

		

	}

	return 0;


}