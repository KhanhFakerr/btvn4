let inputs = document.querySelectorAll(".number");
let btns = document.querySelectorAll(".button");
let result = document.querySelector(".result");
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let outputContent = "";
    if (isNaN(parseInt(inputs[0].value)) | isNaN(parseInt(inputs[1].value))) {
        result.textContent = "Input must be a number";
    }else{
        switch (e.target.textContent) {
            case "Sum":
              outputContent = parseInt(inputs[0].value) + parseInt(inputs[1].value);
              result.textContent = outputContent;
              break;
            case "Sub":
              outputContent = parseInt(inputs[0].value) - parseInt(inputs[1].value);
              result.textContent = outputContent;
              break;    
            case "Mul":
                                                                                  outputContent = parseInt(inputs[0].value) * parseInt(inputs[1].value);
              result.textContent = outputContent;
              break;
            case "Div":
              if (parseInt(inputs[1].value) != 0) {
                outputContent =
                  parseInt(inputs[0].value) / parseInt(inputs[1].value);
                result.textContent = outputContent;
              } else {
                result.textContent = "The second number must different with 0";
              }
              break;
          }
      
    }
  });
});