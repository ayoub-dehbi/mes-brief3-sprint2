const config = {
  ateliers: [
    { id: 1, titre: "Créer une affiche avec Figma", places: 8 },
    { id: 2, titre: "Découvrir les raccourcis VS Code", places: 0 },
    { id: 3, titre: "Construire un quiz en JavaScript", places: 5 },
    { id: 4, titre: "Créer une page responsive avec Tailwind CSS", places: 12 },
    { id: 6, titre: "Animer une interface avec CSS", places: 0 },
  ],
  modes: {
    presentiel: "En présentiel",
    distance: "À distance",
  },
  campus: ["Youssoufia", "Asfi", "Nador"],
};

const selectedConfig = {
  atelierId: null,
  mode: "",
  campus: "",
  email: "",
};

const liste_ateliers = document.getElementById("liste-ateliers");
const liste_modes = document.getElementById("liste-modes");
const liste_campus = document.getElementById("liste-campus");
const recapitulatif_contenu = document.getElementById("recapitulatif-contenu")

const Confirmer = document.getElementById("inscription-form")


displaya_ateliers();
displaya_mode();
// const mod = document.querySelectorAll(" input[name = mode])")
// const atel = document.querySelectorAll(" input[name = atelier])")
// console.log(mod);
// console.log(atel);

function displaya_ateliers() {
  liste_ateliers.innerHTML = "";
  config.ateliers.forEach((element) => {
    if (element.places != 0) {
      const label = document.createElement("label");
      const input = document.createElement("input");
      const span1 = document.createElement("span");
      const strong = document.createElement("strong");
      const span2 = document.createElement("span");

      label.setAttribute("class", "carte-choix");

      input.setAttribute("type", "radio");
      input.setAttribute("name", "atelier");
      input.setAttribute("value", `${element.id}`);
      input.setAttribute("required", "");
      input.setAttribute("aria-describedby", "erreur-atelier");

      strong.setAttribute("class", "atelier-titre");
      strong.textContent = element.titre;

      span2.setAttribute("class", "atelier-places detail");
      span2.textContent = `${element.places}  place desponible`;

      span1.append(strong, span2);

      label.append(input, span1);

      liste_ateliers.append(label);
    }
  });
}

function displaya_mode() {
  liste_modes.innerHTML = "";

  // if (atel.checked){
    
  // }


  for (const element in config.modes) {
    const label = document.createElement("label");
    const input = document.createElement("input");
    const span = document.createElement("span");
    label.setAttribute("class", "carte-choix");

    input.setAttribute("type", "radio");
    input.setAttribute("name", "mode");
    input.setAttribute("value", `${element.presentiel} `);
    input.setAttribute("required", "");
    input.setAttribute("aria-describedby", "erreur-mode");

    label.setAttribute("class", "carte-choix");

    span.setAttribute("class", "mode-libelle");
    span.textContent = `${element}`;
    label.append(input, span);

    liste_modes.append(label);
  }

}

// mod.forEach(element => {
//   element.addEventListener("change",()=>{
//     if (element.checked){

//     }
//   })
  
// });

Confirmer.addEventListener("submit",(e)=>{
  e.preventDefault()
const div1 = document.createElement("div")
const dt1 = document.createElement("dt")
const dd1 = document.createElement("dd")

const div2 = document.createElement("div")
const dt2 = document.createElement("dt")
const dd2 = document.createElement("dd")

const div3 = document.createElement("div")
const dt3 = document.createElement("dt")
const dd3 = document.createElement("dd")



dt1.textContent = "Atelier"
// dd1.textContent = 

dt2.textContent = "Participation"
// dd2.textContent = 

dt3.textContent = ""
// dd3.textContent = 

div1.append(dt1,dd1);
div2.append(dt2,dd2);
div3.append(dt3,dd3);

recapitulatif_contenu.append(div1,div2,div3)



// <dl class="recap-liste">
//         <div>
//           <dt>Atelier</dt>
//           <dd class="recap-atelier"></dd>
//         </div>
//         <div>
//           <dt>Participation</dt>
//           <dd class="recap-mode"></dd>
//         </div>
//         <!-- Adapter le libellé à Campus ou Adresse e-mail selon le mode actif. -->
//         <div>
//           <dt class="recap-detail-libelle"></dt>
//           <dd class="recap-detail-valeur"></dd>
//         </div>
//       </dl>

})