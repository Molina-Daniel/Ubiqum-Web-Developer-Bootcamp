let members = data.results[0].members;

let miTabla = document.getElementById("miTabla");

for (let i = 0; i < members.length; i++) {
  //Creo una puta fila en el puto limbo
  let row = document.createElement("tr");
  let celda = document.createElement("td");
  let celda1 = document.createElement("td");
  let celda2 = document.createElement("td");

  let cleanMiddle = members[i].middle_name || "";
  let cleanMiddle = members[i].middle_name == null ? "" : members[i].middle_name; // Los 2 hacen lo mismo. Con esto no hace falta el if de abajo

  // if (cleanMiddle == null) {
  //   cleanMiddle = "";
  // }

  celda.innerHTML = members[i].first_name + " " + (members[i].middle_name || "") + ", " + members[i].last_name;
  celda1.innerHTML = members[i].party;
  celda2.innerHTML = members[i].state;

  //Anexa la fila a la tabla
  miTabla.append(row); // appendChild solo puede meter nodos
  row.append(celda, celda1, celda2);

  //Cuelga la puta row en la puta table
  miTabla.append(row);
}


// Otra forma:

for (let i = 0; i < members.length; i++) {
  //Creo una puta fila en el puto limbo
  let row = document.createElement("tr");

  let fullName =
    members[i].first_name +
    " " +
    (members[i].middle_name || "") +
    ", " +
    members[i].last_name;

  row.insertCell().innerHTML = fullName;
  row.insertCell().innerHTML = members[i].party;
  row.insertCell().innerHTML = members[i].state;

  //Cuelga la puta row en la puta table
  miTabla.append(row);
}


// Otra forma:

let template = "";

for (let i = 0; i < members.length; i++) {
  let member = members[i];
  template += `
  <tr>
    <td><a href="${member.url}>${member.first_name}, ${member.middle_name ||
    ""} ${member.last_name}</a></td>
    <td>${member.party}</td>
    <td>${member.state}</td>
    <td>${member.seniority}</td>
  </tr>`;
}
miTabla.innerHTML = template;
