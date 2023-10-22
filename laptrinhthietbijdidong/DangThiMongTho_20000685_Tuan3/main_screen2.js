// Create the main container for Screen 2
const screen2 = document.createElement("div");
screen2.style.position = "relative";
screen2.style.width = "360px";
screen2.style.height = "640px";
screen2.style.background = "#FFFFFF";
document.body.appendChild(screen2);

// Create the "Điện Thoại Vsmart Joy 3 Hàng chính hãng" text
const title = document.createElement("div");
title.style.position = "absolute";
title.style.width = "164px";
title.style.height = "36px";
title.style.left = "126px";
title.style.top = "17px";
title.style.fontFamily = "Roboto";
title.style.fontStyle = "normal";
title.style.fontWeight = 400;
title.style.fontSize = "15px";
title.style.lineHeight = "18px";
title.style.color = "#000000";
title.textContent = "Điện Thoại Vsmart Joy 3 Hàng chính hãng";
screen2.appendChild(title);

// Create Rectangle 3
const rectangle3 = document.createElement("div");
rectangle3.style.position = "absolute";
rectangle3.style.width = "360px";
rectangle3.style.height = "491px";
rectangle3.style.left = "0px";
rectangle3.style.top = "149px";
rectangle3.style.background = "#C4C4C4";
screen2.appendChild(rectangle3);

// Create Rectangle 4
const rectangle4 = document.createElement("div");
rectangle4.style.position = "absolute";
rectangle4.style.width = "85px";
rectangle4.style.height = "80px";
rectangle4.style.left = "135px";
rectangle4.style.top = "193px";
rectangle4.style.background = "#C5F1FB";
rectangle4.style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)";
screen2.appendChild(rectangle4);

// Create Rectangle 5
const rectangle5 = document.createElement("div");
rectangle5.style.position = "absolute";
rectangle5.style.width = "85px";
rectangle5.style.height = "80px";
rectangle5.style.left = "135px";
rectangle5.style.top = "286px";
rectangle5.style.background = "#F30D0D";
screen2.appendChild(rectangle5);

// Create Rectangle 6
const rectangle6 = document.createElement("div");
rectangle6.style.position = "absolute";
rectangle6.style.width = "85px";
rectangle6.style.height = "80px";
rectangle6.style.left = "135px";
rectangle6.style.top = "379px";
rectangle6.style.background = "#000000";
screen2.appendChild(rectangle6);

// Create Rectangle 7
const rectangle7 = document.createElement("div");
rectangle7.style.position = "absolute";
rectangle7.style.width = "85px";
rectangle7.style.height = "80px";
rectangle7.style.left = "135px";
rectangle7.style.top = "472px";
rectangle7.style.background = "#234896";
screen2.appendChild(rectangle7);

// Create Group 2
const group2 = document.createElement("div");
group2.style.position = "absolute";
group2.style.width = "326px";
group2.style.height = "44px";
group2.style.left = "17px";
group2.style.top = "586px";
screen2.appendChild(group2);

// Create Rectangle 2 inside Group 2
const rectInsideGroup2 = document.createElement("div");
rectInsideGroup2.style.position = "absolute";
rectInsideGroup2.style.width = "326px";
rectInsideGroup2.style.height = "44px";
rectInsideGroup2.style.left = "17px";
rectInsideGroup2.style.top = "586px";
rectInsideGroup2.style.background = "rgba(25, 82, 226, 0.58)";
rectInsideGroup2.style.border = "1px solid #CA1536";
rectInsideGroup2.style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)";
rectInsideGroup2.style.borderRadius = "10px";
group2.appendChild(rectInsideGroup2);

// Create "XONG" text inside Group 2
const textXong = document.createElement("div");
textXong.style.position = "absolute";
textXong.style.width = "55px";
textXong.style.height = "23px";
textXong.style.left = "153px";
textXong.style.top = "585px";
textXong.style.fontFamily = "Roboto";
textXong.style.fontStyle = "normal";
textXong.style.fontWeight = 700;
textXong.style.fontSize = "20px";
textXong.style.lineHeight = "23px";
textXong.style.color = "#F9F2F2";
textXong.textContent = "XONG";
group2.appendChild(textXong);

// Create "Chọn một màu bên dưới:" text
const textChooseColor = document.createElement("div");
textChooseColor.style.position = "absolute";
textChooseColor.style.width = "198px";
textChooseColor.style.height = "21px";
textChooseColor.style.left = "17px";
textChooseColor.style.top = "159px";
textChooseColor.style.fontFamily = "Roboto";
textChooseColor.style.fontStyle = "normal";
textChooseColor.style.fontWeight = 400;
textChooseColor.style.fontSize = "18px";
textChooseColor.style.lineHeight = "21px";
textChooseColor.style.color = "#000000";
textChooseColor.textContent = "Chọn một màu bên dưới:";
screen2.appendChild(textChooseColor);

// Create vs_blue image
const vsBlue = document.createElement("div");
vsBlue.style.position = "absolute";
vsBlue.style.width = "112px";
vsBlue.style.height = "132px";
vsBlue.style.left = "4px";
vsBlue.style.top = "0px";
vsBlue.style.background = "url(book.png)"; // You need to provide the correct image URL
screen2.appendChild(vsBlue);

// Append the main container to the document's body
document.body.appendChild(screen2);
