const ColoresMarca = {
    negro: '#040505',
	gris: '#E2DEDC',
	naranja: '#A3421D',
	blanco: "#FEFFFF",
}

type Colores = keyof typeof ColoresMarca;

export function getColorValue(color: Colores): string {
    return ColoresMarca[color];
}