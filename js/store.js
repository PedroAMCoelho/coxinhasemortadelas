window.onload = function(){

		var menu = document.getElementsByClassName("pop");
		var body = document.getElementsByTagName("body");
		var btnclose = document.getElementsByClassName("btn-close");
		var superinfo = document.getElementsByClassName("superinfo-bg");
		var check = false;

		if(check == false){
	//quando o cursor estiver em cima do elemento da classe superinfo-bg
	superinfo[0].addEventListener("mouseover", mouseOver);

	//executa essa função que executa outra quando o cursor sair do body
	function mouseOver() {
		document.body.addEventListener("mouseleave", mouseLeave);		
	}

	function mouseLeave() {
		if(check == false){
			menu[0].style.visibility = "visible";
			menu[0].style.zIndex = 1;
			menu[0].style.transition = ".5s linear";		
			check=true;
		}		
	}
}


btnclose[0].addEventListener("click",
	function fecharMenu() {

		if(menu[0].style.visibility=="visible") 
		{  
			menu[0].style.visibility = "hidden";
			menu[0].style.zIndex = -1;				
			menu[0].style.transition = "0s";
			check=true;
		}    
		else {  
			menu[0].style.visibility = "visible";  
			check=true;
		}
	});
}