//desarrolle una algoritmo que dada una posocion en una carrera se determine el tipo de medalla a entregar.
let posicionLlegada: number = Number(prompt("ingrese el puesto en la carrera"));
if (posicionLlegada === 1) {
  console.log("Medalla de Oro");
} else {
  if (posicionLlegada === 2) {
    console.log("Medalla de Plata");
  } else {
    if (posicionLlegada === 3) {
      console.log("Medalla de Bronce");
    } else {
      console.log("Certificado de Participacion");
    }
  }
}
