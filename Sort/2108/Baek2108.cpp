#include <iostream>
#include <string>
#include <algorithm>
#include <stack>
#include <vector>
#include <cmath>;
using namespace std;




int main() {
	
	
	int n; double sum = 0;
   
	int number;

	cin >> n;

	int* arr = new int[n];
	int check[8001] = { 0, };
	int check2[8001] = { 0, };


	for (int i = 0; i < n; i++) {
		cin >> number;
		sum += number;
		arr[i] = number;
		check[number + 4000]++;
	}
	
	sort(arr, arr + n);

	int max = 0;
	int count = 0;
	for (int i = 1; i < 8001; i++) {

		if (check[i] > max) {
			max = check[i];
		}
	}


	for (int i = 0; i < 8001; i++) {

		if (check[i] == max) {
			check2[count++] = i-4000;
		}

	}


	cout << round(sum / n) << '\n';
	cout << arr[(n - 1) / 2] << '\n';

	if (count == 1) {
		cout << check2[0] << '\n';
	}
	else {
		cout << check2[1] << '\n';
	}

	cout << arr[n - 1] - arr[0] << '\n';
	

	return 0;

}


