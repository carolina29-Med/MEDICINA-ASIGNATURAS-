// Diccionario de detalles opcional para cada materia
const subjectDetails = {
    "Bioestadística": "Estudio de métodos estadísticos aplicados a la medicina.",
    "Biología": "Introducción a la biología celular y molecular.",
    "Historia de la Medicina": "Evolución y desarrollo de la medicina a través de la historia.",
    "Anatomía I": "Estudio de la anatomía humana: sistema óseo y muscular.",
    "Odontología y Ética Médica": "Principios éticos y odontológicos en la formación médica.",
    "Español": "Desarrollo de habilidades lingüísticas en español.",
    // Puedes agregar más detalles por materia aquí...
};

function showDetail(subject) {
    document.getElementById("modal-title").textContent = subject;
    document.getElementById("modal-detail").textContent = subjectDetails[subject] || "Aquí puedes agregar detalles específicos de la materia.";
    document.getElementById("modal").style.display = "block";
}

document.getElementById("close").onclick = function() {
    document.getElementById("modal").style.display = "none";
};

window.onclick = function(event) {
    if (event.target === document.getElementById("modal")) {
        document.getElementById("modal").style.display = "none";
    }
};