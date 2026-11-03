const reviews=[{
    id:1,
    name:"susan smith",
    job:"webdeveloper",
    text:"hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
},{
   id:2,
    name:"yooo",
    job:"webdesianr",
    text:"dddddddddddddddddddddddddddddddddddddddddddddddddd",
},{
        id:3,
    name:"mooooo",
    job:"webkkkkkkkkkkdeveloper",
    text:"svsvsjsisksklsllssggsfsfh",
},{
        id:4,
    name:"enockse",
    job:"wnyumnar",
    text:"hhshwkwkiswuiuwer0394r3rjfefrnemgekgbvels;egng",
}]
const img=document.getElementById("person-img");
const author=document.getElementById("author");
const job=document.getElementById("job");
const info=document.getElementById("info");

const prevBtn=document.querySelector(".prev-btn");
const nextBtn=document.querySelector(".next-btn");
const randomBtn=document.querySelector(".random-btn");

let currentItem=0;

window.addEventListener("DOMContentLoaded",function(){
    showPerson();
})

function showPerson(){
        const item=reviews[currentItem];
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;

}

nextBtn.addEventListener("click",function(){
    currentItem++;
    if(currentItem>reviews.length-1){
        currentItem=0;
    }
    showPerson(currentItem);
})
prevBtn.addEventListener("click",function(){
    currentItem--;
     if(currentItem<0){
        currentItem=reviews.length-1;
    }
    showPerson(currentItem);
})

randomBtn.addEventListener("click",function(){
    currentItem=Math.floor(Math.random()*reviews.length);
    showPerson();
});




