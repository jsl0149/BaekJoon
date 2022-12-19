#include <iostream>
#include <vector>
#include <cstring>
#include <string>
using namespace std;



int main() {

	int num[10];

	for (int i = 0; i < 9; i++) {

		cin >> num[i];

	}

	int max = -1;
	int maxindex = 0;

	for (int i = 0; i < 9; i++) {

		if (max < num[i]) {
			max = num[i];
			maxindex = i+1;
		}

	}

	cout << max << endl << maxindex;
	
	
	

	

	return 0;
}
