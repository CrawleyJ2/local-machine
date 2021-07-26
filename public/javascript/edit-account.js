async function newLocationHandler(event) {
    event.preventDefault();
    const location = document.querySelector('input[name="user-location"]').value;

    const response = await fetch('/api/users', {
        method: 'PUT',
        body: JSON.stringify({
            user_id,
            location
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('#save-profile').addEventListener('submit', newLocationHandler);