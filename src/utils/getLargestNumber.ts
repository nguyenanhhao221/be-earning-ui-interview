// Hãy viết hàm sắp xếp mãng số bên DƯới để ra ĐƯợc số lớn nhất.
// VD: [1, 10, 11] => Số lớn nhất 11110.
// [0,10,1,99,9,8,79,91,22,32,12]
// [99, 19, 29, 39, 11, 21, 32, 33, 35, 50, 60, 90] [1, 10, 19, 11, 13, 16, 19]

function getLargest(arr: number[]): number {
  return Number(
    arr
      .sort((a, b) => {
        return Number(`${b}${a}`) - Number(`${a}${b}`);
      })
      .join("")
  );
}

console.log(getLargest([1, 10, 11]));
console.log(getLargest([1, 3, 34, 44, 4, 45, 6, 76, 9, 98, 23]));
console.log(getLargest([0, 10, 1, 99, 9, 8, 79, 91, 22, 32, 12]));
console.log(getLargest([99, 19, 29, 39, 11, 21, 32, 33, 35, 50, 60, 90]));
console.log(getLargest([1, 10, 19, 11, 13, 16, 19]));
console.log(getLargest([99, 300, 89]));
console.log(getLargest([99, 991, 9995]));
console.log(getLargest([99, 991]));

export {};
