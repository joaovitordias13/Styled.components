import { VagaEstilo, VagaTitulo, VagaLink } from

export type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = ({ titulo, localizacao, nivel, modalidade, salarioMin, salarioMax, requisitos }: Props) => (
  <VagaEstilo>
    <VagaTitulo>{titulo}</VagaTitulo>
    <ul>
      <li>Localizacao: {localizacao}</li>
      <li>Senioridade: {nivel}</li>
      <li>Tipo de contratacao: {modalidade}</li>
      <li>
        Salário: {salarioMin} - {salarioMax}
      </li>
      <li>Requisitos: {requisitos.join(', ')}</li>
    </ul>
    <VagaLink href="#">
      Ver detalhes e candidatar-se
    </VagaLink>
  </VagaEstilo>
)

export default Vaga
