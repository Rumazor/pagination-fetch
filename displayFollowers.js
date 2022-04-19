const container = document.querySelector('.container')

const display = (followers) => {
    const newFollowers = followers.map((user)=>{
        const {avatar_url:image, html_url:url,login:name} = user
        return `
        <article class="card">
        <img src="${image}" alt="${name}"/>
        <h4>${name}</h4>
        <a href="${url}" target="_BLANK" class="btn">View Profile</a>
        </article>
        `
    }).join('')

    container.innerHTML = newFollowers
}




export default display
