type Props = {
    color: string;
}

export default function LogoCompleto({ color }: Props) {
    // TODO: falta que manden un SVG que si pueda usar
    return (
        <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120.82 120.82">
            <path fill={color} d="M120.82,60.41,60.41,120.82,0,60.41,60.41,0ZM60.41,116.22l55.81-55.81L60.41,4.6,4.6,60.41Z" />
            <rect fill={color} x="2.3" y="58.78" width="116.22" height="3.25" />
            <rect fill={color} x="58.78" y="60.41" width="3.25" height="56.47" />
        </svg>
    );
}