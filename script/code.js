function Create(){
    let container = document.getElementById("container");
    
    container.innerHTML=`<form>
    <h1 id="Head" style="text-align:center;">Interest Amount</h1>
    </label>
    <label class="Interest">Amount:
         <input id="Amount" type="text" placeholder="amount">
         
        </input>
        </label>
        <br>
        <br>
        <label class="Interest">Interest:
        <input id="InterestAmount" type="text" placeholder="interest">
        
       </input>
       <br>
       <br>
       </label>
        <label class="Interest">Result:
         <input id="Result" type="text" placeholder="results">
         
        </input>
        </label>
        <br>
        <br>
        <button id="Button" type="button" onclick="interestAmount()">Converter</button>
    </form>`
    
    }
    
    Create()

    function interestAmount(){
        let Amount=parseInt(document.querySelector('#Amount').value);
        let InterestAmount=document.querySelector('#InterestAmount').value;
        let Calculate = eval (Amount * (InterestAmount/100));
        let FinalAmount =eval(Amount + Calculate);

        document.getElementById('Result').value= FinalAmount;
        
    }

