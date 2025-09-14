console.log("Hi")

document.body //returns all body and its elements
document.body.childnodes  //returns all child nodes of body
document.body.childNodes[0]  //text
document.body.childNodes[1]  //container div
document.body.childNodes[1].childNodes  //box divs all5
let cont = document.body.childNodes[1]
cont.firstChild  //text
cont.firstElementChild  //box1
cont.lastElementChild   //box5
cont.lastElementChild.style.color = "red";
cont.lastElementChild.style.backgroundColor = "yellow";
cont.lastElementChild.parentElement  //container div
document.body.firstElementChild.firstElementChild   //box1
document.body.firstElementChild.children  //all 5 div boxes
document.body.firstElementChild.children[1]  //box2 
document.body.firstElementChild.children[1].nextElementSibling   //box3
document.body.firstElementChild.children[1].previousElementSibling   //box1
document.body.children[1].rows   // table rows
document.body.children[1].caption   //table caption
document.body.children[1].tHead     //table header
document.body.children[1].tFoot    //table footer
document.body.children[1].tBodies  //table body

// document.body
// <body>​…​</body>​

// document.body.childNodes
// NodeList(5) [text, div.container, text, script, text]
 
// document.body.childNodes[0]
// #text

// document.body.childNodes[1]
// <div class=​"container">​…​</div>​<div class=​"box">​Box1​</div>​<div class=​"box">​Box2​</div>​<div class=​"box">​Box3​</div>​<div class=​"box">​Box4​</div>​<div class=​"box">​Box5​</div>​</div>​

// document.body.childNodes[1].childNodes
// NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]

// let cont = document.body.childNodes[1]
// undefined

// cont
// <div class=​"container">​…​</div>​

// cont.firstChild
// #text

// cont.lastChild
// #textassignedSlot: nullbaseURI: "http://127.0.0.1:5500/v67%20JavaScript%20DOM/index.html"childNodes: NodeList []data: "\n    "firstChild: nullisConnected: truelastChild: nulllength: 5nextElementSibling: nullnextSibling: nullnodeName: "#text"nodeType: 3nodeValue: "\n    "ownerDocument: documentparentElement: div.containerparentNode: div.containerpreviousElementSibling: div.boxpreviousSibling: div.boxtextContent: "\n    "wholeText: "\n    "[[Prototype]]: Text

// cont.firstElementChild
// <div class=​"box">​Box1​</div>​

// cont.lastElementChild
// <div class=​"box">​Box5​</div>​

// cont.lastElementChild.style.color = "red";
// 'red'

// cont.lastElementChild.style.backgroundColor = "yellow";
// 'yellow'

// cont.lastElementChild
// <div class=​"box">​Box5​</div>​

// cont.lastElementChild.parentElement
// <div class=​"container">​…​</div>​

// document.body.firstElementChild
// <div class=​"container">​…​</div>​

// document.body.firstElementChild.firstElementChild
// <div class=​"box">​Box1​</div>​

// document.body.firstElementChild.children
// HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]

// document.body.firstElementChild.children[0]
// <div class=​"box">​Box1​</div>​

// document.body.firstElementChild.children[1]
// <div class=​"box">​Box2​</div>​

// document.body.firstElementChild.children[1].nextElementSibling
// <div class=​"box">​Box3​</div>​

// document.body.firstElementChild.children[1].previousElementSibling
// <div class=​"box">​Box1​</div>​

// document.body.children[2]
// <script src=​"script.js">​</script>​

// document.body.children[1]
// <table>​…​</table>​

// document.body.children[1].rows
// HTMLCollection(2) [tr, tr]

// document.body.children[1].caption
// null

// document.body.children[1].tHead
// null

// document.body.children[1].tFoot
// null

// document.body.children[1].tBodies
// HTMLCollection [tbody]0: tbodylength: 1[[Prototype]]: HTMLCollection