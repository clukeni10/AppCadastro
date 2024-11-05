



document.addEventListener("DOMContentLoaded", function(){
    const modal=document.getElementById("myModal");
    const btn=document.getElementsByTagName("section");
    const span=document.getElementsByClassName("closeBtn")[0];
    
    for(var i=0; i<btn.length; i++){
    btn[i].onclick=function(){
        modal.style.display="block";
     
    }
    }


    function fecharModal() {
        document.getElementById("myModal").style.display = "none";
    }

    span.onclick=function(){
    modal.style.display="none";
    }
    
    }
    );
    