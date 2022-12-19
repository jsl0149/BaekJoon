#include <iostream>
#include <vector>
#include <cstring>
#include <string>
using namespace std;
const int arsize = 1000;

struct sibal {

	string a;
	int num;

};


int main() {

	sibal *str = new sibal[arsize];
	int n;
	cin >> n;

	

	for (int i = 0; i < n; i++) {
		

	    (cin >> str[i].num).get();
		cin >> str[i].a;


	}
	
	for(int i = 0;i<n;i++){

		for (int j = 0; j < (str[i].a).size(); j++) {

			for (int k = 0; k < str[i].num; k++) {
				cout << (str[i].a)[j];
			}

		}
		cout << endl;
	}

    
     delete [] str;
	
	

	return 0;
}
