const form = document.getElementById("myForm");
const table = document.getElementById("myTable");
// submit handler
form.addEventListener("submit", (event) => {
  event.preventDefault();
  //ambil nilai
  const nama = document.getElementById("nama").value;
  const umur = document.getElementById("umur").value;
  const uang = document.getElementById("uang").value;

  // bikin new row
  const newRow = table.insertRow(-1);
  const cell_nama = newRow.insertCell(0);
  const cell_umur = newRow.insertCell(1);
  const cell_uang = newRow.insertCell(2);

  cell_nama.textContent = nama;
  cell_umur.textContent = umur;
  cell_uang.textContent = uang;

  form.reset();
})
// mengetahui jumlah baris
const numRows = table.rows.length; 

// mencari rata rata
let total_uang = 0;
let total_umur = 0;

for (let i = 0; i < numRows; i++) {
    const row = table.rows[i];
    const uang = parseFloat(row.cells[2].textContent); //mengubah mnjadi angka desimal
    const umur = parseFloat(row.cells[1].textContent);
    
    total_uang += uang;
    total_umur += umur;
}

// const avg_uang = total_uang / (numRows -1);
// const avg_umur = total_umur / (numRows -1);

// const avg_uang_elem = document.createElement("p");
// avg_uang_elem.textContent = `Rata-rata uang saku: ${avg_uang}`;

// const avg_umur_elem = document.createElement("p");
// avg_umur_elem.textContent = `Rata-rata umur: ${avg_umur}`;

// const outputDiv = document.getElementById("output");
// outputDiv.appendChild(avg_uang_elem);
// outputDiv.appendChild(avg_umur_elem);