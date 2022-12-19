#include <iostream>
#include <vector>
using namespace std;
const int arsize = 20;




int main() {


	int n,temp;
	char num;
	int sum = 0;
	int count = 0;

	(cin >> n).get();

	cin.get(num);

	for (int i = 0; i < n; i++) {

		
		temp = num - '0';
		sum += temp;
		cin.get(num);

	
}

	
	cout << sum << endl;
	

	

	return 0;
}

