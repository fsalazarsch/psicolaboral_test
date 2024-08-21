const dimensions = {
    G: { name: "Gusto", points: 0 },
    L: { name: "Liderazgo", points: 0 },
    I: { name: "Interés", points: 0 },
    T: { name: "Tendencia", points: 0 },
    V: { name: "Valores", points: 0 },
    S: { name: "Sensibilidad", points: 0 },
    R: { name: "Responsabilidad", points: 0 },
    D: { name: "Determinación", points: 0 },
    C: { name: "Creatividad", points: 0 },
    E: { name: "Energía", points: 0 },
    N: { name: "Nerviosismo", points: 0 },
    A: { name: "Adaptabilidad", points: 0 },
    P: { name: "Pragmatismo", points: 0 },
    X: { name: "Extroversión", points: 0 },
    B: { name: "Bienestar", points: 0 },
    O: { name: "Organización", points: 0 },
    Z: { name: "Zelo", points: 0 },
    K: { name: "Confiabilidad", points: 0 },
    F: { name: "Flexibilidad", points: 0 },
    W: { name: "Trabajo en Equipo", points: 0 }
};

const results = {};

function submitTest() {
    // Inicializa resultados
    for (let key in dimensions) {
        results[key] = 0;
    }

    // Asume que los inputs tienen el formato 'dimension:value'
    document.querySelectorAll('input[name="dimension"]:checked').forEach(input => {
        const dimension = input.value.split(':')[0];
        if (results.hasOwnProperty(dimension)) {
            results[dimension]++;
        }
    });

    console.log("Resultados:", results);
    alert('Formulario enviado, revisa la consola para ver los resultados.');
}
