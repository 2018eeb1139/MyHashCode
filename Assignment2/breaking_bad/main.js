const bad=document.getElementById('bad');
const characters=57;

const fetchCharacters=async()=>{
    for(let i=1;i<characters;i++){
        await getCharacter(i);
    }
}

const getCharacter=async id=>{
    const url=`https://www.breakingbadapi.com/api/characters/${id}`;
    const res=await fetch(url);
    const char=await res.json();
    //console.log(char[0].name);
    createbad(char);
}

const createbad=char=>{
    const badprofile=document.createElement('div');
    badprofile.classList.add('profile');
    //const {id,name,occupations,status}=char;
    const occupation=char[0].occupation[0];
    const badprofileHTML=`
        <div class="img-container">
            <img src="${char[0].img}" alt="dp" width="160px" height="160px">
        </div>
        <div class="info">
            <span class="number">${char[0].char_id}</span>
            <h3 class="name">${char[0].name}</h3>
            <small class="type"><b>Occupation:</b> <span>${occupation}</span></small>
            <small class="type"><b>Status:</b> ${char[0].status}</small>
        </div>
    `
    badprofile.innerHTML=badprofileHTML;
    bad.appendChild(badprofile);
}

fetchCharacters();