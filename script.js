const password1 = document.getElementById('password1')
const password2 = document.getElementById('password2')
const pass = document.querySelector('#pass')
const pas = document.querySelector('#pas')
const clicked = document.getElementById('clicked')
const email = document.getElementById('email');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const erroremail = document.getElementById('erroremail')

clicked.addEventListener('submit', (e)=>{
    e.preventDefault()
    let erreurs = [];


    if (password1.value.trim() !== password2.value.trim()){
        pass.textContent = "ces deux mots de passe ne sont pas identiques"
        erreurs.push("a");

    }
    if(password1.value == ""){
        pas.textContent = "champ requis"
        erreurs.push("b");
    }
    if(password2.value == ""){
        pass.textContent = "champ requis"
        erreurs.push("c");
    }
    if(password1.value.length < 6 || password2.value.length < 6){
        pass.textContent = "ce mots de passe est très court"
        erreurs.push("d");
    }
    if (!emailRegex.test(email.value)) {
        
        erroremail.textContent = "Veuillez entrer une adresse e-mail valide."
        erreurs.push("Le nom est obligatoire.");
    
        return; 
    }

      if (erreurs.length === 0) {
    console.log("Formulaire valide !");
    clicked.reset(); 
    pas.textContent = ""
    pass.textContent = ""
    erroremail.textContent = ""
  } 
}
)

