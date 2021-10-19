const scores = [
  {
    marks: 32,
    name: "Yvette Merritt"
  },
  {
    marks: 57,
    name: "Lillian Ellis"
  },
  {
    marks: 22,
    name: "Mccall Carter"
  },
  {
    marks: 21,
    name: "Pate Collier"
  },
  {
    marks: 91,
    name: "Debra Beard"
  },
  {
    marks: 75,
    name: "Nettie Hancock"
  },
  {
    marks: 20,
    name: "Hatfield Hodge"
  }
];
// [32, 57, 22]
// Task 1
// Print the name list - As an array
// Expected Output
// ["Yvette Merritt", "Lillian Ellis", "Mccall Carter", "Pate Collier" ,
//  "Debra Beard", "Nettie Hancock",  "Hatfield Hodge"]
const names=scores.map(a => a.name);
console.log("NAME LIST",names);

// Task 2
// >=40 pass.. find those student that passed (Use array method)
// Expected Output
// [{
//     marks: 57,
//     name: "Lillian Ellis"
//   },
//     {
//     marks: 91,
//     name: "Debra Beard"
//   },
//   {
//     marks: 75,
//     name: "Nettie Hancock"
//   }]
const stu_pass=scores.filter( pass => pass.marks > 40 );

console.log("STUDENTS WHO PASSED IN THE EXAMS",stu_pass);

// Task 3
//  Find all the names who failed the exams (Array methods)
// Expected Output
//   ["Yvette Merritt",
//   "Mccall Carter",
//   "Pate Collier",
//   "Hatfield Hodge"
// ];
const failstu=scores.filter( fail => fail.marks < 40 ).map(fail=>(fail.name));
 console.log("NAME OF THE STUDENTS WHO FAILED IN THE EXAMS",failstu);
// Task 4
// Find the Average marks
const avg=scores.reduce((prev,current)=>prev+current.marks,0)/scores.length;
console.log("AVERAGE MARKS",avg);

// Task 5
// Find the topper's name
// Expected Output
// "Debra Beard"
const max = scores.reduce((prev, current) => (prev.marks > current.marks) ? prev : current);
console.log("TOPPER NAME",max.name);
const complete=document.createElement("div");
complete.innerHTML=
`<div>Name List: ${names}</div>
<br>
<br>
<div>Students who passed in the exams: ${stu_pass}</div>
<br>
<br>
<div>Name of the students who failed in the exam: ${failstu}</div>
<br>
<br>
<div>Average marks: ${avg}</div>
<br>
<br>
<div >Topper name: ${max.name}</div>`;
document.body.append(complete);

// Only use
// map, reduce, filter & destructuring

// Task 6 - use es6
// Build -  intersection, uniq, without, groupBy
// https://lodash.com/docs/4.17.15#groupBy

const arr1=[2,4,8,5];
const arr2=[1,3,4,8];
//intersection
function intersection(a,b)
{
      return a.filter((inter_sec)=> parseInt(b.filter((intersec)=> inter_sec==intersec)))
}
console.log(intersection(arr1,arr2));

//uniq
function uniq(a)
{
      return a.filter((data,index)=> a.indexOf(data)===index) 
}
console.log(uniq(arr1));



//without
function without(a,...b)
{
    return a.filter((data)=>(!b.includes(data)));
}
console.log(without(arr1,7,9))



//groupby 
let arr3=["one","two","three","four","six","seven"]

function groupbyLength(array)
{
   let obj={};
  let lengtharray=array.map(group_by=>group_by.length)
  let result= lengtharray.filter((data,index)=> lengtharray.indexOf(data)===index) 
  for(let i=0;i<result.length;i++)
  {
      obj[result[i]]=array.filter(gb=> result[i]==gb.length);
  }
  return obj;

} 
console.log(groupbyLength(arr3));

//deposit task
class Account{
  constructor(name,accType,accNo,balance){
    this.name=name;
    this.account_type=accType;
    this.account_number=accNo;
    this.balance=balance;
  }
  getBalance() {
    return "Your balance is ₹" + this.balance;
  }

  withdraw(withdrawAmt) {
    if (withdrawAmt <= this.balance) {
      this.balance = this.balance - withdrawAmt;
      return this.getBalance();
    } else {
      return "Insufficent funds. " + this.getBalance();
    }
  }
  //task
 deposit(depositAmt) {
   
      this.balance = this.balance +depositAmt;
   return this.getBalance();
   
      
 }
}
const sourabh=new Account("Sourabh","Savings",11111,25_000)
const lokesh=new Account("Lokesh","current",11112,10_000)
const surya=new Account("Surya","Savings",11113,1_00_000)
const asritha=new Account("Asritha","DEMAT",11114,20_000)
console.log(sourabh,lokesh,surya,asritha);
console.log(surya.getBalance());
console.log(surya.withdraw(2_00_000));
console.log(asritha.deposit(10_000));



