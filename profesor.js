// PROTEGER
if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "index.html";
}

// DATOS USUARIO
const nombre = localStorage.getItem("userName");
document.getElementById("nombre").textContent = nombre;
document.getElementById("userName").textContent = "👨‍🏫 " + nombre;

// LOGOUT
function logout() {
    localStorage.clear();
    window.location.href = "index.html";
}

// CURSOS
function crearCurso() {
    let nombreCurso = document.getElementById("cursoNombre").value;

    if (!nombreCurso) return alert("Escribe un curso");

    let cursos = JSON.parse(localStorage.getItem("cursos")) || [];
    cursos.push(nombreCurso);
    localStorage.setItem("cursos", JSON.stringify(cursos));

    mostrarCursos();
}

function mostrarCursos() {
    let cursos = JSON.parse(localStorage.getItem("cursos")) || [];
    let html = "";

    cursos.forEach(c => {
        html += `<div class="card">${c}</div>`;
    });

    document.getElementById("listaCursos").innerHTML = html;
}

// TAREAS
function crearTarea() {
    let tarea = document.getElementById("tareaTexto").value;

    if (!tarea) return alert("Escribe una tarea");

    let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    tareas.push(tarea);
    localStorage.setItem("tareas", JSON.stringify(tareas));

    mostrarTareas();
}

function mostrarTareas() {
    let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    let html = "";

    tareas.forEach(t => {
        html += `<div class="card">${t}</div>`;
    });

    document.getElementById("listaTareas").innerHTML = html;
}

// ESTUDIANTES
function mostrarEstudiantes() {
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    let html = "";

    usuarios.forEach(u => {
        if (u.role === "estudiante") {
            html += `<div class="card">${u.fullName}</div>`;
        }
    });

    document.getElementById("listaEstudiantes").innerHTML = html;
}

// INICIAR
mostrarCursos();
mostrarTareas();
mostrarEstudiantes();