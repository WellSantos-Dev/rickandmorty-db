const input = document.querySelector('.person-input')
const buttonSend = document.querySelector('.submit-person')
const h3Name = document.querySelector('.nome')
const imagePerson = document.querySelector('.image-person')
const h3 = document.querySelector('.info-person h3')
const status = document.querySelector('.status')
const statusParagraf = document.querySelector('.status-paragraf')
const genderPerson = document.querySelector('.gender-person')
const speciesPerson = document.querySelector('.species-person')

function connectApi(id) {
  const results = fetch(`https://rickandmortyapi.com/api/character/${id}`)

  .then(r => {
    return r.json()
  })

  .then(person => {
    console.log(person)
    if(person.status == 'Alive') {
      status.style.backgroundColor = '#00ff00'
      statusParagraf.innerHTML = person.status
      genderPerson.innerHTML = person.gender
      speciesPerson.innerHTML = person.species
    } 
    else if (person.status == 'Dead') {
        status.style.backgroundColor = '#ff0000'
        statusParagraf.innerHTML = person.status
        genderPerson.innerHTML = person.gender
        speciesPerson.innerHTML = person.species
    }
    
    h3Name.innerHTML = person.name
    imagePerson.setAttribute('src', person.image)
  })
}


function getInputValue() {
  buttonSend.addEventListener('click', (e) => {
    e.preventDefault();
    let id = input.value;

    connectApi(id)
  })
}

getInputValue()