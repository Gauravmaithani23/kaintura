window.addEventListener('load',()=>{
 document.getElementById('loader').style.display='none';
});

const toggle=document.getElementById('menu-toggle');
const navbar=document.getElementById('navbar');
toggle.addEventListener('click',()=>{
 navbar.classList.toggle('active');
});

const themeBtn=document.getElementById('themeToggle');
themeBtn.addEventListener('click',()=>{
 document.body.classList.toggle('dark');
});

const form=document.getElementById('contactForm');
form.addEventListener('submit',function(e){
 e.preventDefault();
 document.getElementById('formMessage').innerText="Message Sent Successfully!";
 form.reset();
});

// Gallery Filter
function filterGallery(type){
    let items=document.querySelectorAll(".gallery-item");

    items.forEach(item=>{
        if(type==="all"){
            item.style.display="block";
        }else if(item.classList.contains(type)){
            item.style.display="block";
        }else{
            item.style.display="none";
        }
    });
}

// Lightbox
function openLightbox(src){
    document.getElementById("lightbox").style.display="flex";
    document.getElementById("lightbox-img").src=src;
}

function closeLightbox(){
    document.getElementById("lightbox").style.display="none";
}
