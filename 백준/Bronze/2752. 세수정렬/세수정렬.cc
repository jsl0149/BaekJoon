#include <iostream>
#include <fstream>
#include <vector>
#include <string>
using namespace std;

enum direction { MIN = 1, MAX = -1 };

class Heap {
public:
	vector<int> v;
	int heap_size;
	int root_index;
	int direction;
public:
	Heap(int direction) {

		v.push_back(-1);
		root_index = 1;
		heap_size = 0;
		this->direction = direction;
	}

	void swap(int idx1, int idx2) {
		int tmp = v[idx2];
		v[idx2] = v[idx1];;
		v[idx1] = tmp;
	}

	void upHeap(int idx) {

		if (idx == root_index) {
			return;
		}

		else {

			int parent = idx / 2;

			if (v[idx] * direction < v[parent] * direction) {
				swap(idx, parent);
				upHeap(parent);
			}

		}

	}

	void downHeap(int idx) {

		int left = idx * 2;
		int right = idx * 2 + 1;

		if (right <= heap_size) {
			if (v[left] * direction <= v[right] * direction) {
				if (v[left] * direction < v[idx] * direction) {
					swap(left, idx);
					downHeap(left);
				}
				else return;
			}

			else {

				if (v[right] * direction < v[idx] * direction) {
					swap(right, idx);
					downHeap(right);
				}
				else return;

			}

		}

		else if (left <= heap_size) {

			if (v[left] * direction < v[idx] * direction) {
				swap(left, idx);
				downHeap(left);
			}
			else return;

		}

		else return;

	}

	void insert(int e) {

		v.push_back(e);
		heap_size++;
		upHeap(heap_size);

	}

	int pop() {

		if (heap_size == 0) {
			return -1;
		}
		else {
			int top = v[root_index];
			v[root_index] = v[heap_size]; heap_size--;
			v.pop_back();
			downHeap(root_index);
			return top;
		}


	}

	int top() {

		if (heap_size == 0) {
			return -1;
		}

		else {
			return v[root_index];
		}
	}

	int isEmpty() {

		if (heap_size == 0) {
			return 1;
		}
		else {
			return 0;
		}

	}

	int size() {
		return heap_size;
	}

	void print() {

		if (heap_size == 0) {
			cout << "Empty\n";
		}
		else {
			for (int i = 1; i <= heap_size; i++) {

				cout << v[i] << " ";

			}

			cout << endl;
		}
	}

};


int main() {

	string k;
	int num, num1, num2, X1, X2, X3;
	Heap LJS(MIN);

	num = 3;

	while (num--) {

		cin >> X1;

		LJS.insert(X1);

	}

	while (LJS.size() != 0) {
		
		cout << LJS.pop() << " ";

	}
	
	cout << endl;


	return 0;

}