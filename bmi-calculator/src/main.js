import './style.scss';
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");
const result_label = document.querySelector(".result__label");
const bmiValue = document.querySelector("#bmiValue");
const bmiRange = document.querySelector("#bmiRange");
const footInput = document.querySelector("#foot");
const inchInput = document.querySelector("#inch");
const stoneInput = document.querySelector("#stone");
const poundsInput = document.querySelector("#libras");

const metricRadio = document.querySelector("#metric");
const imperialRadio = document.querySelector("#imperial");

const metricFields = document.querySelector(".field_metric");
const imperialFields = document.querySelector(".field_imperial");

const resultcard = document.querySelector("#resultcard");

metricRadio.addEventListener("change", () => {
    metricFields.style.display = "flex";
    imperialFields.style.display = "none";
});

imperialRadio.addEventListener("change", () => {
    metricFields.style.display = "none";
    imperialFields.style.display = "flex";
});



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

        bmiRange.innerHTML = 
            `Your BMI suggests you're a healthy weight. Your ideal <br> weight is between: ${minWeight.toFixed(1)} kg - <br> ${maxWeight.toFixed(1)} kg`;
}

function calculateBMIImperial() {
    const feet = Number(footInput.value);
    const inches = Number(inchInput.value);
    const stones = Number(stoneInput.value);
    const pounds = Number(poundsInput.value);

    // Si faltan datos
    if (
        !footInput.value ||
        !inchInput.value ||
        !stoneInput.value ||
        !poundsInput.value
    ) {
        result_label.classList.remove("show");

        bmiValue.textContent = "Welcome!";

        bmiRange.textContent =
            "Enter your height and weight and you´ll see your BMI result here";

        return;
    }

    // Convertir altura a pulgadas
    const totalInches = feet * 12 + inches;

    // Convertir peso a libras
    const totalPounds = stones * 14 + pounds;

    // Fórmula BMI Imperial
    const bmi = (totalPounds * 703) / (totalInches * totalInches);

    resultcard.classList.add("active");
    result_label.classList.add("show");

    bmiValue.textContent = bmi.toFixed(1);

    // Peso saludable en libras
    const minWeight =
        (18.5 * (totalInches * totalInches)) / 703;

    const maxWeight =
        (24.9 * (totalInches * totalInches)) / 703;

    bmiRange.textContent =
        `Your BMI suggests you're a healthy weight. Your ideal weight is between: ${minWeight.toFixed(1)} lbs - ${maxWeight.toFixed(1)} lbs`;
}

heightInput.addEventListener("input", calculateBMI);
weightInput.addEventListener("input", calculateBMI);
footInput.addEventListener("input", calculateBMIImperial);
inchInput.addEventListener("input", calculateBMIImperial);
stoneInput.addEventListener("input", calculateBMIImperial);
poundsInput.addEventListener("input", calculateBMIImperial);