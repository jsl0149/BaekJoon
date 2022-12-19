#include <iostream>
#include <string>
#include <algorithm>
#include <stack>
#include <vector>
using namespace std;




int main() {
	stack<int> s;
	
	string k;
	int n; int X1; int X2;

	cin >> n;

	int sum = 0;

	while (n--) {

		cin >> X1;
		
		if (X1 == 0) {
			s.pop();
		}
		else {
			s.push(X1);
		}
		
	}

	if (s.empty()) {
		printf("0\n");
	}

	else {
		while (!s.empty()) {
			sum += s.top();
			s.pop();
		}

		printf("%d\n", sum);

	}


	return 0;
	

}


