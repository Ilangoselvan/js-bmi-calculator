let form=document.getElementById("health");
	form.addEventListener('submit',function(e){
		e.preventDefault();
		
		
		let weight=parseInt(document.querySelector('#weight').value);
		let height=parseInt(document.querySelector('#height').value);
		let result=document.querySelector('#result');
			if((weight==='') || (weight<0) || (isNaN(weight))){
				result.innerHTML='please enter correct weight';
				result.style.color='red';
			}
			else if((height==='') || (height<0) || (isNaN(height))){
				result.innerHTML='please enter correct height';
				result.style.color='red';
				}
			else{
				
				result.innerHTML=Math.round(weight*100*100/height**2);
				
				if(result.innerHTML>0 && result.innerHTML<=19){
					result.innerHTML=(`your BMI is ${result.innerHTML} <br> You are underweight`);
					result.style.backgroundColor="red";
				}
				else if(result.innerHTML>20 && result.innerHTML<=25){
					result.innerHTML=(`your BMI is ${result.innerHTML}<br> You are normalweight`);
					result.style.backgroundColor="green";
				}
				else if(result.innerHTML>26 && result.innerHTML<=30){
					result.innerHTML=(`your BMI is ${result.innerHTML} <br> You are overweight`);
					result.style.backgroundColor="brown";
				}
				else{
					result.innerHTML=(`your BMI is ${result.innerHTML} <br> You are obesity`);
					result.style.backgroundColor="";
				}
			}
	})
	