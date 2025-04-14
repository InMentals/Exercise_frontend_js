import { buildNotification } from './notificationsView.js';
export function notificationsController(notificationsContainer){
    const showNotification = (message) => {
        const newNotification = document.createElement('div');
        newNotification.innerHTML = buildNotification(message);
    
        notificationsContainer.appendChild(newNotification);
    }
    return {showNotification}
}