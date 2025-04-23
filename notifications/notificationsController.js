import { buildNotification } from './notificationsView.js';

export function notificationsController(notificationsContainer){

    const showNotification = (message) => {
        const newNotification = document.createElement('div');
        newNotification.innerHTML = buildNotification(message);
    
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