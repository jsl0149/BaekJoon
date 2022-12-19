#include <iostream>
#include <vector>
#include <cstring>
#include <string>

using namespace std;


	
int main()
{
	int student[1000];
	double average[1000];
	int count = 0;
	int num;
	int k;
	int sex;

	cin >> num;
	sex = num;
	while (count != sex) {
		

		cin >> k;
	    int sum = 0;
		double pyeong = 0;
		double stcount = 0;
		static int j = 0;

		for (int i = 0; i < k; i++) {

			cin >> student[i];
			sum += student[i];
		}
		
		pyeong = sum / k;

		for (int i = 0; i < k; i++) {

			if (student[i] > pyeong) {
			
				stcount++;

			}

		}

		average[j++] = (stcount / k) * 100;
		

		count++;

	}
	

	cout.setf(ios_base::floatfield, ios_base::fixed);
	cout.precision(3);
	for (int i = 0; i < num; i++) {

		cout << average[i] << "%" << endl;

	}
	
	



	return 0;
}



