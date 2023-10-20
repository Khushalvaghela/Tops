function changebg_header(){
    let chngebd = document.getElementById("head");
    let current = window.scrollY; 
    if(current>0){
        changebg.classlist.add("header_fixed");
    }else{
        changebg.classlist.remove("header_fixed");
    }
}