#include <iostream>
#include <vector>
#include <cstring>
#include <string>
using namespace std;
const int arsize = 1000;



int main() {

	int alp[26] = {0,};
	
	char str;

	cin.get(str);
	
	while (str != '\n') {

		if (str <= 'z' && str >= 'a') {

			++alp[str - 'a'];

		}
		
		if (str <= 'Z' && str >= 'A') {

			++alp[str - 'A'];

		}

		cin.get(str);

	}

	int max, i;
	int maxindex = 0;
	int count = 0;
	for (max=-1, i= 0; i < 26; i++) {

		if (alp[i] > max) {

			max = alp[i];
			maxindex = i;
			count = 0;
		}

		else if (max == alp[i]){
			++count;
			}

	}
	
	if (count > 0) {
		cout << "?" << endl;
	}
	else {
		cout << (char)(maxindex + 65) << endl;
	}

	
	
	
	
	

	return 0;
}
