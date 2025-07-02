document.addEventListener('DOMContentLoaded', function () {
    const subscriptionForm = document.getElementById('subscriptionForm');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = document.getElementById('btnText');
    const btnLoading = document.getElementById('btnLoading');

    subscriptionForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Mostrar estado de carregamento
        btnText.style.display = 'none';
        btnLoading.style.display = 'inline';
        submitBtn.disabled = true;

        // Esconder mensagens anteriores
        successMessage.style.display = 'none';
        errorMessage.style.display = 'none';

    });

    function showSuccess() {
        successMessage.style.display = 'block';
        subscriptionForm.reset();
        resetButton();

        // Esconder a mensagem após 5 segundos
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
    }

    function showError() {
        errorMessage.style.display = 'block';
        resetButton();

        // Esconder a mensagem após 5 segundos
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 5000);
    }

    function resetButton() {
        btnText.style.display = 'inline';
        btnLoading.style.display = 'none';
        submitBtn.disabled = false;
    }

    // Efeito de hover no botão
    submitBtn.addEventListener('mouseenter', function () {
        if (!submitBtn.disabled) {
            submitBtn.style.transform = 'translateY(-2px)';
        }
    });

    submitBtn.addEventListener('mouseleave', function () {
        submitBtn.style.transform = 'translateY(0)';
    });

    // Validação em tempo real do e-mail
    const emailInput = document.getElementById('email');
    emailInput.addEventListener('input', function () {
        if (emailInput.validity.typeMismatch) {
            emailInput.setCustomValidity('Por favor, insira um endereço de e-mail válido.');
        } else {
            emailInput.setCustomValidity('');
        }
    });
});