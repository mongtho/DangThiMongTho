// Create the main container
const mainContainer = document.createElement("div");
mainContainer.style.position = "relative";
mainContainer.style.width = "360px";
mainContainer.style.height = "640px";
mainContainer.style.background = "#FFFFFF";
document.body.appendChild(mainContainer);

// Create Rectangle 28
const rectangle28 = document.createElement("div");
rectangle28.style.position = "absolute";
rectangle28.style.width = "360px";
rectangle28.style.height = "105px";
rectangle28.style.left = "0px";
rectangle28.style.top = "0px";
rectangle28.style.background = "#FFFFFF";
mainContainer.appendChild(rectangle28);

// Create Rectangle 29
const rectangle29 = document.createElement("div");
rectangle29.style.position = "absolute";
rectangle29.style.width = "360px";
rectangle29.style.height = "527px";
rectangle29.style.left = "0px";
rectangle29.style.top = "113px";
rectangle29.style.background = "#FFFFFF";
mainContainer.appendChild(rectangle29);

// Create Star 1 to Star 5
for (let i = 1; i <= 5; i++) {
  const star = document.createElement("div");
  star.style.position = "absolute";
  star.style.width = "39px";
  star.style.height = "39px";
  star.style.left = `${59 + (53 * (i - 1))}px`;
  star.style.top = "183px";
  star.style.background = "#F2DD1B";
  mainContainer.appendChild(star);
}

// Create "Cực kỳ hài lòng" text
const text1 = document.createElement("div");
text1.style.position = "absolute";
text1.style.width = "259px";
text1.style.height = "21px";
text1.style.left = "51px";
text1.style.top = "144px";
text1.style.fontFamily = "Roboto";
text1.style.fontStyle = "normal";
text1.style.fontWeight = 700;
text1.style.fontSize = "18px";
text1.style.lineHeight = "21px";
text1.style.textAlign = "center";
text1.style.color = "#000000";
text1.textContent = "Cực kỳ hài lòng";
mainContainer.appendChild(text1);

// Create "Hãy chia sẻ những điều bạn thích về sản phẩm" text
const text2 = document.createElement("div");
text2.style.position = "absolute";
text2.style.width = "259px";
text2.style.height = "21px";
text2.style.left = "53px";
text2.style.top = "346px";
text2.style.fontFamily = "Roboto";
text2.style.fontStyle = "normal";
text2.style.fontWeight = 700;
text2.style.fontSize = "18px";
text2.style.lineHeight = "21px";
text2.style.color = "#C4C4C4";
text2.textContent = "Hãy chia sẻ những điều bạn thích về sản phẩm";
mainContainer.appendChild(text2);

// Create "USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa bluetooth" text
const text3 = document.createElement("div");
text3.style.position = "absolute";
text3.style.width = "259px";
text3.style.height = "21px";
text3.style.left = "96px";
text3.style.top = "19px";
text3.style.fontFamily = "Roboto";
text3.style.fontStyle = "normal";
text3.style.fontWeight = 700;
text3.style.fontSize = "16px";
text3.style.lineHeight = "19px";
text3.style.color = "#000000";
text3.textContent = "USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa bluetooth";
mainContainer.appendChild(text3);

// Create "Thêm hình ảnh" text
const text4 = document.createElement("div");
text4.style.position = "absolute";
text4.style.width = "259px";
text4.style.height = "21px";
text4.style.left = "59px";
text4.style.top = "275px";
text4.style.fontFamily = "Roboto";
text4.style.fontStyle = "normal";
text4.style.fontWeight = 700;
text4.style.fontSize = "18px";
text4.style.lineHeight = "21px";
text4.style.textAlign = "center";
text4.style.color = "#000000";
text4.textContent = "Thêm hình ảnh";
mainContainer.appendChild(text4);

// Create Rectangle 30 (Border)
const rectangle30 = document.createElement("div");
rectangle30.style.boxSizing = "border-box";
rectangle30.style.position = "absolute";
rectangle30.style.width = "293px";
rectangle30.style.height = "68px";
rectangle30.style.left = "34px";
rectangle30.style.top = "252px";
rectangle30.style.border = "1px solid #1511EB";
rectangle30.style.borderRadius = "5px";
mainContainer.appendChild(rectangle30);

// Create Rectangle 32 (Button)
const rectangle32 = document.createElement("div");
rectangle32.style.boxSizing = "border-box";
rectangle32.style.position = "absolute";
rectangle32.style.width = "289px";
rectangle32.style.height = "41px";
rectangle32.style.left = "38px";
rectangle32.style.top = "582px";
rectangle32.style.background = "#0D5DB6";
rectangle32.style.border = "1px solid #1511EB";
rectangle32.style.borderRadius = "5px";
mainContainer.appendChild(rectangle32);

// Create Rectangle 31 (Border)
const rectangle31 = document.createElement("div");
rectangle31.style.boxSizing = "border-box";
rectangle31.style.position = "absolute";
rectangle31.style.width = "293px";
rectangle31.style.height = "222px";
rectangle31.style.left = "34px";
rectangle31.style.top = "335px";
rectangle31.style.border = "1px solid #C4C4C4";
rectangle31.style.borderRadius = "5px";
mainContainer.appendChild(rectangle31);

// Create camera icon
const cameraIcon = document.createElement("div");
cameraIcon.style.position = "absolute";
cameraIcon.style.width = "39px";
cameraIcon.style.height = "32px";
cameraIcon.style.left = "79px";
cameraIcon.style.top = "268px";
mainContainer.appendChild(cameraIcon);

// Create "Gửi" text
const text5 = document.createElement("div");
text5.style.position = "absolute";
text5.style.width = "222px";
text5.style.height = "31px";
text5.style.left = "69px";
text5.style.top = "592px";
text5.style.fontFamily = "Roboto";
text5.style.fontStyle = "normal";
text5.style.fontWeight = 700;
text5.style.fontSize = "20px";
text5.style.lineHeight = "23px";
text5.style.textAlign = "center";
text5.style.color = "#FFFFFF";
text5.textContent = "Gửi";
mainContainer.appendChild(text5);

// Create usb icon
const usbIcon = document.createElement("div");
usbIcon.style.position = "absolute";
usbIcon.style.width = "70px";
usbIcon.style.height = "70px";
usbIcon.style.left = "16px";
usbIcon.style.top = "13px";
mainContainer.appendChild(usbIcon);

// Create various vector elements as specified

// Finally, append the main container to the document's body
document.body.appendChild(mainContainer);
