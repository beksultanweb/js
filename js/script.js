function myFirstApp(name,age){
	alert("Привет, меня зовут "+name+" и это моя первая программа!");
	function showSkill(){
		let skill=["browser", "paint", "google"];
		for(let i=0;i<skill.length;i++){
			document.write(skill[i]);
		}
	}
	showSkill();
	function checkAge(){
		if (age>18){
			alert("Красавчег");
		}
		else{
			alert("Карапуз");
		}
	}
	function calcPow(num){
		console.log(num*num);
	}
	calcPow(4);
}
myFirstApp("Бексултан",20);