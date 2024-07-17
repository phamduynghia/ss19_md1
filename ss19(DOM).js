// // *trong javasript sẽ có 2 bộ nhớ (Memory) chính:
// // - Stack: 
// // -hi


// // console.dir(Document);
// let h1HTML = document.getElementById("demo-id");
// console.log(h1HTML);

// let democlassList = document.getElementsByClassName("demo-class");


// // for (let i=0; i<democlassList.length;i++);







// // cosole.log(element);
// // });


// let divCollection = document.getElementsByTagName("div");
// console.log(divCollection[3]);
  

// // querySelector
//  let h1 = document.querySelector("h1#demo-id.demo-class");
//  console.log(h1);

// //  querySelectorAll
// let = classCollection = document.querySelectorAll(".demo-class");

// console.log(classCollection);


// let h1 = document.getElementById("demo-id");

// // h1.textContent = "nội dung mới cập nhập";


// // console.log(h1.innerText);
// // console.log(h1.innerHTML);
// // console.log(h1.textContent);


// h1.innerText ="hello,tôi vừa được cập nhật";
// h1.textContent = h1.textContent + "nội dung mới được nối vào sau";
// h1.innerHTML = `<ul style="text-decoration: line-through">Hello world</ul>`;


// // - hiển thị (render)nội dung


const blogData =[
 {  id: 1,
    title: "tôi buồn",
    description:"tôi rất buồn 2024",
    image: "hình ảnh 1",
    content: "tôi buồn ko hiểu vi sao tôi buồn",
},
{
    id: 2,
    title: "tôi cười",
    description:"tôi rất cười 2024",
    image: "hình ảnh 2",
    content: "tôi cười ko hiểu vi sao tôi cười",
},
{
    id: 3,
    title: "tôi hâm",
    description:"tôi rất hâm 2024",
    image: "hình ảnh 3",
    content: "tôi hâm ko hiểu vi sao tôi hâm",
},
{
    id: 4,
    title: "tôi ngu",
    description:"tôi rất ngu 2024",
    image: "hình ảnh 4",
    content: "tôi ngu ko hiểu vi sao tôi ngu",
},

];

const cardContainer = document.getElementById("card-container");
console.log(cardContainer);

let cardTemplate = `
<div class="card">
<h2>TETLE HEADING</h2>
<h5>Title description, Dec 7, 2017</h5>
<div class="fakeimg" style="height: 200px"> Image</div>
<p> Some text..</p>
</div>`;

for (let blog  of blogData) {
    const element = array[blog];
    
}







 let img = document.getElementById("img");
 console.log(img.id);
img.src = "https://www.google.com.vn/imgres?q=%E1%BA%A3nh&imgurl=https%3A%2F%2Fkenh14cdn.com%2Fthumb_w%2F660%2F203336854389633024%2F2023%2F8%2F23%2Floopsie-4-1692793659794560866260.jpeg&imgrefurl=https%3A%2F%2Fkenh14.vn%2Fung-dung-tao-anh-theo-phong-cach-ai-gay-sot-tai-viet-nam-chi-vai-giay-la-co-ngay-anh-dep-20230823193338754.chn&docid=SIDsoqOEBwUBoM&tbnid=J7j-GFZ3wWdPsM&vet=12ahUKEwiAiduOmquHAxX6sFYBHfLeASIQM3oECGIQAA..i&w=660&h=880&hcb=2&ved=2ahUKEwiAiduOmquHAxX6sFYBHfLeASIQM3oECGIQAA"

img.setAttribute("src","https://www.google.com.vn/imgres?q=%E1%BA%A3nh&imgurl=https%3A%2F%2Fkenh14cdn.com%2Fthumb_w%2F660%2F203336854389633024%2F2023%2F8%2F23%2Floopsie-4-1692793659794560866260.jpeg&imgrefurl=https%3A%2F%2Fkenh14.vn%2Fung-dung-tao-anh-theo-phong-cach-ai-gay-sot-tai-viet-nam-chi-vai-giay-la-co-ngay-anh-dep-20230823193338754.chn&docid=SIDsoqOEBwUBoM&tbnid=J7j-GFZ3wWdPsM&vet=12ahUKEwiAiduOmquHAxX6sFYBHfLeASIQM3oECGIQAA..i&w=660&h=880&hcb=2&ved=2ahUKEwiAiduOmquHAxX6sFYBHfLeASIQM3oECGIQAA"),
img.style.borderRadius = "50%"; 

// let a = document.getElementById("a");
//  console.log(a.href);

//  input = document.getElementById("input");
//  console.log(input.placeholder);
//  console.log(input.type);


let div = document.getElementById("demo-style");
div.style.backgroundColor = "pink";
div.style.width ="300px";
div.style.height ="300px";
div.style.color = "white";
div.style.textAlign ="center";
div.style.lineHeight ="300px";
div.style.borderRadius ="50%";
div.style.fontSize ="40px"; 





