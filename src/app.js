// contact list, don't change this.
const contactsList = [
  {
    name: "Togusa",
    phone: "555 555-5555",
    image: "togusa.png",
    email: "togusa@secnine.com",
    ID: "0"
  },
  {
    name: "Tachikoma",
    phone: "555 555-5555",
    image: "tachikoma.png",
    email: "tachikoma@secnine.com",
    ID: "1"
  },
  {
    name: "Saito",
    phone: "555 555-5555",
    image: "saito.png",
    email: "saito@secnine.com",
    ID: "2"
  },
  {
    name: '"major" Motoko',
    phone: "555 555-5555",
    image: "motoko.png",
    email: "motoko@secnine.com",
    ID: "3"
  },
  {
    name: "Ishikawa",
    phone: "555 555-5555",
    image: "ishikawa.png",
    email: "ishikawa@secnine.com",
    ID: "4"
  },
  {
    name: "Batou",
    phone: "555 555-5555",
    image: "batou.png",
    email: "batou@secnine.com",
    ID: "5"
  },
  {
    name: "Aramaki",
    phone: "555 555-5555",
    image: "aramaki.png",
    email: "aramaki@secnine.com",
    ID: "6"
  },
]

// Your code goes here

const Togusa = document.querySelector('.first-contact')
const Tachikoma = document.querySelector('.second-contact')
const Saito = document.querySelector('.third-contact')
const Motoko = document.querySelector('.fourth-contact')
const Ishikawa = document.querySelector('.fifth-contact')
const Aramaki = document.querySelector('.last-contact')

const Togusabutton = document.createElement('button')
cancelTogusabutton.innerHTML = 'close'

const Tachikomabutton = document.createElement('button')
cancelTachikomabutton.innerHTML = 'close'

const Saitobutton = document.createElement('button')
cancelSaitobutton.innerHTML = 'close'

const Motokoabutton = document.createElement('button')
cancelMotokoabutton.innerHTML = 'close'

const Ishiwakabutton = document.createElement('button')
cancelIshiwakabutton.innerHTML = 'close'

const Aramakibutton = document.createElement('button')
cancelAramakibutton.innerHTML = 'close'


function display_all_contacts() {
  contactsList.insertAdjacentHTML('afterbegin', contactsList)
  Togusa.appendChild(Togusabutton)
  Tachikoma.appendChild(Tachikomabutton)
  Saito.appendChild(Saitobutton)
  Motoko.appendChild(Motokoabutton)
  Ishikawa.appendChild(Ishiwakabutton)
  Aramaki.appendChild(Aramakibutton)
}


for (var prop in contactsList) {

  document.getElementById('Togusa-contactsList').innerHTML += '<li>' + prop + '</li>';

}

function display_single_contact() {

}





