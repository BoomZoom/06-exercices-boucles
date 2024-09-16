// src/modal.js

export default function showModal(modalHeaderValue, oldValue, onSubmit) {
    const modal = document.getElementById('modal');
    const modalInput = document.getElementById('modal-input');
    const modalButton = document.getElementById('modal-button');
    // const closeButton = document.querySelector('.close-button');

    const modalHeader = document.querySelector("#modal > div > h2")
    modalHeader.innerHTML = modalHeaderValue

    modal.style.display = 'flex';
    modalInput.value = oldValue;

    function closeModal() {
        if (onSubmit) onSubmit(modalInput.value.trim());
        modal.style.display = 'none';
        modalInput.value = '';
    }

    modalButton.onclick = () => {
        closeModal();
    };

    modalInput.onkeydown = (event) => {
        if (event.key === 'Enter') {
            closeModal();
        }
    };

    // closeButton.addEventListener('click', closeModal);
}

export function showModalBlock(modalHeaderValue, oldValue) {
    return new Promise((resolve) => {
        const modal = document.getElementById('modal');
        const modalInput = document.getElementById('modal-input');
        const modalButton = document.getElementById('modal-button');
        // const closeButton = document.querySelector('.close-button');

        const modalHeader = document.querySelector("#modal > div > h2");
        modalHeader.innerHTML = modalHeaderValue;

        modal.style.display = 'flex';
        if(oldValue){
            modalInput.value = oldValue;
        }

        function closeModal() {
            const value = modalInput.value.trim();
            modal.style.display = 'none';
            modalInput.value = '';
            resolve(value); // Разрешаем промис при закрытии модального окна
        }

        modalButton.onclick = () => {
            closeModal();
        };

        modalInput.onkeydown = (event) => {
            if (event.key === 'Enter') {
                closeModal();
            }
        };

        // closeButton.addEventListener('click', closeModal);
    });
}

// export default function showModal(modalHeaderValue, oldValue) {
//     const modal = document.getElementById('modal');
//     const modalInput = document.getElementById('modal-input');
//     const modalButton = document.getElementById('modal-button');
//     // const closeButton = document.querySelector('.close-button');
//
//     const modalHeader = document.querySelector("#modal > div > h2");
//     modalHeader.innerHTML = modalHeaderValue;
//
//     modal.style.display = 'flex';
//     modalInput.value = oldValue;
//
//     // Возвращаем промис, который будет разрешен при закрытии модалки
//     return new Promise((resolve) => {
//         function closeModal() {
//             const inputValue = modalInput.value.trim();
//             modal.style.display = 'none';
//             modalInput.value = '';
//             resolve(inputValue); // Разрешаем промис значением ввода
//         }
//
//         modalButton.onclick = () => {
//             closeModal();
//         };
//
//         modalInput.onkeydown = (event) => {
//             if (event.key === 'Enter') {
//                 closeModal();
//             }
//         };
//
//         // closeButton.addEventListener('click', closeModal);
//     });
// }