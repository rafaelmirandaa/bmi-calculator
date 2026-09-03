import './style.scss';
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");
const result_label = document.querySelector(".result__label");
const bmiValue = document.querySelector("#bmiValue");
const bmiRange = document.querySelector("#bmiRange");

function calculateBMI() {
    const height = Number(heightInput.value) / 100;
    const weight = Number(weightInput.value);
    
    if (!heightInput.value || !weightInput.value) {

        result_label.classList.remove("show");
        bmiValue.textContent = "Welcome!";
        bmiRange.textContent =
            "Enter your height and weight and you´ll see your BMI result here";
        
        return;
    }
        const bmi = weight / (height * height);

        result_label.classList.add("show");
        bmiValue.textContent = bmi.toFixed(1);
    

        // Mostrar rango del BMI
        const minWeight = 18.5 * (height * height);
        const maxWeight = 24.9 * (height * height);

        bmiRange.textContent = 
            `Your BMI suggests you're a healthy weight. Your ideal weight is between: ${minWeight.toFixed(1)} kg - ${maxWeight.toFixed(1)} kg`;
    
}

heightInput.addEventListener("input", calculateBMI);
weightInput.addEventListener("input", calculateBMI);