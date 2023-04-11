function lessonsOpen(place,text,string) {
    if (document.getElementById(place).style.display=="none") {
        document.getElementById(place).style.display="block";
        text.innerHTML='<i class="fa-sharp fa-solid fa-angle-down"></i> &nbsp; &nbsp;'+string+'&nbsp; &nbsp; <i class="fa-sharp fa-solid fa-angle-down"></i>'
    } else {
        document.getElementById(place).style.display="none";
        text.innerHTML='<i class="fa-sharp fa-solid fa-angle-up"></i> &nbsp; &nbsp;'+string+'&nbsp; &nbsp; <i class="fa-sharp fa-solid fa-angle-up"></i>'
    }
}
function OpenModal() {
    document.getElementById("modal").style.display="block";
}
let Realhtml = '';
let RealCSS = '';
let Realjs = '';
let text;
function SetThing() {
    text="<html><head><style>"+RealCSS+"</style></head><body>"+Realhtml+"<script>"+Realjs+"</script></body></html>"
    let iframe=document.getElementById('viewer').contentWindow.document;
    iframe.open();
    iframe.write(text);
    iframe.close();
    }
function HTMLChange(html) {
    if (html=='danser' || html=='Danser') {
        OpenModal();
    } else {
        Realhtml=html;
        SetThing();
    }
}
function CSSChange(css) {
    RealCSS=css;
    SetThing();
}
function JavascriptChange(js) {
    Realjs=js;
    SetThing();
}
function Loaded() {
    let spot = localStorage.getItem("Array1");
    let spot2 = localStorage.getItem("Array2");
    let content = dbLessons[spot].lessons[spot2];
    document.getElementById("lessons-heading-title").innerHTML=content.Name;
    document.getElementById("lessons-heading-info").innerHTML=content.content;
    document.getElementById("lessons-heading-image").src=content.image_url;
}
function CloseModal2(a) {
    a.style.display="none";
}
function OpenModal2(a) {
    document.getElementById("modal2").style.display="block";
    document.getElementById("modal2img").src=a;
}