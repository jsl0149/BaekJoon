#include <iostream>
using namespace std;

int number = 10;

int datak[10] = { 1,10,5,8,7,6,4,3,2,9 };


void quickSort(int *data, int start, int end) {
	if (start >= end) {
		return;
	}

	int key = start;
	int i = start + 1;
	int j = end;
	int temp;

	while (i <= j) {

		while (data[i] <= data[key]) {
			i++;
		}

		while (data[j] >= data[key] && j > start) {
			j--;
		}


		if (i > j) {

			temp = data[j];
			data[j] = data[key];
			data[key] = temp;

		}

		else {
			temp = data[j];
			data[j] = data[i];
			data[i] = temp;
		}

	}
    
	quickSort(data, start, j - 1);
	quickSort(data, j + 1, end);


}

int main() {


	int N = 0; int temp;

	cin >> N;

	int *dest = new int[N];

	int count = N;

	for (int i = 0; i < N; i++) {
		cin >> temp;

		dest[i] = temp;
	}

	quickSort(dest, 0, N-1);

	for (int i = 0; i < N; i++) {

		cout << dest[i] << " ";
	}

	cout << endl;


	delete[] dest;

	return 0;
}