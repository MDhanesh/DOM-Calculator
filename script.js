var clas = createButton("div", "class", "container", "");
var all = createButton("button", "class", "btn", "ac");
var add = createButton("button", "class", "btn", "+");
var sub = createButton("button", "class", "btn", "-");
var multiply = createButton("button", "class", "btn", "*");
var divide = createButton("button", "class", "btn", "/");
var one = createButton("button", "class", "btn", "1");
var two = createButton("button", "class", "btn", "2");
var three = createButton("button", "class", "btn", "3");
var four = createButton("button", "class", "btn", "4");
var five = createButton("button", "class", "btn", "5");
var six = createButton("button", "class", "btn", "6");
var seven = createButton("button", "class", "btn", "7");
var eight = createButton("button", "class", "btn", "8");
var nine = createButton("button", "class", "btn", "9");
var zero = createButton("button", "class", "btn", "0");
var zeros = createButton("button", "class", "btn", "00");
var dot = createButton("button", "class", "btn", ".");
var clear = createButton("button", "class", "btn", "clear");
document.body.append(clas);
document.body.append(
  all,
  add,
  sub,
  multiply,
  divide,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  zero,
  zeros,
  dot,
  clear
);

function createButton(tagname, attrname, attrvalue, content) {
  var btn = document.createElement(tagname);
  btn.setAttribute(attrname, attrvalue);
  btn.innerHTML = content;
  return btn;
}
var div = document.createElement("div");
div.setAttribute("class", "container");
div.setAttribute("id", "container-row");
div.insertAdjacentHTML = `${document.body.appendChild(
  all,
  add,
  sub,
  multiply,
  divide,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  zero,
  zeros,
  dot,
  clear
)}`;
document.body.append(div);
