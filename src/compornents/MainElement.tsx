import React from "react"
import DiceElement from "./DiceElement"
import "./MainElement.css"
import Quaternion from "quaternion"

export default function MainElement() {
    const [rotateX, setRotateX] = React.useState(-10)
    const [rotateY, setRotateY] = React.useState(-20)
    const [rotateZ, setRotateZ] = React.useState(0)
    const [isRolling, setIsRolling] = React.useState(false)
    const [x, setX] = React.useState(0)
    const [y, setY] = React.useState(0)
    const pointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        setX(e.clientX)
        setY(e.clientY)
        setIsRolling(true)
    }
    const pointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
        setIsRolling(false)
    }
    const pointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        if (isRolling) {
            const rx = Math.round(rotateX % 360)
            const ry = Math.round(rotateY % 360)
            const rz = Math.round(rotateZ % 360)
            const q1 = new Quaternion([rx, ry, rz])
            const q2 = new Quaternion([-(e.clientY - y) % 360, (e.clientX - x) % 360, 0])
            const q3 = q1.add(q2)
            const [_x, _y, _z] = q3.imag()
            setRotateX(_x)
            setRotateY(_y)
            setRotateZ(_z)
            setX(e.clientX)
            setY(e.clientY)
        }
    }



    return (
        <div className='main'
            onPointerDown={pointerDown}
            onPointerUp={pointerUp}
            onPointerMove={pointerMove} >
            <DiceElement
                rotateX={rotateX % 360}
                rotateY={rotateY % 360}
                rotateZ={rotateZ % 360}
            />
            <br />
            {`${Math.round(rotateX % 360)}, ${Math.round(rotateY % 360)}, ${Math.round(rotateZ % 360)}`}
        </div >
    )
}