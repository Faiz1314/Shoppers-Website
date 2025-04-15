//<script type="text/javascript">

    const close=document.querySelector(".close"); 
    const open=document.querySelector(".ham"); 
    const menu=document.querySelector(".menu")
    close.addEventListener("click",()=> { menu.style.visibility="hidden"; } ) 
    open.addEventListener("click",()=> { menu.style.visibility="visible";  } )

//</script>

// Apply the upper comments to integrate it in the HTML file