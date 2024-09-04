var dataForm=document.querySelector(".dataForm");
dataForm.onsubmit=function(e){
    e.preventDefault();
    var amount=e.target.elements["amount"].value;
    var selectedCurrency=e.target.elements["exchangeCurrency"].value;
    
        if(selectedCurrency=="dinar")
        {
            var result=amount*5.21;
            var para=document.querySelector(".convertedAmount");
            para.textContent=`${amount} Nis is ${result} dinnar`;
        }
        else if(selectedCurrency=="dollar")
        {
            var result=amount*3.69;
            var para=document.querySelector(".convertedAmount");
            para.textContent=`${amount} Nis is ${result} dollar`;
        }
        else if(selectedCurrency=="nis")
        {
            var para=document.querySelector(".convertedAmount");
            para.textContent=`${amount} Nis`;
        }
    

}