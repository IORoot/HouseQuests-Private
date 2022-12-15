// ┌─────────────────────────────────────┐
// │                                     │
// │ Get the Notifications from github   │
// │                                     │
// └─────────────────────────────────────┘
export async function request_notifications()
{
    // Send the marker details to the backend.
    let notifications = await fetch(notification_url)
    let data = await notifications.text();

    document.getElementById('intro-modal-notifications').innerHTML = data
}