type Props = {
    color: string;
}

export default function Bathroom({ color }: Props) {
    return (
        <svg className="h-5/6" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path fill="none" stroke={color} strokeWidth="2" d="M25,18H7c-1.1,0-2-0.9-2-2v0c0-1.1,0.9-2,2-2h18c1.1,0,2,0.9,2,2v0C27,17.1,26.1,18,25,18z" />
            <path fill="none" stroke={color} strokeWidth="2" d="M25,18c0,5-4,9-9,9s-9-4-9-9" />
            <polyline fill="none" stroke={color} strokeWidth="2" points="21.7,25 23,31 9,31 10.3,25 " />
            <path fill="none" stroke={color} strokeWidth="2" d="M24,14H8V5c0-2.2,1.8-4,4-4h8c2.2,0,4,1.8,4,4V14z" />
            <line fill="none" stroke={color} strokeWidth="2" x1="12" y1="5" x2="14" y2="5" />
        </svg>
    )
}