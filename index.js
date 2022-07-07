// Add your code here

const user = {
    name: 'Eriche',
    email: 'eriche@mail.com',
}

const userObject = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept-Type': 'application/json'
    },
    body: JSON.stringify(user),
}

const submitData = () => {
    return fetch('http://localhost:3000/users', userObject)
    .then(response => response.json())
    .then(object => console.log(object))
    .catch(error => console.log('error'))
}