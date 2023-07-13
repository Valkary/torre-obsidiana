type Props = {
    color: string;
}

export default function WashingMachine({ color }: Props) {
    return (
        <svg fill={color} className="h-5/6" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 3C7.3550302 3 6 4.3550302 6 6L6 44C6 45.64497 7.3550302 47 9 47L41 47C42.64497 47 44 45.64497 44 44L44 6C44 4.3550302 42.64497 3 41 3L9 3 z M 9 5L41 5C41.56503 5 42 5.4349698 42 6L42 44C42 44.56503 41.56503 45 41 45L9 45C8.4349698 45 8 44.56503 8 44L8 6C8 5.4349698 8.4349698 5 9 5 z M 31 8 A 2 2 0 0 0 29 10 A 2 2 0 0 0 31 12 A 2 2 0 0 0 33 10 A 2 2 0 0 0 31 8 z M 37 8 A 2 2 0 0 0 35 10 A 2 2 0 0 0 37 12 A 2 2 0 0 0 39 10 A 2 2 0 0 0 37 8 z M 25 15C18.58765 15 13.347947 20.063149 13.03125 26.398438 A 1.0003647 1.0003647 0 0 0 13.011719 26.783203C13.010406 26.856105 13 26.926791 13 27C13 33.615466 18.384534 39 25 39C31.613644 39 37 33.615686 37 27C37 26.927438 36.989577 26.8574 36.988281 26.785156 A 1.0003647 1.0003647 0 0 0 36.96875 26.390625C36.653041 20.187263 31.591575 15.26567 25.355469 15.072266 A 1.0001 1.0001 0 0 0 25 15 z M 25 17C29.728146 17 33.668186 20.265017 34.716797 24.667969C33.727371 24.214818 32.787337 24.018265 32.021484 24.001953C30.59388 23.971945 29.487301 24.586074 28.445312 25.080078C27.403325 25.574082 26.404985 26 25 26C23.595015 26 22.596676 25.574082 21.554688 25.080078C20.513209 24.586316 19.407059 23.97259 17.980469 24.001953L17.978516 24.001953C17.21168 24.017756 16.272368 24.214606 15.283203 24.667969C16.331391 20.264926 20.269992 17 25 17 z M 18.019531 26 A 1.0001 1.0001 0 0 0 18.021484 26C18.82988 25.98301 19.606254 26.369473 20.697266 26.886719C21.78823 27.403965 23.172985 28 25 28C26.827015 28 28.211723 27.403965 29.302734 26.886719C30.393746 26.369473 31.17012 25.983008 31.978516 26C32.628832 26.013851 33.818619 26.308572 34.994141 27.136719C34.92042 32.606917 30.486181 37 25 37C19.51166 37 15.079544 32.607128 15.005859 27.136719C16.181458 26.308358 17.370799 26.013159 18.019531 26 z" />
        </svg>
    )
}