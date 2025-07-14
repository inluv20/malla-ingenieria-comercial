const materias = {
  "ADM100": { nombre: "Administración 1", semestre: 1, prerreq: [] },
  "CJS100": { nombre: "Administración tributaria", semestre: 1, prerreq: [] },
  "CPA100": { nombre: "Contabilidad 1", semestre: 1, prerreq: [] },
  "ECO100": { nombre: "Introducción a la economía", semestre: 1, prerreq: [] },
  "INV100": { nombre: "Introducción a la Investigación", semestre: 1, prerreq: [] },
  "MAT100": { nombre: "Cálculo 1", semestre: 1, prerreq: [] },
  "ADM150": { nombre: "Administración 2", semestre: 2, prerreq: ['ADM100'] },
  "CPA150": { nombre: "Contabilidad 2", semestre: 2, prerreq: ['CPA100'] },
  "ECO150": { nombre: "Microeconomía 1", semestre: 2, prerreq: ['ECO100', 'MAT100'] },
  "MAT150": { nombre: "Cálculo 2", semestre: 2, prerreq: ['MAT100'] },
  "PSI150": { nombre: "Psicología social e industrial", semestre: 2, prerreq: ['INV100'] },
  "ADM200": { nombre: "Organización y sistemas", semestre: 3, prerreq: ['ADM150'] },
  "CPA200": { nombre: "Contabilidad 3", semestre: 3, prerreq: ['CPA150'] },
  "ECO200": { nombre: "Microeconomía 2", semestre: 3, prerreq: ['MAT150', 'ECO150'] },
  "MAT200": { nombre: "Álgebra lineal y teoría matricial", semestre: 3, prerreq: ['MAT150'] },
  "MAT210": { nombre: "Estadística 1", semestre: 3, prerreq: ['MAT150'] },
  "ADM250": { nombre: "Administración pública", semestre: 4, prerreq: ['ADM200'] },
  "CJS250": { nombre: "Legislación empresarial y laboral", semestre: 4, prerreq: ['CPA150'] },
  "CPA250": { nombre: "Costos 1", semestre: 4, prerreq: ['CPA200', 'CJS100'] },
  "ECO250": { nombre: "Macroeconomía 1", semestre: 4, prerreq: ['ECO200', 'MAT200'] },
  "MAT250": { nombre: "Ingeniería económica", semestre: 4, prerreq: ['MAT200'] },
  "MAT260": { nombre: "Estadística 2", semestre: 4, prerreq: ['MAT210'] },
  "ADM300": { nombre: "Administración de personal", semestre: 5, prerreq: ['PSI150', 'ADM250', 'CJS250'] },
  "COM300": { nombre: "Administración de comercialización", semestre: 5, prerreq: ['MAT210'] },
  "COM310": { nombre: "Comercialización internacional", semestre: 5, prerreq: ['ECO250'] },
  "ECO300": { nombre: "Econometría", semestre: 5, prerreq: ['ECO250', 'MAT260'] },
  "ECO310": { nombre: "Desarrollo eco. y medio ambiente", semestre: 5, prerreq: ['ECO250'] },
  "MAT300": { nombre: "Investigación operativa 1", semestre: 5, prerreq: ['MAT200', 'MAT260'] },
  "ADM350": { nombre: "Administración de la producción", semestre: 6, prerreq: ['COM300', 'MAT300'] },
  "COM350": { nombre: "Investigación de mercados", semestre: 6, prerreq: ['COM300', 'MAT260'] },
  "COM360": { nombre: "Tec. y herramienta p/ exportación", semestre: 6, prerreq: ['COM300', 'COM310'] },
  "ECO350": { nombre: "Economía monetaria y fiscal", semestre: 6, prerreq: ['ECO250', 'ECO300'] },
  "FIN350": { nombre: "Administración financiera 1", semestre: 6, prerreq: ['CPA250', 'MAT250'] },
  "MAT350": { nombre: "Investigación operativa 2", semestre: 6, prerreq: ['MAT300'] },
  "ADM400": { nombre: "Comportamiento y des. organizac.", semestre: 7, prerreq: ['ADM300'] },
  "COM400": { nombre: "Estrategia comercial", semestre: 7, prerreq: ['COM350', 'COM360', 'MAT350'] },
  "CPA400": { nombre: "Auditoría operativa", semestre: 7, prerreq: ['FIN350'] },
  "CPA410": { nombre: "Presupuesto y control", semestre: 7, prerreq: ['ADM350', 'FIN350'] },
  "ECO400": { nombre: "Economía nacional", semestre: 7, prerreq: ['ECO310', 'ECO350'] },
  "FIN400": { nombre: "Administración financiera 2", semestre: 7, prerreq: ['FIN350'] },
  "ADM450": { nombre: "Teoría de las decisiones", semestre: 8, prerreq: ['ADM400'] },
  "ADM460": { nombre: "Sistemas de información gerencial", semestre: 8, prerreq: ['ADM400', 'ADM200', 'CPA410'] },
  "COM450": { nombre: "Plan y estrategia empresarial", semestre: 8, prerreq: ['ECO400', 'CPA400', 'COM400'] },
  "ECO450": { nombre: "Diseño y evaluación de proyectos", semestre: 8, prerreq: ['FIN400', 'COM400'] },
  "ECO460": { nombre: "Política económica", semestre: 8, prerreq: ['ECO400', 'CPA410'] },
  "FIN450": { nombre: "Administración financiera 3", semestre: 8, prerreq: ['FIN350'] },
  "COM500": { nombre: "Taller de investigación de grado", semestre: 9, prerreq: ['ADM450', 'COM450', 'ECO450'] },
  "COM520": { nombre: "Práctica empresarial", semestre: 9, prerreq: ['ECO460', 'COM450', 'ECO450'] },
  "COM540": { nombre: "Juego de negocios", semestre: 9, prerreq: ['ADM450', 'FIN450', 'COM450'] },
  "OPT1": { nombre: "Optativa", semestre: 9, prerreq: [] },
  "OPT2": { nombre: "Optativa", semestre: 9, prerreq: [] },
  "OPT3": { nombre: "Optativa", semestre: 9, prerreq: [] },
  "GRL001": { nombre: "Graduación (Tesis, Proyecto o Trabajo Dirigido)", semestre: 10, prerreq: ['COM500', 'COM520', 'COM540'] },
  "GDI550": { nombre: "Graduación directa", semestre: 10, prerreq: ['COM500', 'COM520', 'COM540'] }
};

const estadoMaterias = {};

function renderMalla() {
  const semestresContainer = document.getElementById("semestres");
  semestresContainer.innerHTML = "";

  const semestres = {};

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
        renderMalla();
      });

      const label = document.createElement("label");
      label.innerText = mat.nombre;

      matDiv.appendChild(check);
      matDiv.appendChild(label);
      div.appendChild(matDiv);
    });

    document.getElementById("semestres").appendChild(div);
  }
}

function prerreqCumplido(cod) {
  const mat = materias[cod];
  return mat.prerreq.every(p => estadoMaterias[p]);
}

renderMalla();
