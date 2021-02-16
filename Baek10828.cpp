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

	while (n--) {

		cin >> k;

		if (k == "push") {
			cin >> X1;
			s.push(X1);
		}

		else if (k == "pop") {
			if (s.size() == 0) {
				printf("-1\n");
			}
			else {
				printf("%d\n", s.top());
				s.pop();
			}
		}

		else if (k == "size") {
			printf("%d\n", s.size());
		}

		else if (k == "empty") {
			printf("%d\n", s.empty());
		}
		else if (k == "top") {
			if (s.size() == 0) {
				printf("-1\n");
			}
			else
			printf("%d\n", s.top());
		}

	}

	return 0;
	

}


