/////////////// newCat1
const img1 = document.createElement('img');
console.log(img1);
const src1 = document.createAttribute('src');
const class1 = document.createAttribute('class');
src1.textContent = 'https://octodex.github.com/images/octobiwan.jpg';
class1.textContent = 'newCat1';
// console.log(src1);
img1.setAttributeNode(src1);
img1.setAttributeNode(class1);
const octocat1 = document.querySelector('octocat');
document.body.insertBefore(img1, octocat1);
/////////////// newCat2
const img2 = document.createElement('img');
console.log(img2);
const src2 = document.createAttribute('src');
const class2 = document.createAttribute('class');
src2.textContent = 'https://octodex.github.com/images/murakamicat.png';
class2.textContent = 'newCat2';
// console.log(src1);
img2.setAttributeNode(src2);
img2.setAttributeNode(class2);
const octocat2 = document.querySelector('octocat');
document.body.insertBefore(img2, octocat2);
////////////// newCat3
const img3 = document.createElement('img');
console.log(img3);
const src3 = document.createAttribute('src');
const class3 = document.createAttribute('class');
src3.textContent = 'https://octodex.github.com/images/daftpunktocat-guy.gif';
class3.textContent = 'newCat3';
// console.log(src1);
img3.setAttributeNode(src3);
img3.setAttributeNode(class3);
const octocat3 = document.querySelector('octocat');
document.body.insertBefore(img3, octocat3);
