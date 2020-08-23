
var num;
num=Math.floor(Math.random() * 100)+1;

function get_number()
{
	Number(document.getElementById("number").innerHTML = num).value;
	var zam=Number(document.getElementById("an").value);
	document.getElementById("ad").innerHTML += zam+","+' ';
	if(zam==num)
	{
		document.getElementById("good").innerHTML = 'Поздравляем это верный ответ!';
		
	}
	else
	{
		document.getElementById("good").innerHTML = 'Не правильное число!';
		 document.getElementById("good").bgColor="red";
	}
	if (zam!==num)
	{
	if(zam<num)
	{
		document.getElementById("men").innerHTML = 'Число должно быть больше введенного';
	}else
	{
		document.getElementById("men").innerHTML = 'Число должно быть меньше введенного';
	}
	} else
	{
		document.getElementById("men").innerHTML = '';
		setTimeout("location.href = 'index.html';", 400);
	}
	
}
