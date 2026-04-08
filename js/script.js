const btn = document.querySelector('.order-btn2');
const nameInput = document.querySelector('.client-name');
const phoneInput = document.querySelector('.client-phone');
const msgInput = document.querySelector('.client-msg');
const invalidForm = document.querySelector('.invalid-form');
const orderConfirm = document.querySelector('.order-confirm');
const feedbackHeader = document.querySelector('.feedback-header');

const burger = document.querySelector('.burger');

const menuList = document.querySelector('.menu-list');

burger.addEventListener('click', () => {
    if (menuList.classList.contains('menu-show')) {
        menuList.classList.remove('menu-show');
    } else {
        menuList.classList.add('menu-show');
    }
})

function clearInputs() {
    nameInput.value = "";
    phoneInput.value = "";
    msgInput.value = "";
}

if(btn) {
    btn.addEventListener('click', () => {
        if (nameInput.value && phoneInput.value && msgInput.value) {
            emailjs.send('service_tmww8f4', 'template_vbqnn1h', 
                {name: nameInput.value, 
                message: msgInput.value, 
                phone: phoneInput.value}).then((res) => {
                    clearInputs();
                    feedbackHeader.classList.add('hidden');
                    setTimeout(() => {
                        feedbackHeader.classList.remove('hidden');
                    }, 3000);
                    orderConfirm.classList.add('show');
                    setTimeout(() => {
                        orderConfirm.classList.remove('show');
                    }, 3000);
                }, (err) => {
                    console.log('FAILED', err.text);
                })
        } else {
            invalidForm.classList.add('active');
            setTimeout(() => {
                invalidForm.classList.remove('active');
            }, 3000);
        }
    })
}

