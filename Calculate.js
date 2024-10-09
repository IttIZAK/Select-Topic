document.addEventListener("DOMContentLoaded", () => {
    const resultDiv = document.getElementById("result");
    const dadTraitsSelect = document.getElementById("dad-traits");
    const momTraitsSelect = document.getElementById("mom-traits");
  
    function calculateResult() {
      const dad = parseInt(dadTraitsSelect.value);
      const mom = parseInt(momTraitsSelect.value);
  
      if ([1, 2, 3].includes(dad) && [1, 2, 3].includes(mom)) {
        let prob_disease = 0;
  
        // Logic for calculating probability based on selected traits
        if (dad === 1 && mom === 1) { // AA & AA
          prob_disease = 1.0;
        } else if (dad === 1 && mom === 2) { // AA & Aa
          prob_disease = 1.0;
        } else if (dad === 1 && mom === 3) { // AA & aa
          prob_disease = 1.0;
        } else if (dad === 2 && mom === 1) { // Aa & AA
          prob_disease = 1.0;
        } else if (dad === 2 && mom === 2) { // Aa & Aa
          prob_disease = 0.75;
        } else if (dad === 2 && mom === 3) { // Aa & aa
          prob_disease = 0.5;
        } else if (dad === 3 && mom === 1) { // aa & AA
          prob_disease = 1.0;
        } else if (dad === 3 && mom === 2) { // aa & Aa
          prob_disease = 0.5;
        } else if (dad === 3 && mom === 3) { // aa & aa
          prob_disease = 0.0;
        }
  
        resultDiv.innerHTML = `Probability of child being diseased: ${(prob_disease * 100).toFixed(2)}%`;
      } else {
        resultDiv.innerHTML = "Invalid selection. Please choose traits for both parents.";
      }
    }
  
    dadTraitsSelect.addEventListener("change", calculateResult);
    momTraitsSelect.addEventListener("change", calculateResult);
  });
  