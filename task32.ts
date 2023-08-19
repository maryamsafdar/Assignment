const current_users: string[] = ['Maryam', 'Fatima', 'Nida', 'Iqra', 'Asma'];
const new_users: string[] = ['Laiba', 'Javeria', 'Maryam', 'Nida', 'Mehreen'];

const lowerCurrentUsers=current_users.map(x=>x.toLocaleLowerCase())
for (const newUsername of new_users) {

    const usernameExists = lowerCurrentUsers.includes(newUsername.toLowerCase()); 
    if (usernameExists) {
        console.log(`The username '${newUsername}' is already taken. Please choose a different username.`);
    } else {
        console.log(`The username '${newUsername}' is available.`);
    }
}``
