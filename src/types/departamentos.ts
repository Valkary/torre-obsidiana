type Departamento = {
    area: number,
    unidades: number,
    recamaras: number,
    bathrooms: number,
    estacionamiento: number,
    img: string,
    section: string,
    area_terraza?: number,
    cuartos: string[],
}

export const departamentos: Record<string, Departamento> = {
    A: {
        area: 75.68,
        unidades: 9,
        recamaras: 2,
        bathrooms: 2,
        estacionamiento: 2,
        section: "#departamento_a",
        img: "",
        cuartos: [
            "sala - comedor",
            "cuarto de lavado"
        ]
    },
    B: {
        area: 82.3,
        unidades: 9,
        recamaras: 2,
        bathrooms: 2,
        estacionamiento: 2,
        section: "#departamento_b",
        img: "",
        cuartos: [
            "sala - comedor",
            "cuarto de lavado"
        ]
    },
    C1: {
        area: 62.97,
        unidades: 9,
        recamaras: 1,
        bathrooms: 1,
        estacionamiento: 1,
        section: "#departamento_c1",
        img: "",
        cuartos: [
            "sala - comedor",
            "cuarto de lavado",
            "estudio"
        ]
    },
    C2: {
        area: 62.47,
        unidades: 9,
        recamaras: 1,
        bathrooms: 1,
        estacionamiento: 1,
        section: "#departamento_c2",
        img: "",
        cuartos: [
            "sala - comedor",
            "cuarto de lavado",
        ]
    },
    C3: {
        area: 63.43,
        unidades: 9,
        recamaras: 1,
        bathrooms: 1,
        estacionamiento: 1,
        section: "#departamento_c3",
        img: "",
        cuartos: [
            "sala - comedor",
            "cuarto de lavado",
        ]
    },
    D: {
        area: 60.41,
        unidades: 9,
        recamaras: 1,
        bathrooms: 1,
        estacionamiento: 1,
        section: "#departamento_d",
        img: "",
        cuartos: [
            "sala - comedor",
            "clóset de lavado"
        ]
    },
    E: {
        area: 82.07,
        unidades: 1,
        recamaras: 2,
        bathrooms: 2,
        estacionamiento: 2,
        section: "#departamento_d",
        img: "",
        cuartos: [
            "sala - comedor",
            "cuarto de lavado",
        ],
        area_terraza: 26.33,
    },
}