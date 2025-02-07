document.getElementById('calculatebtn').addEventListener('click',calculateloan);
function calculateloan(){
     const loanamount=parseFloat(document.getElementById('loanAmount').value);
     const loaninterest=parseFloat(document.getElementById('loanInterest').value);
     const loanterm=parseFloat(document.getElementById('loanTerm').value);

     if(isNaN(loanamount)||isNaN(loaninterest)||isNaN(loanterm)){
        alert("you have not fill the proper information");
     }
     const monthlyinterest=loaninterest/100/12;
     const totalpayments=loanterm;
     const monthlypayments=(loanamount*monthlyinterest)/(1-Math.pow(1+monthlyinterest,-totalpayments));
     const totalinterest=(monthlypayments*totalpayments)-loanamount;
      displayresult(monthlypayments,totalinterest);
    }
    function displayresult(monthlypayments,totalinterest){
            const result=document.getElementById('result');
            result.innerHTML='Monthly Payment:'+monthlypayments.toFixed(2)+'<br>'+'Total Interest:'+ totalinterest.toFixed(2);
    }
