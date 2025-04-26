import { buildNotification } from './notificationsView.js';

export function notificationsController(notificationsContainer){

    const showNotification = (message, type) => {
        const newNotification = document.createElement('div');
        newNotification.classList.add('notification')
        newNotification.classList.add(type)
        newNotification.innerHTML = buildNotification(message, type)
        notificationsContainer.appendChild(newNotification);

        const closeButton = newNotification.querySelector('button');
        closeButton.addEventListener('click', () => {
            notificationsContainer.removeChild(newNotification);
        });
        setTimeout(() => {
            removeNotification(newNotification)}, 5000);
         }
    return {showNotification}
}


function removeNotification(notification) {
        notification.remove();
}