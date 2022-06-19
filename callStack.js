//call stack, 자바스크립트가 함수 실행을 핸들하는 방법중
// 자바스크립트가 실행해야하는 함수를 보면, 스택(stack) 위에 올릴거임
//스택은 맨하단부터 차례차례로 위에 쌓이는 구조
//자바스크립트는 함수를 그스택위에 올리고, 함수를 순차적으로실행하면서 제거
//실행순서는 zero -> one -> two -> three 순서대로 실행되고, 실행되면 역순으로 pop 되어짐

function three(params) {
  console.log("call stack echo!!!");
}
function two(params) {
  three();
}
function one(params) {
  two();
}
function zero(params) {
  one();
}
zero();
