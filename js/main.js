let container = document.getElementsByTagName("div").namedItem("container");
let row = document.getElementsByTagName("div").namedItem("row");
let uch1 = document.getElementsByTagName("div").namedItem("uch1");
let uch2 = document.getElementsByTagName("div").namedItem("uch2");
let olti = document.getElementsByTagName("div").namedItem("olti");
let card1 = document.getElementsByTagName("div").namedItem("card");
let card2 = document.getElementsByTagName("div").namedItem("card-header");
let card3 = document.getElementsByTagName("div").namedItem("card-body");
let card4 = document.getElementsByTagName("h1").namedItem("card-title");
let input1 = document.getElementsByTagName("div").namedItem("input-group1");
let input2 = document.getElementsByTagName("div").namedItem("input-group2");
let input3 = document.getElementsByTagName("div").namedItem("input-group3");
let input4 = document.getElementsByTagName("div").namedItem("input-group4");
let form1 = document.getElementsByTagName("input").namedItem("form-control1");
let form2 = document.getElementsByTagName("input").namedItem("form-control2");
let form3 = document.getElementsByTagName("input").namedItem("form-control3");
let form4 = document.getElementsByTagName("input").namedItem("form-control4");
let labelo = document.getElementsByTagName("label").namedItem("datr");
let btn1 = document.getElementsByTagName("div").namedItem("btn-group1");
let btn2 = document.getElementsByTagName("div").namedItem("btn-group2");
let btn3 = document.getElementsByTagName("div").namedItem("btn-group3");
let region1 = document.getElementsByTagName("select").namedItem("region1");
let region2 = document.getElementsByTagName("select").namedItem("region2");
let region3 = document.getElementsByTagName("select").namedItem("region3");
let fight1 = document.getElementsByTagName("button").namedItem("fight1");
let fight2 = document.getElementsByTagName("button").namedItem("fight2");
let fight3 = document.getElementsByTagName("button").namedItem("fight3");
let jik1 = document.getElementsByTagName("label").namedItem("jik1");
let jik2 = document.getElementsByTagName("label").namedItem("jik2");
let jik3 = document.getElementsByTagName("label").namedItem("jik3");
let ayol = document.getElementsByTagName("input").namedItem("ayol");
let erkak = document.getElementsByTagName("input").namedItem("erkak");
let nomalum = document.getElementsByTagName("input").namedItem("nomalum");

container.style.display = "-webkit-box";
container.style.display = "-ms-flexbox";
container.style.display = "flex";
container.style.msFlexWrap = "wrap";
container.style.flexWrap = "wrap";
container.style.webkitBoxAlign = "center";
container.style.msFlexAlign = "center";
container.style.alignItems = "center";
container.style.webkitBoxPack = "justify";
container.style.msFlexPack = "justify";
container.style.justifyContent = "space-between";

uch1.style.webkitBoxFlex = "0";
uch1.style.msFlex = "0 0 33.333333%";
uch1.style.flex = "0 0 33.333333%";
uch1.style.maxWidth = "33.333333%";
uch1.style.marginLeft = "35%";

uch2.style.webkitBoxFlex = "0";
uch2.style.msFlex = "0 0 33.333333%";
uch2.style.flex = "0 0 33.333333%";
uch2.style.maxWidth = "33.333333%";
uch2.style.marginLeft = "35%";

olti.style.webkitBoxFlex = "0";
olti.style.msFlex = "0 0 33.333333%";
olti.style.flex = "0 0 33.333333%";
olti.style.maxWidth = "33.333333%";
olti.style.marginLeft = "35%";
olti.style.marginRight = "35%";

row.style.display = "-webkit-box";
row.style.display = "-ms-flexbox";
row.style.display = "flex";
row.style.msFlexWrap = "wrap";
row.style.flexWrap = "wrap";
row.style.marginRight = "-15px";
row.style.marginLeft = "-15px";

card1.style.position = "relative";
card1.style.display = "-webkit-box";
card1.style.display = "-ms-flexbox";
card1.style.display = "flex";
card1.style.webkitBoxOrient = "vertical";
card1.style.webkitBoxDirection = "normal";
card1.style.msFlexDirection = "column";
card1.style.flexDirection = "column";
card1.style.minWidth = "0";
card1.style.wordWrap = "break-word";
card1.style.backgroundColor = "#fff";
card1.style.backgroundClip = "border-box";
card1.style.border = "1px solid rgba(0, 0, 0, 0.125)";
card1.style.borderRadius = "0.25rem";

card2.style.padding = "0.75rem 1.25rem";
card2.style.marginBottom = " 0";
card2.style.backgroundColor = "rgba(0, 0, 0, 0.03)";
card2.style.borderBottom = "1px solid rgba(0, 0, 0, 0.125)";

