// Create the main container
const mainContainer = document.createElement("div");
mainContainer.style.position = "relative";
mainContainer.style.width = "360px";
mainContainer.style.height = "640px";
mainContainer.style.background = "#FFFFFF";
document.body.appendChild(mainContainer);

// Create background
const background = document.createElement("div");
background.style.position = "absolute";
background.style.width = "360px";
background.style.height = "640px";
background.style.left = "0px";
background.style.top = "0px";
background.style.background = "radial-gradient(145% 145% at 50% 50%, #3B3B98 26.56%, rgba(196, 196, 196, 0) 87.36%)";
mainContainer.appendChild(background);

// Create background_in
const backgroundIn = document.createElement("div");
backgroundIn.style.position = "absolute";
backgroundIn.style.width = "322px";
backgroundIn.style.height = "605px";
backgroundIn.style.left = "19px";
backgroundIn.style.top = "19px";
backgroundIn.style.background = "#23235B";
backgroundIn.style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)";
backgroundIn.style.borderRadius = "15px";
mainContainer.appendChild(backgroundIn);

// Create txtPassword
const txtPassword = document.createElement("div");
txtPassword.style.position = "absolute";
txtPassword.style.width = "297px";
txtPassword.style.height = "55px";
txtPassword.style.left = "32px";
txtPassword.style.top = "156px";
txtPassword.style.background = "#151537";
mainContainer.appendChild(txtPassword);

// Create btnGenerate
const btnGenerate = document.createElement("div");
btnGenerate.style.position = "absolute";
btnGenerate.style.width = "269px";
btnGenerate.style.height = "55px";
btnGenerate.style.left = "45px";
btnGenerate.style.top = "544px";
btnGenerate.style.background = "#3B3B98";
mainContainer.appendChild(btnGenerate);

// Create "PASSWORD GENERATOR" text
const text1 = document.createElement("div");
text1.style.position = "absolute";
text1.style.width = "181px";
text1.style.height = "64px";
text1.style.left = "80px";
text1.style.top = "59px";
text1.style.fontFamily = "Roboto";
text1.style.fontStyle = "normal";
text1.style.fontWeight = 700;
text1.style.fontSize = "25px";
text1.style.lineHeight = "29px";
text1.style.textAlign = "center";
text1.style.color = "#FFFFFF";
text1.textContent = "PASSWORD GENERATOR";
mainContainer.appendChild(text1);

// Create "GENERATE PASSWORD" text
const text2 = document.createElement("div");
text2.style.position = "absolute";
text2.style.width = "259px";
text2.style.height = "21px";
text2.style.left = "55px";
text2.style.top = "561px";
text2.style.fontFamily = "Roboto";
text2.style.fontStyle = "normal";
text2.style.fontWeight = 700;
text2.style.fontSize = "18px";
text2.style.lineHeight = "21px";
text2.style.textAlign = "center";
text2.style.color = "#FFFFFF";
text2.textContent = "GENERATE PASSWORD";
mainContainer.appendChild(text2);

// Create text elements for "Password length," "Include upcase letters," etc.

// Create Rectangle 17
const rectangle17 = document.createElement("div");
rectangle17.style.position = "absolute";
rectangle17.style.width = "118px";
rectangle17.style.height = "33px";
rectangle17.style.left = "211px";
rectangle17.style.top = "258px";
rectangle17.style.background = "#FFFFFF";
mainContainer.appendChild(rectangle17);

// Create Rectangle 21
const rectangle21 = document.createElement("div");
rectangle21.style.position = "absolute";
rectangle21.style.width = "25px";
rectangle21.style.height = "25px";
rectangle21.style.left = "304px";
rectangle21.style.top = "373px";
rectangle21.style.background = "#FFFFFF";
mainContainer.appendChild(rectangle21);

// Create Rectangle 23
const rectangle23 = document.createElement("div");
rectangle23.style.position = "absolute";
rectangle23.style.width = "25px";
rectangle23.style.height = "25px";
rectangle23.style.left = "304px";
rectangle23.style.top = "483px";
rectangle23.style.background = "#FFFFFF";
mainContainer.appendChild(rectangle23);

// Create groups and lines as specified

// Finally, append the main container to the document's body
document.body.appendChild(mainContainer);