# LOGIC TASK ARRAY

## RULE
- Dikerjakan menggunakan file javascript ( .js ) dan dikumpulkan ke repository github masing masing
- Dilarang menggunakan built in function apapun dari javasript , hanya diperbolehkan solve task ini menggunakan basic condition (if else, switch case), looping (for, while, do while) dan function basic ( .toUpperCase( ), .toLowerCase( ), toString( ), Number( ) )

> apa itu built in function ? 
--------------------------------------------------

## 1. Counting Number in Array
Buatlah sebuah fungsi yang dapat menjumlahkan kumpulan angka di dalam array.
<br>
<storng>Proses :</strong>
<br>
input [1,2,3]
<br>
total = 1 + 2 + 3 = 6 
<br>
return 6

fungsi ini hanya dapat menerima argument tipe data array yang ebrisi number, dan mengembalikan tipe data number 

### contoh test case
- [1,2,3,4,5,6] -> return 21
- [1,2,3] -> return 6
- [10,10,10,10,10] -> return 50
- [] -> return 0

-----------------------------------------------------------
## 2. Reverse All Array

Buatlah sebuah fungsi yang dapat membalik seluruh data yang ada di dalam array

<strong>Proses :</strong>
<br>
input [123, 456]
<br>
123 dibalik menjadi 321
<br>
456 dibalik menjadi 654 
<br>
654 akan berada di index 0 array dan 321 akan berada di index 1 array
<br>
return [654, 321] 

<br>
fungsi ini hanya dapat menerima argument tipe data array yang berisi number, dan mengembalikan tipe data array

### contoh test case
- [123, 456] -> return [654, 321]
- [332, 432, 661] -> return [166, 234, 233]
- [456789, 332] -> return [233, 987654] 
- [] -> return []

---------------------------------------------------
## 3. Unique Array

Buatlah sebuah fungsi yang dapat memunuculkan data unique (tidak ada yang duplicate) di dalam array. 

<strong>Proses :</strong>
<br>
input [1, 4, 5, 6, 1, 1, 2, 2, 3, 4, 5, 6, 7]
<br>
terdapat duplikat pada angka 1, 2, 4, 5, 2
<br>
return [1, 4, 5, 6, 2, 3, 7]
<br>

fungsi ini hanya dapat menerima argument tipe data array yang berisi number, dan mengembalikan tipe data array

### contoh test case
- [1, 1, 1, 1, 1, 1] -> return [1]
- [1, 1, 2, 2, ,3 ,3, 4, 4] -> return [1, 2 , 3, 4]
- [1, 4, 5, 6, 1, 1, 2, 2, 3, 4, 5, 6, 7] -> return [1, 4, 5, 6, 2, 3, 7]
- [] -> return []

---------------------------------------------------
## 4. Shopping bubble tea
Ceritanya david senang jajan bubble tea.
<br>
ini adalah list bubble tea yang diberi beserta harganya

```js
const listBoba = [
    ['Xing Fu Tang', 38000], 
    ['OneZo', 53500],
    ['KOI The', 36000],
    ['Chatime', 25000],
    ['Kokumi', 42000],
    ['Bubble Station Milk', 13000]
]
```

David mau membeli bubble tea yang ada di list tesebut secara berurutan, mulai dari Xing Fu Tang,
sampai ke Bubble Station Milk. Namun sayangnya, uang jajan David terbatas, jadi mungkin tidak bisa membeli semuanya.
<br>
Buatlah sebuah function yang bisa menceritakan kegiatan David ketika sedang jajan boba dengan uang jajan nominal tertentu.
<br>

```js
function jajanBoba(uangJajan) {
 //your code here
}

Contoh input uangJajan : 100000

Contoh output :
David mulai jajan dengan uang jajan 100.000 rupiah.
Dengan uang 100.000, cukup untuk beli 'Xing Fu Tang',
setelah beli 'Xing Fu Tang' uangnya berkurang 38.000,
jadi uangnya sisa 62.000. 
Dengan uang 62.000, cukup untuk beli 'OneZo',
setelah beli 'OneZo' uangnya berkurang 53.500,
jadi uangnya sisa 8.500.
Dengan uang 8.500, tidak cukup untuk beli 'KOI The'.
Dengan uang 8.500, tidak cukup untuk beli 'Chatime'.
Dengan uang 8.500, tidak cukup untuk beli 'Kokumi'.
Dengan uang 8.500, tidak cukup untuk beli 'Bubble Station Milk'.
David pulang dengan sisa uang jajan 9.500.
```

--------------------------------------------------------------
## Bonus
## 5. Search Same data
- buatlah sebuah fungsi yang dapat mencari value yang sama dari kedua list data array.

- fungsi ini menerima dua argument tipe data array yang berisi number, dan mengembalikan tipe data array

```js
ex :
function searchSameArray(arr1, arr2) {
    // your code here
}
```

