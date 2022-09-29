import "./DiceElement.css"

type Props = {
    rotateX: number
    rotateY: number
    rotateZ: number
}
export default function DiceElement(props: Props) {

    return (
        <div className="dice"
            style={{ transform: `rotateX(${props.rotateX}deg) rotateY(${props.rotateY}deg) rotateY(${props.rotateZ}deg)` }}>
            <div><span>1</span></div>
            <div><span>2</span></div>
            <div><span>3</span></div>
            <div><span>4</span></div>
            <div><span>5</span></div>
            <div><span>6</span></div>
        </div>
    )
}