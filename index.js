const testimonials=[
    {
        name: "Sarah Johnson",
        text: "I am beyond impressed with the mobile technology offered by apple. Their products are sleek, innovative, and user-friendly. I can't imagine my day without my apple device. Thank you for enhancing my digital experience!",
        photourl:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Emily Johnson",
        text: "I am beyond impressed with the mobile products from apple. The sleek designs and innovative features truly set them apart from the competition. I can't imagine my life without my apple device now!",
        photourl:"https://media.istockphoto.com/id/179014050/photo/portrait-of-a-young-adult.jpg?s=1024x1024&w=is&k=20&c=GeyRD9BFxLoZd-CXDIPovc5LHiUt_g47YOxKhrrBBe8=",
    },
    {
        name: "Sarah Johnson",
        text: "I am extremely satisfied with the innovative mobile solutions offered by apple. The sleek design and user-friendly interface make it a top choice for tech enthusiasts like me.",
        photourl:"https://media.istockphoto.com/id/1267938468/photo/portrait-of-an-handsome-man-smiling.jpg?s=1024x1024&w=is&k=20&c=_vTu7RVIZx_4uLighsiAU4VFpcoZ52xp970LT6PWdOs=",
    },
    {
        name: "Vinnet Panday",
        text: "I am extremely satisfied with the innovative mobile solutions offered by apple. The sleek design and user-friendly interface make it a top choice for tech enthusiasts like me.",
        photourl:"https://media.istockphoto.com/id/1194482307/photo/laughing-handsome-young-man-over-isolated-gray-background.jpg?s=1024x1024&w=is&k=20&c=XechSOxwgrSnCmloaM4eZyiOe0voYbj2ji43zyMHD2Y=",
    },
];
const imgEl=document.querySelector("img");
const textEl=document.querySelector(".text");
const userName=document.querySelector(".user-name");

ind=0;
updateTestimonial();
function updateTestimonial(){
    const {name,text,photourl}=testimonials[ind];
    imgEl.src=photourl;
    textEl.innerText=text;
    userName.innerText=name;
    ind++;
    if(ind==testimonials.length){
        ind=0;
    }
    setTimeout(()=>{
        updateTestimonial();
    },2000);
}