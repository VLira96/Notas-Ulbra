import { ReactNode } from "react"

export default interface IBotao {
    children: ReactNode
    setPrecionado: React.Dispatch<React.SetStateAction<boolean>>
    precionado: boolean
}