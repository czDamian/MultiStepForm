const multiStepForm = document.querySelector("[data-multi-step]");
const formSteps = [...multiStepForm.querySelectorAll("[data-step]")];

let currentStep = formSteps.findIndex(step => {
    return step.classList.contains("active")
})

if (currentStep < 0) {
    currentStep = 0
    showCurrentStep()
}

multiStepForm.addEventListener("click", e => {
    let incrementor;
    if (e.target.matches("[data-next]")) {
        incrementor = 1;
    } else if (e.target.matches("[data-previous]")) {
        incrementor = -1;
    }
    if (incrementor == null) return;
    const inputs = [...formSteps[currentStep].querySelectorAll("input")];
    const allValid = inputs.every(input => input.reportValidity());
    if (allValid) {
        setTimeout(() => {
            currentStep += incrementor;
            showCurrentStep();
        }, 1000); // Delay of 1 seconds (1000 milliseconds)
    }
});

function showCurrentStep() {
    formSteps.forEach((step, index) => {
        step.classList.toggle("active", index === currentStep);
    });
}

function handleSubmit (e) {
  e.preventDefault();
  alert('Successfully registered')
}