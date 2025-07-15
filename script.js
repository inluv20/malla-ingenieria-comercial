const materias = {
  // ... (todo el objeto con las materias que ya tenés)
  // 👇️ (solo mostré uno por espacio, vos pegá todo el bloque completo)
  "ADM100": { nombre: "Administración 1", semestre: 1, prerreq: [] },
  // ...
  "GDI550": { nombre: "Graduación directa", semestre: 10, prerreq: ['COM500', 'COM520', 'COM540'] }
};

// 🧠 Cargar estado guardado si existe
let estadoMaterias = JSON.parse(localStorage.getItem("estadoMaterias")) || {};

function renderMalla() {
  const semestresContainer = document.getElementById("semestres");
  semestresContainer.innerHTML = "";

  const semestres = {};

  // Agrupar por semestre
  for (const cod in materias) {
    const mat = materias[cod];
    if (!semestres[mat.semestre]) semestres[mat.semestre] = [];
    semestres[mat.semestre].push({ cod, ...mat });
  }

  for (const nro in semestres) {
    const div = document.createElement("div");
    div.className = "semestre";
    div.innerHTML = `<h2>Semestre ${nro}</h2>`;

    semestres[nro].forEach(mat => {
      const matDiv = document.createElement("div");
      matDiv.className = "materia";
      matDiv.id = mat.cod;

      const check = document.createElement("input");
      check.type = "checkbox";
      check.disabled = !prerreqCumplido(mat.cod);
      check.checked = estadoMaterias[mat.cod] || false;

      if (check.checked) matDiv.classList.add("aprobada");
      if (check.disabled) matDiv.classList.add("locked");

      check.addEventListener("change", () => {
        estadoMaterias[mat.cod] = check.checked;
        // 💾 Guardar en localStorage
        localStorage.setItem("estadoMaterias", JSON.stringify(estadoMaterias));
        renderMalla();
      });

      const label = document.createElement("label");
      label.innerText = mat.nombre;

      matDiv.appendChild(check);
      matDiv.appendChild(label);
      div.appendChild(matDiv);
    });

    semestresContainer.appendChild(div);
  }
}

function prerreqCumplido(cod) {
  const mat = materias[cod];
  return mat.prerreq.every(p => estadoMaterias[p]);
}

renderMalla();
