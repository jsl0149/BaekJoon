#include <iostream>
#include <vector>
#include <cstring>
#include <string>

using namespace std;


	
int main()
{
	
	int num;
	int i = 0;
	int j = 0;
	cin >> num;
	int sum = 0;
	int sem = 0;
	while (1) {

		if (num == 1) {
			cout << 1 << endl;
			break;
		}

		if (i ==0) {

			sum = 7;

		}
		else if(i == 1){
			i++;
			continue;
			
		}
		else
		{

			sum = sum + 6 * i;

		}
		
		if (j == 0) {

			sem = 2;

		}
		else
		{
			sem = sem + 6 * j;
		}
		
		if (sem <= num && sum >= num && i == 0) {

			cout << i + 2 << endl;
			break;
		}
		else if (sem <= num && sum >= num && i >= 2) {

			cout << i + 1 << endl;
			break;
		}
		

		
		j++;
		i++;
	}





	return 0;
}
