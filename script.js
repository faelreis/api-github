const inputUser = document.querySelector('#input-user');
const btnUser = document.querySelector('#btn-user');
const modal = document.querySelector('#modal');
const card = document.querySelector('#card');
const errorMessage = document.querySelector('#error-message');
const btnSearch = document.querySelector('#btn-search');

btnUser.addEventListener('click',()=>{
    let userGit = inputUser.value;
    if(userGit == "" || userGit == undefined || userGit == null){
        errorMessage.classList.add('active');
    } else{
        let url = `https://api.github.com/users/${userGit}`
        let userName = document.querySelector('#user-name')
        let bio = document.querySelector('#bio');
        let avatar = document.querySelector('#avatar');
        let linkGit = document.querySelector('#link-git');
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            avatar.src = data.avatar_url;
            userName.textContent = data.name;
            bio.textContent = data.bio;
            linkGit.textContent = data.html_url;
            linkGit.href = data.html_url;
        })
        .catch(error => console.error('Ocorreu um erro:', error));
        modal.classList.remove('active');
        card.classList.add('active');
    }
});

inputUser.addEventListener('click', ()=>{
    errorMessage.classList.remove('active');
})

btnSearch.addEventListener('click', ()=>{
    modal.classList.add('active');
    card.classList.remove('active');
})