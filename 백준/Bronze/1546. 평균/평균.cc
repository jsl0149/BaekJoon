#include <iostream>
#include <vector>
#include <cstring>
#include <string>
const int arsize = 1000;
using namespace std;

double findmax(double x[], int);


int main() {
	
	double score[arsize];
	int n;
	double max;
	double sum = 0;

	cin >> n;

	for (int i = 0; i < n; i++) {

		cin >> score[i];

	}

	max = findmax(score, n);
	
	for (int i = 0; i < n; i++) {

		score[i] = score[i] / max * 100;

		sum += score[i];
		
	}

	cout.precision(4);
	cout.setf(ios_base::showpoint);


	cout << (double) sum  / n << endl;

	
	
	return 0;
}

double findmax(double jump[],int x) {

	double maxi = -1;
	maxi = jump[0];

	for (int i = 1; i < x; i++) {

		

		if (jump[i] > maxi) {

			maxi = jump[i];

		}

	}

	return maxi;

}
