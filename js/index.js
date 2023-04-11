function indexNavigationBarButton() {
    if (document.getElementById("index_Navigation_Bar_Content").style.display=="none"){
        document.getElementById("index_Navigation_Bar_Content").style.display="block";
        document.getElementById("index_Navigation_Bar_Button").innerHTML="<i class='fa-sharp fa-solid fa-angle-up'></i>";
        document.getElementById("index_Navigation_Bar_Button").style.marginTop="75px";
    } else {document.getElementById("index_Navigation_Bar_Content").style.display="none";
        document.getElementById("index_Navigation_Bar_Button").innerHTML="<i class='fa-sharp fa-solid fa-angle-down'></i>";
        document.getElementById("index_Navigation_Bar_Button").style.marginTop="0px";
    }
}
const observer = new IntersectionObserver(entries => {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('left-animation');
      }
    });
  });
const observer2 = new IntersectionObserver(entries => {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('right-animation');
      }
    });
  });
let Variant1 = document.getElementsByClassName('index_Section_1_Info_Variant_1');
for (i in Variant1){
    if (i=='length') {
        break
    }
    observer.observe(Variant1[i]);
}
let Variant2 = document.getElementsByClassName('index_Section_1_Info_Variant_2');
for (i in Variant2){
    observer2.observe(Variant2[i]);
}