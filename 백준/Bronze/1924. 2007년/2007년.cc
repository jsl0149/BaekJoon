#include <iostream>

using namespace std;

int month[13] = { -1, 31,28,31,30,31,30,31,31,30,31,30,31 };

string day[8] = { "SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT" };

int main() {

	int a, b;

	cin >> a >> b;

	if (a == 1) {
		cout << day[b % 7];
	}

	else {

		int sum = 0;

		for (int i = 1; i < a; i++) sum += month[i];
		
		cout << day[(sum + b) % 7];

	}
	
	return 0;


}