
function validacija() {
  var validno = true;
  if (document.getElementById("naziv").value.length < 3) {
    validno = false;
    document.getElementById("naziv").classList.add("error");
    document.getElementById("naziv").classList.remove("success");
  } else {
    document.getElementById("naziv").classList.add("success");
    document.getElementById("naziv").classList.remove("error");
  }

  return validno;
}

window.addEventListener("load", function (event) {
    setupFormSubmission();
  setupDeleteButton()
   
  
  // document.getElementById("forma").addEventListener("submit", function (event) {
  //   //     // event.preventDefault();
  //   //     // var validno = tru
             
  //   //     //    var spanovi = document.querySelectorAll("#sastojci > span.badge");
  //   //     //    var niz = [];
  //   //     //    for(let i = 0; i < spanovi.length; i++){
  //   //     //        niz.push(spanovi[i].textContent.trim().slice(0, -1));
  //   //     //    }
  //   //     //    var jsonString = JSON.stringify(niz);
  //   //     //    document.getElementById("sastojci-input").value = jsonString;
  //   //     //    //document.getElementById("sastojci-input").value = niz.join();
  //   //     // return validno;
        


   
    // document.getElementById("naziv").addEventListener("keypress",function(){
    //      this.classList.remove('success');
    //      this.classList.remove('error');
    //  });

     document.getElementById("dodaj-sastojak").addEventListener("click",function(){
        var id=document.getElementById("spisak-sastojaka").value;
        if(!id){
            alert("Izaberi sastojak");
            return;
        }
        dodajSastojak(id);
     });
    //   document.getElementById("obrisiBtn").addEventListener("click", function () {
    
    //   if (confirm("Potvrdi brisanje")) {
    //     fetch("http://localhost:9000/palacinka/" + id, { method: "DELETE" })
    //       .then(resp => resp.json().then(data => {
    //         alert('Obrisan je zapis: ' + data);
    //         window.location.href = `./palacinke.html`;
    //       }))
    //       .catch(err => console.log(err));
    //   } else { return; }
    // });


  });
// function dodajSastojak(id){
//     document.querySelector(`#spisak-sastojaka > option[value='${id}']`).disabled = true;
//     document.getElementById("spisak-sastojaka").selectedIndex = 0;
//     var naziv = document.querySelector(`#spisak-sastojaka > option[value='${id}']`).innerHTML;
    
//     var span=document.createElement("span");
//     span.classList.add("badge");
//     span.classList.add("bg-secondary")
//     span.dataset.id=id;
//     span.innerHTML=naziv;


//     var button=document.createElement("button");
//     button.type="button";
//     button.classList.add("btn");
//     button.classList.add("btn-default");
//     button.classList.add("btn-sm");
//     button.innerHTML="X";

//     span.appendChild(button);
//     document.getElementById("sastojci").appendChild(span);
//     document.getElementById("sastojci").appendChild(document.createTextNode(" "));
//     button.addEventListener("click",function(){
//         var id=this.parentNode.dataset.id;
//         this.parentNode.parentNode.removeChild(this.parentNode);
//         document.querySelector(`#spisak-sastojaka > option[value='${id}']`).disabled = false;
//     });

// }


   function setupFormSubmission() {
  var form = document.getElementById("forma");
  if (!form) {
    console.error("Form not found.");
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var validno = validacija();
    if (!validno) {
      alert("Naziv mora da bude duzi od 3 slova");
      return;
    }

    var novaPalacinka = {
      naziv: document.getElementById("naziv").value,
      opis: document.getElementById("opis").value,
      cena: document.getElementById("cena").value,
      kategorija_id: document.getElementById("kategorija").value
    };

    submitPalacinka(novaPalacinka);
  });
}


//TO:DO moram da dodam da nakon sto se dodaju sastojci u izmeni da se sacuva i da se doda u narudzbine, 
//ili to ili da se izmeni trenutni, mada ne znam kako bih to uradio sa sastojcima

function submitPalacinka(palacinka) {
  fetch("http://localhost:9000/palacinka/nova-palacinka", {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(palacinka)
  })
    .then(succ => succ.json())
    .then(data => {
      window.location.href = `./palacinke.html`;
    })
    .catch(err => console.log(err));
}

function setupDeleteButton() {
  var deleteButton = document.getElementById("obrisiBtn");
  if (!deleteButton) {
    console.error("Delete button not found.");
    return;
  }

  deleteButton.addEventListener("click", function () {
    handleDelete();
  });
}

function handleDelete() {
  if (confirm("Potvrdi brisanje")) {
    if (!id) {
      console.error("ID is not defined. Cannot proceed with deletion.");
      return;
    }

    fetch("http://localhost:9000/palacinka/" + id, { method: "DELETE" })
      .then(resp => resp.json().then(data => {
        alert('Obrisan je zapis: ' + data);
        window.location.href = `./palacinke.html`;
      }))
      .catch(err => console.log(err));
  } else {
    return;
  }
}