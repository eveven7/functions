//2x greitesnis, bubble sort

const num = [13, 17, 14, 19, 16];
let temp;
for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
        if (num[i] > num[j]) {
            temp = num[i]
            num[i] = num[j]
            num[j] = temp
        }
    }
}

console.log(num);

//paprastas
for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < num.length; j++) {
        if (num[i] > num[j]) {
            temp = num[i]
            num[i] = num[j]
            num[j] = temp
        }
    }
}

console.log(num);