<strong>Proses :</strong>
<br>
input : [1, 2, 3, 4, 5, 6, 7] dan [1, 3, 6, 7, 9, 10, 12, 15]
<br>
data yang sama dari kedua array : 1, 3, 6, 7
<br>
output return : [1, 3, 6, 7]
<br>

### contoh test case
- [1, 2, 5] dan [1, 4, 6, 7] -> return [1]
- ["jaya" , "asik", "keren"] dan ["keren", "yea", "asik"] -> return ["asik", "keren"]
- [] dan [1, 3, 4, 5, 6] -> return []

-------------------------------------------------
## 6. count profit
PT XYZ memiliki beberapa cabang usaha masing masing cabang meberikan laporan bulanan income dan outcome mereka, 
data ini telah terkumpul dalam bentuk berikut

<br>
<strong>Contoh : </strong>

```js
let month  = ['jan', 'feb', 'march', 'april', 'mei', 'jun', 'jul', 'augst', 'sept', 'oct', 'nov', 'dec'];
let branches = [
  [
    [4000, 2500, 2000, 2500, 2500, 3500, 3500, 2500, 2200, 3400, 2200, 4000], //Income
    [300, 900, 900, 900, 2200, 2300, 2300, 2200, 500, 1600, 500, 2200] //Outcome
  ], //Branch 2
  [
    [2200, 2500, 2000, 2000, 2500, 4000, 2200, 2200, 2000, 2500, 2000, 3500], //Income
    [900, 2200, 900, 200, 900, 2200, 500, 500, 500, 2200, 1200, 2900] //Outcome
  ], //Branch 2
  [
    [2000, 2500, 2200, 2200, 2500, 3300, 2900, 2500, 4500, 2900, 3500, 4000], //Income
    [500, 600, 500, 900, 2200, 2200, 2200, 1700, 2200, 2500, 2200, 2200] //Outcome
  ] //Branch 3
]
```
 
dari data tersebut tampikan hasil `profit (income dikurangi dengan outcome)` perbulan masing-masing cabang
dengan format sebagai berikut:
<br>
| {bulan} | {profit branch 1} | {profit branch 2} | {profit branch 3} |
 
OUTPUT: 
```
    | br 1 | br 2 | br 3 |
jan | 3700 | 1300 | 1500 |
feb | 1600 | 300  | 1900 |
mar | 1100 | 1100 | 1700 |
apr | 1600 | 1800 | 1300 |
may | 300  | 1600 | 300  |
jun | 1200 | 1800 | 1100 |
jul | 1200 | 1700 | 700  |
aug | 300  | 1700 | 800  |
sep | 1700 | 1500 | 2300 |
oct | 1800 | 300  | 400  |
nov | 1700 | 800  | 1300 |
dec | 1800 | 600  | 1800 |
```

```js
function printBranch(branches) {
  // Write your code here
}
```

```
//TEST CASE 1

var data1 = [
  [
    [1200, 1500, 2000, 1500, 2500, 3500, 3500, 2500, 1200, 2000, 1200, 4000], //Income
    [500, 700, 700, 700, 1200, 1300, 1300, 1200, 500, 1200, 500, 2200] //Outcome
  ],
  [
    [1200, 2500, 2000, 2000, 1500, 2000, 1200, 1200, 2000, 2500, 2000, 3500], //Income
    [700, 1200, 700, 1200, 700, 1200, 500, 500, 500, 1200, 1200, 1700] //Outcome
  ],
  [
    [2000, 1500, 1200, 1200, 1500, 2000, 2000, 2500, 2000, 2500, 2000, 4000], //Income
    [500, 600, 500, 700, 1200, 1200, 1200, 1500, 1200, 1500, 1200, 2200] //Outcome
  ]
]
console.log(printBranch(data1));

OUTPUT :

    | br 1 | br 2 | br 3 |
jan | 700  | 500  | 1500 |
feb | 800  | 1300 | 900  |
mar | 1300 | 1300 | 700  |
apr | 800  | 800  | 500  |
may | 1300 | 800  | 300  |
jun | 2200 | 800  | 800  |
jul | 2200 | 700  | 800  |
aug | 1300 | 700  | 1000 |
sep | 700  | 1500 | 800  |
oct | 800  | 1300 | 1000 |
nov | 700  | 800  | 800  |
dec | 1800 | 1800 | 1800 |



// TEST CASE 2

var data2 = [
  [
    [1200, 1500, 2000, 1500, 2500, 3500, 3500, 2500, 1200, 2000, 1200, 4000], //Income
    [500, 700, 700, 700, 1200, 1300, 1300, 1200, 500, 1200, 500, 2200] //Outcome
  ]
]
console.log(printBranch(data2))

OUTPUT :

    | br 1 |
jan | 700  |
feb | 800  |
mar | 1300 |
apr | 800  |
may | 1300 |
jun | 2200 |
jul | 2200 |
aug | 1300 |
sep | 700  |
oct | 800  |
nov | 700  |
dec | 1800 |
```