card3.style.webkitBoxFlex = "1";
card3.style.msFlex = "1 1 auto";
card3.style.flex = "1 1 auto";
card3.style.padding = "1.25rem";

card4.style.marginBottom = "0.75rem";

input1.style.position = "relative";
input1.style.display = "-webkit-box";
input1.style.display = "-ms-flexbox";
input1.style.display = "flex";
input1.style.msFlexWrap = "wrap";
input1.style.flexWrap = "wrap";
input1.style.webkitBoxAlign = "stretch";
input1.style.msFlexAlign = "stretch";
input1.style.alignItems = "stretch";
input1.style.width = "100%";

input2.style.position = "relative";
input2.style.display = "-webkit-box";
input2.style.display = "-ms-flexbox";
input2.style.display = "flex";
input2.style.msFlexWrap = "wrap";
input2.style.flexWrap = "wrap";
input2.style.webkitBoxAlign = "stretch";
input2.style.msFlexAlign = "stretch";
input2.style.alignItems = "stretch";
input2.style.width = "100%";

input3.style.position = "relative";
input3.style.display = "-webkit-box";
input3.style.display = "-ms-flexbox";
input3.style.display = "flex";
input3.style.msFlexWrap = "wrap";
input3.style.flexWrap = "wrap";
input3.style.webkitBoxAlign = "stretch";
input3.style.msFlexAlign = "stretch";
input3.style.alignItems = "stretch";
input3.style.width = "100%";

input4.style.position = "relative";
input4.style.display = "-webkit-box";
input4.style.display = "-ms-flexbox";
input4.style.display = "flex";
input4.style.msFlexWrap = "wrap";
input4.style.flexWrap = "wrap";
input4.style.webkitBoxAlign = "stretch";
input4.style.msFlexAlign = "stretch";
input4.style.alignItems = "stretch";
input4.style.width = "100%";

form1.style.display = "block";
form1.style.width = "42%";
form1.style.padding = "0.375rem 0.75rem";
form1.style.fontSize = "1rem";
form1.style.lineHeight = "1.5";
form1.style.color = "#495057";
form1.style.backgroundColor = "#fff";
form1.style.backgroundClip = "padding-box";
form1.style.border = "1px solid #ced4da";
form1.style.borderRadius = "0.25rem";
form1.style.transition = "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out";


form2.style.display = "block";
form2.style.width = "42%";
form2.style.padding = "0.375rem 0.75rem";
form2.style.fontSize = "1rem";
form2.style.lineHeight = "1.5";
form2.style.color = "#495057";
form2.style.backgroundColor = "#fff";
form2.style.backgroundClip = "padding-box";
form2.style.border = "1px solid #ced4da";
form2.style.borderRadius = "0.25rem";
form2.style.transition = "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out";
form2.style.marginLeft = "23px";

form3.style.display = "block";
form3.style.width = "100%";
form3.style.padding = "0.375rem 0.75rem";
form3.style.fontSize = "1rem";
form3.style.lineHeight = "1.5";
form3.style.color = "#495057";
form3.style.backgroundColor = "#fff";
form3.style.backgroundClip = "padding-box";
form3.style.border = "1px solid #ced4da";
form3.style.borderRadius = "0.25rem";
form3.style.transition = "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out";
form3.style.marginTop = "16px";

form4.style.display = "block";
form4.style.width = "100%";
form4.style.padding = "0.375rem 0.75rem";
form4.style.fontSize = "1rem";
form4.style.lineHeight = "1.5";
form4.style.color = "#495057";
form4.style.backgroundColor = "#fff";
form4.style.backgroundClip = "padding-box";
form4.style.border = "1px solid #ced4da";
form4.style.borderRadius = "0.25rem";
form4.style.transition = "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out";
form4.style.marginTop = "16px";
form4.style.marginBottom = "16px";

btn1.style.width = "25%"
btn1.style.border = "1px solid #ced4da";
btn1.style.borderRadius = "0.25rem";
btn1.style.lineHeight = "1.5";

btn2.style.width = "25%"
btn2.style.border = "1px solid #ced4da";
btn2.style.borderRadius = "0.25rem";
btn2.style.lineHeight = "1.5";
btn2.style.marginLeft = "150px"
btn2.style.marginTop = "-26px"

btn3.style.width = "25%"
btn3.style.border = "1px solid #ced4da";
btn3.style.borderRadius = "0.25rem";
btn3.style.lineHeight = "1.5";
btn3.style.marginLeft = "300px"
btn3.style.marginTop = "-26px"














region1.style.width = "100%"
region1.style.border = "1px solid #ced4da";
region1.style.borderRadius = "0.25rem";

region2.style.width = "100%"
region2.style.border = "1px solid #ced4da";
region2.style.borderRadius = "0.25rem";

region3.style.width = "100%"
region3.style.border = "1px solid #ced4da";
region3.style.borderRadius = "0.25rem";