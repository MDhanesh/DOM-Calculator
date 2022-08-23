//start-container
let container = document.createElement("div");
container.setAttribute("class", "container pt");
document.body.append(container);
//heading
let nav = document.createElement("h1");
nav.setAttribute("class", "text-center pb-5 text-warning");
nav.innerHTML = "CALCULATOR";
container.append(nav);
//main-row
let row = document.createElement("div");
row.setAttribute("class", "row");
container.append(row);
//main-column
let column = document.createElement("div");
column.setAttribute("class", "col-sm-6 offset-sm-3 box");
row.append(column);
/*---------------------------------------------------------------------------------------------------------------- */
//input-field
let input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("class", "number py-2");
input.setAttribute("id", "result");
input.setAttribute("placeholder", "0");
input.setAttribute("onkeypress", "eventCheck(event)");
column.append(input);
/*---------------------------------------------------------------------------------------------------------------- */
//first row section
//
let row1 = document.createElement("div");
row1.setAttribute("class", "row");
column.append(row1);
//first row column
let col11 = document.createElement("div");
col11.setAttribute("class", "col-3");
row1.append(col11);
//all clear button
let btnac = document.createElement("input");
btnac.setAttribute("class", "btn");
btnac.setAttribute("type", "button");
btnac.setAttribute("value", "AC");
btnac.setAttribute("onclick", "allclear()");
col11.append(btnac);
//first row column
let col12 = document.createElement("div");
col12.setAttribute("class", "col-3");
row1.append(col12);
//clear button
let btnc = document.createElement("input");
btnc.setAttribute("class", "btn");
btnc.setAttribute("type", "button");
btnc.setAttribute("value", "DEL");
btnc.setAttribute("onclick", "del()");
col12.append(btnc);
//first row column
let col13 = document.createElement("div");
col13.setAttribute("class", "col-3");
row1.append(col13);
//dot button
let btndot = document.createElement("input");
btndot.setAttribute("class", "btn");
btndot.setAttribute("type", "button");
btndot.setAttribute("value", ".");
btndot.setAttribute("onclick", "display('.')");
col13.append(btndot);
//first row column
let col14 = document.createElement("div");
col14.setAttribute("class", "col-3");
row1.append(col14);

