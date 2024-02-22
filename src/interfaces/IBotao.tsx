export default interface IBotao {
    text: string
    setPrecionado: React.Dispatch<React.SetStateAction<boolean>>
    precionado: boolean
}