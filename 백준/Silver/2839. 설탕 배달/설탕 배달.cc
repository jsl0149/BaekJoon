#include <iostream>
#include <vector>
#include <cstring>
#include <string>
const int arsize = 1000;
using namespace std;



int main() {

	int n;
	int mok3 = 0;
	int mok5 = 0;
	int count = 0;
	int i = 0;


	cin >> n;

	while (count != 1) {

		if ((n - (3 * i)) % 5 == 0) {

			mok3 = i;
			mok5 = (n - (3 * i)) / 5;
			++count;
	
		}
		++i;
		
		
	}
	if (n == 4 || n == 7) {

		cout << -1;
	}
	else 

	
		cout << mok3 + mok5;
	
	



	
	return 0;
}