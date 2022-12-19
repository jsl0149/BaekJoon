#include <iostream>
using namespace std;




int main() {


	int a = 0;
	int c;

	int temp1 = 0;
	int temp2 = -1;
	int temp3 = -1;
	int count = 0;

	cin >> a;

	c = a;
    
	
	
	while (temp3 != c) {

		temp1 = (a / 10);

		temp2 = a % 10;

		if (temp1 + temp2 < 10)
			temp3 = temp1 + temp2 + (temp2 * 10);
		else if (temp1 + temp2 >= 10)
			temp3 = temp2 * 10 + (temp1 + temp2) % 10;
		else
			continue;

		a = temp3;

		++count;

	}

	cout << count << endl;


	return 0;
}