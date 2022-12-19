#include <iostream>
#include <vector>
#include <cstring>
#include <string>
using namespace std;
const int arsize = 1000;



int main() {

	string str;
	int count = 0;

	cin >> str;

	for (int i = 0; i < str.size(); i++) {

		if (str[i] == '=') {

			--count;


		}
		else if (str[i] == 'd' && str[i + 1] == 'z' && str[i + 2] == '=') {
			--count;
			

		}
		else if (str[i] == '-') {

			--count;


		}
		else if (str[i] == 'l' && str[i + 1] == 'j') {

			--count;


		}
		else if (str[i] == 'n' && str[i + 1] == 'j') {

			--count;


		}
		
			

		++count;


	}
	
	cout << count;
	
	


	
	

	return 0;
}
