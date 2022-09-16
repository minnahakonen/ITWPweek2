import "./styles.css";

const submitButton = document.getElementById("submit-data");

//const listofusers = ["Admin-na", "User1", "User2"];

submitButton.addEventListener("click", function () {
  const tableBody = document.getElementById("table-body");
  const Un = document.createElement("td");
  const Em = document.createElement("td");
  const Adr = document.createElement("td");
  const Amn = document.createElement("td");
  const Pic = document.createElement("td");

  const row = document.createElement("tr");


  Em.innerHTML = document.getElementById("input-email").value;
  Adr.innerHTML = document.getElementById("input-address").value;

  if (document.getElementById("input-admin").checked) {
    Amn.innerHTML = "X";
  } else {
    Amn.innerHTML = "-";
  }

  //const imageButton = document.getElementById("input-image");
  //imageButton.addEventListener("click", () => {});
  const file = document.getElementById("input-image").files[0];
  const newimage = document.createElement("img");
  if (!file) {
    newimage.src = ""
  }
  else {
  newimage.src = URL.createObjectURL(file);
  newimage.height = 64;
  newimage.width = 64;
  }
  
  Pic.appendChild(newimage);

  //Pic.innerHTML = document.getElementById("input-image").value;

  row.appendChild(Un);
  row.appendChild(Em);
  row.appendChild(Adr);
  row.appendChild(Amn);
  row.appendChild(Pic);

  tableBody.appendChild(row);

  /*const user = document.getElementById("input-username").value;
  const allUsernames = document.querySelectorAll("#table-body")[0].textContent;
  console.log("all usernames: " + allUsernames + "and the users" + user);

  for (let i = 0; i < allUsernames.length; i++) {
    if (allUsernames[i].value !== user.value) {
    

      
    } else {
      /*alert("The name already exist");
    }
  }*/
});

const emptyButton = document.getElementById("empty-table");

emptyButton.addEventListener("click", function () {
  document.getElementById("table-body").remove();
});
