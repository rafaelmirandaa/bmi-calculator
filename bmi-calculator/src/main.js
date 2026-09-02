import './style.scss';
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");
const result = document.querySelector("#result");
const bmiRange = document.querySelector("#bmiRange");

function calculateBMI() {
    const height = Number(heightInput.value) / 100;
    const weight = Number(weightInput.value);
    
    if (!heightInput.value || !weightInput.value) {
        result.textContent = "Welcome!";
        bmiRange.textContent =
            "Enter your height and weight and you´ll see your BMI result here";
        return;
    }
        const bmi = weight / (height * height);
        
        result.textContent = bmi.toFixed(2);

        // Mostrar rango del BMI
        const minWeight = heightInput * (height * height);
        const maxWeight = weightInput * (height * height);

        bmiRange.textContent = 
            `Your BMI suggests you're a healthy weight. Your ideal weight is between: ${minWeight.toFixed(1)} kg - ${maxWeight.toFixed(1)} kg`;
    
}

heightInput.addEventListener("input", calculateBMI);
weightInput.addEventListener("input", calculateBMI);