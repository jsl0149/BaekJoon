#include <iostream>
#include <vector>
using namespace std;
const int arsize = 20;




int main() {

	char str[100];

	cin >> str;
	
	for (char i = 'a'; i <= 'z'; i++) {

		int count = 0;
		int res = -1;

		while (str[count] != '\0') {
		
			if (str[count] == i){
				res = count;
				break;
		}

		++count;

		}

	cout << res << " ";

	}


	


	return 0;
}

