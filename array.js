// array 100 nilai random (1-50)
let arr = [];
for (let i = 0; i < 100; i++) {
  arr.push(Math.floor(Math.random() * 50) + 1);
}

let genap = [];
let ganjil = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    genap.push(arr[i]);
  } else {
    ganjil.push(arr[i]);
  }
}
console.log("Array genap:", genap);
console.log("Array ganjil:", ganjil);

// mencari nilai min
let genapMin = Math.min(...genap)
let ganjilMin = Math.min(...ganjil)
if (genapMin > ganjilMin) {
  console.log("Min lebih besar array Genap yaitu:", genapMin)
  console.log("sedangkan array ganjil:", ganjilMin)
} else if (genapMin < ganjilMin) {
  console.log("Min lebih besar array Ganjil yaitu:", ganjilMin)
  console.log("sedangkan array genap:", genapMin)
}

// mencari nilai max
let genapMax = Math.max(...genap)
let ganjilMax = Math.max(...ganjil)
if (genapMax > ganjilMax) {
  console.log("Max lebih besar array Genap yaitu:", genapMax)
  console.log("sedangkan array ganjil:", ganjilMax)
} else if (genapMax < ganjilMax) {
  console.log("Max lebih besar array Ganjil yaitu:", ganjilMax)
  console.log("sedangkan array genap:", genapMax)
}

// mencari nilai total
let genapTotal = genap.reduce((acc, curr) => acc + curr, 0);
let ganjilTotal = ganjil.reduce((acc, curr) => acc + curr, 0);
if (genapTotal > ganjilTotal) {
  console.log("Total lebih besar array Genap yaitu:", genapTotal)
  console.log("sedangkan array ganjil:", ganjilTotal)
} else if (genapTotal < ganjilTotal) {
  console.log("Total lebih besar array Ganjil yaitu:", ganjilTotal)
  console.log("sedangkan array genap:", genapTotal)
}

// mencari rata-rata
let genapAvg = genapTotal / genap.length;
let ganjilAvg = ganjilTotal / ganjil.length;
if (genapAvg > ganjilAvg) {
  console.log("Rata-rata lebih besar array Genap yaitu:", genapAvg)
  console.log("sedangkan array ganjil:", ganjilAvg)
} else if (genapAvg < ganjilAvg) {
  console.log("Rata- rata lebih besar array Ganjil yaitu:", ganjilAvg)
  console.log("sedangkan array genap:", genapAvg)
}





// perbandingan
// let minCompare = genapMin > ganjilMin ? "min array genap" : "min array ganjil"
// let maxCompare = genapMax < ganjilMax ? "max array genap" : "max array ganjil"
// let totalCompare = genapTotal < ganjilTotal ? "total array genap" : "total array ganjil"
// let avgCompare = genapAvg < ganjilAvg ? "rata-rata array genap" : "rata-rata array ganjil"

// console.log(minCompare, "lebih besar dari", minCompare === "min array genap" ? "min array ganjil" : "min array genap");
