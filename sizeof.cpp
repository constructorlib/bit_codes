int SOE(int *x, int size){
    int sum = 0;
    for (size_t i = 0; i < size; i++)
        sum += x[i];
    return sum;
}

int main(){
    int arr[10];
    for (int i = 0; i < 10; i++)
        arr[i] = i*3;
    int size = sizeof(arr)/sizeof(arr[0]); // It's because passing an array to a function actually passes a pointer
    cout << SOE(arr, size); // passed as a reference.
    return 0;
}

