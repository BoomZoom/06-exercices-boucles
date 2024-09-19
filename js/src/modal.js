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

export function showModalBlockConfirm(modalHeaderValue) {
    return new Promise((resolve) => {
        // Создаем элементы модального окна
        const modal = document.createElement('div');
        const modalContent = document.createElement('div');
        const modalHeader = document.createElement('h2');
        const modalButton = document.createElement('button');
        const cancelButton = document.createElement('button');

        // Устанавливаем текст
        modalHeader.textContent = modalHeaderValue;
        modalButton.textContent = 'Подтвердить';
        cancelButton.textContent = 'Отменить';
        
        // Стилизация элементов через отдельную функцию
        applyModalStyles(modal, modalContent, modalButton, cancelButton, modalHeader);

        // Добавляем элементы в документ
        modalContent.appendChild(modalHeader);
        modalContent.appendChild(modalButton);
        modalContent.appendChild(cancelButton);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);

        // Функция закрытия модального окна
        function closeModal(result) {
            document.body.removeChild(modal); // Удаляем модальное окно из DOM
            resolve(result); // Разрешаем промис, передавая результат (true или false)
        }

        // Обработчики для кнопок
        modalButton.onclick = () => {
            closeModal(true); // Пользователь подтвердил
        };

        cancelButton.onclick = () => {
            closeModal(false); // Пользователь отменил
        };

        // Закрытие модального окна при клике вне его содержимого
        modal.onclick = (event) => {
            if (event.target === modal) {
                closeModal(false); // Закрываем, если клик был вне модального содержимого
            }
        };
    });
}

// Функция для стилизации модальных элементов
// function applyModalStyles(modal, modalContent, modalButton, cancelButton) {
//     // Стили для контейнера модального окна
//     modal.style.display = 'flex';
//     modal.style.position = 'fixed';
//     modal.style.top = '0';
//     modal.style.left = '0';
//     modal.style.width = '100vw';
//     modal.style.height = '100vh';
//     modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
//     modal.style.justifyContent = 'center';
//     modal.style.alignItems = 'center';
//     modal.style.zIndex = '1000';

//     // Стили для содержимого модального окна
//     modalContent.style.backgroundColor = '#fff';
//     modalContent.style.padding = '20px';
//     modalContent.style.borderRadius = '8px';
//     modalContent.style.textAlign = 'center';
//     modalContent.style.width = '400px';
//     modalContent.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';

//     // Стили для кнопок
//     modalButton.style.padding = '10px 20px';
//     modalButton.style.marginRight = '10px';
//     modalButton.style.border = 'none';
//     modalButton.style.backgroundColor = '#28a745';
//     modalButton.style.color = '#fff';
//     modalButton.style.borderRadius = '4px';
//     modalButton.style.cursor = 'pointer';

//     cancelButton.style.padding = '10px 20px';
//     cancelButton.style.border = 'none';
//     cancelButton.style.backgroundColor = '#dc3545';
//     cancelButton.style.color = '#fff';
//     cancelButton.style.borderRadius = '4px';
//     cancelButton.style.cursor = 'pointer';
// }


// Функция для стилизации модальных элементов
function applyModalStyles(modal, modalContent, modalButton, cancelButton, modalHeader) {
    // Стили для контейнера модального окна
    modal.style.display = 'flex';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100vw';
    modal.style.height = '100vh';
    modal.style.backgroundSize = 'cover';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '1000';

    // Стили для содержимого модального окна
    modalContent.style.backgroundColor = '#5fdea3';
    modalContent.style.padding = '20px';
    modalContent.style.border = '20px solid #ff0000';
    modalContent.style.borderImage = "url('./svg/border.svg') 30 stretch";
    modalContent.style.width = '400px';
    modalContent.style.textAlign = 'center';
    modalContent.style.borderRadius = '10px';
    modalContent.style.boxShadow = '2px 2px 10px rgba(0, 0, 0, 0.5)';

    // Стили для заголовка модального окна
    modalHeader.style.fontSize = '24px';
    modalHeader.style.fontFamily = "'Comic Sans MS', 'Comic Sans', cursive";
    modalHeader.style.color = '#ffcc00';
    modalHeader.style.textShadow = '2px 2px 0 #000000, 4px 4px 0 #ff0000';

    // Стили для кнопок
    const buttonStyle = (button, backgroundColor, hoverColor) => {
        button.style.margin = '20px 10px';
        button.style.padding = '10px 20px';
        button.style.backgroundColor = backgroundColor;
        button.style.color = '#fff';
        button.style.border = 'none';
        button.style.fontFamily = "'Comic Sans MS', 'Comic Sans', cursive";
        button.style.fontSize = '16px';
        button.style.borderRadius = '5px';
        button.style.cursor = 'pointer';
        button.style.boxShadow = '2px 2px 0 #000000';
        button.style.transition = 'background-color 0.3s ease, box-shadow 0.3s ease';
        
        button.onmouseover = () => {
            button.style.backgroundColor = hoverColor;
            button.style.color = '#000';
        };
        button.onmouseout = () => {
            button.style.backgroundColor = backgroundColor;
            button.style.color = '#fff';
        };
    };

    buttonStyle(modalButton, '#ff0000', '#ffcc00'); // Подтвердить
    buttonStyle(cancelButton, '#000', '#ccc'); // Отменить
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