//division buttton
let btndiv = document.createElement("input");
btndiv.setAttribute("class", "btn");
btndiv.setAttribute("type", "button");
btndiv.setAttribute("value", "/");
btndiv.setAttribute("onclick", "display('/')");
col14.append(btndiv);
//
/*---------------------------------------------------------------------------------------------------------------- */
//second row section
//
let row2 = document.createElement("div");
row2.setAttribute("class", "row");
column.append(row2);
//second row
let col21 = document.createElement("div");
col21.setAttribute("class", "col-3");
row2.append(col21);
//number 7 button
let button7 = document.createElement("input");
button7.setAttribute("class", "btn");
button7.setAttribute("type", "button");
button7.setAttribute("value", "7");
button7.setAttribute("onclick", "display('7')");
col21.append(button7);
//second row
let col22 = document.createElement("div");
col22.setAttribute("class", "col-3");
row2.append(col22);
//number 8 button
let button8 = document.createElement("input");
button8.setAttribute("class", "btn");
button8.setAttribute("type", "button");
button8.setAttribute("value", "8");
button8.setAttribute("onclick", "display('8')");
col22.append(button8);
//second row
let col23 = document.createElement("div");
col23.setAttribute("class", "col-3");
row2.append(col23);
//number 9 button
let button9 = document.createElement("input");
button9.setAttribute("class", "btn");
button9.setAttribute("type", "button");
button9.setAttribute("value", "9");
button9.setAttribute("onclick", "display('9')");
col23.append(button9);
//second row
let col24 = document.createElement("div");
col24.setAttribute("class", "col-3");
row2.append(col24);
//multipication button
let btnmul = document.createElement("input");
btnmul.setAttribute("class", "btn");
btnmul.setAttribute("type", "button");
btnmul.setAttribute("value", "*");
btnmul.setAttribute("onclick", "display('*')");
col24.append(btnmul);
//
/*---------------------------------------------------------------------------------------------------------------- */
//third row section
//
let row3 = document.createElement("div");
row3.setAttribute("class", "row");
column.append(row3);
//third row column
let col31 = document.createElement("div");
col31.setAttribute("class", "col-3");
row3.append(col31);
//number 4 button
let button4 = document.createElement("input");
button4.setAttribute("class", "btn");
button4.setAttribute("type", "button");
button4.setAttribute("value", "4");
button4.setAttribute("onclick", "display('4')");
col31.append(button4);
//third row column
let col32 = document.createElement("div");
col32.setAttribute("class", "col-3");
row3.append(col32);
//number 5 button
let button5 = document.createElement("input");
button5.setAttribute("class", "btn");
button5.setAttribute("type", "button");
button5.setAttribute("value", "5");
button5.setAttribute("onclick", "display('5')");
col32.append(button5);
//third row column
let col33 = document.createElement("div");
col33.setAttribute("class", "col-3");
row3.append(col33);
//number 6 button
let button6 = document.createElement("input");
button6.setAttribute("class", "btn");
button6.setAttribute("type", "button");
button6.setAttribute("value", "6");
button6.setAttribute("onclick", "display('6')");
col33.append(button6);
//third row column
let col34 = document.createElement("div");
col34.setAttribute("class", "col-3");
row3.append(col34);
//subraction button
let btnsub = document.createElement("input");
btnsub.setAttribute("class", "btn");
btnsub.setAttribute("type", "button");
btnsub.setAttribute("value", "-");
btnsub.setAttribute("onclick", "display('-')");
col34.append(btnsub);
//
/*---------------------------------------------------------------------------------------------------------------- */
//
//fourth row section
let row4 = document.createElement("div");
row4.setAttribute("class", "row");
column.append(row4);
//fourth row column
let col41 = document.createElement("div");
col41.setAttribute("class", "col-3");
row4.append(col41);
//number 1 button
let button1 = document.createElement("input");
button1.setAttribute("class", "btn");
button1.setAttribute("type", "button");
button1.setAttribute("value", "1");
button1.setAttribute("onclick", "display('1')");
col41.append(button1);
//fourth row column
let col42 = document.createElement("div");
col42.setAttribute("class", "col-3");
row4.append(col42);
//number 2 button
let button2 = document.createElement("input");
button2.setAttribute("class", "btn");
button2.setAttribute("type", "button");
button2.setAttribute("value", "2");
button2.setAttribute("onclick", "display('2')");
col42.append(button2);
//fourth row column
let col43 = document.createElement("div");
col43.setAttribute("class", "col-3");
row4.append(col43);
//number 3 button
let button3 = document.createElement("input");
button3.setAttribute("class", "btn");
button3.setAttribute("type", "button");
button3.setAttribute("value", "3");
button3.setAttribute("onclick", "display('3')");
col43.append(button3);
//fourth row column
let col44 = document.createElement("div");
col44.setAttribute("class", "col-3");
row4.append(col44);
//addition button
let btnadd = document.createElement("input");
btnadd.setAttribute("class", "btn");
btnadd.setAttribute("type", "button");
btnadd.setAttribute("value", "+");
btnadd.setAttribute("onclick", "display('+')");
col44.append(btnadd);
//
/*---------------------------------------------------------------------------------------------------------------- */
//
//fifth row section
let row5 = document.createElement("div");
row5.setAttribute("class", "row");
column.append(row5);
//fifth row column
let col51 = document.createElement("div");
col51.setAttribute("class", "col-3");
row5.append(col51);
//
//zero button
let button0 = document.createElement("input");
button0.setAttribute("class", "btn");
button0.setAttribute("type", "button");
button0.setAttribute("value", "0");
button0.setAttribute("onclick", "display('0')");
col51.append(button0);
//fifth row column
let col52 = document.createElement("div");
col52.setAttribute("class", "col-3");
row5.append(col52);
//double zero button
let button00 = document.createElement("input");
button00.setAttribute("class", "btn");
button00.setAttribute("type", "button");
button00.setAttribute("value", "00");
button00.setAttribute("onclick", "display('00')");
col52.append(button00);
//fifth row column
let col53 = document.createElement("div");
col53.setAttribute("class", "col-3");
row5.append(col53);
//moduls button
let btnmod = document.createElement("input");
btnmod.setAttribute("class", "btn");
btnmod.setAttribute("type", "button");
btnmod.setAttribute("value", "%");
btnmod.setAttribute("onclick", "display('%')");
col53.append(btnmod);
//fifth row column
let col54 = document.createElement("div");
col54.setAttribute("class", "col-3");
row5.append(col54);
//total button
let total = document.createElement("input");
total.setAttribute("class", "btn");
total.setAttribute("type", "button");
total.setAttribute("value", "=");
total.setAttribute("onclick", "cal('=')");
col54.append(total);
//
/*---------------------------------------------------------------------------------------------------------------- */
//function to display all value
function display(number) {
  document.getElementById("result").value += number;

  return number;
}
// allclear function
function allclear() {
  document.getElementById("result").value = "";
}
//function for backspace
function del() {
  document.getElementById("result").value = result.value.substring(
    0,
    result.value.length - 1
  );
}
//function to evaluate the value in input section
function cal() {
  document.getElementById("result").value = eval(result.value);
}
//
/*---------------------------------------------------------------------------------------------------------------- */
////
///
//only number check
function eventCheck(event) {
  if (event.keyCode < 48 || event.keyCode > 57) {
    event.preventDefault();
    alert("Only numbers are allowed");
  }
}
