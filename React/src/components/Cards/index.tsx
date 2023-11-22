import { Card } from "./styles"

export const Cards = (prosps: {imagemD: string, imagemC: string, imagemE: string | undefined; }) => {
    return(
        <Card>
            <div className="card">
                <div className="circulo">
                    <img src={prosps.imagemD} alt="Dinheiro" />
                </div>
                <p><strong>Dinheiro</strong></p>
                <p>Dinheiro em espécie ou PIX</p>
            </div>
            <div className="card">
                <div className="circulo">
                    <img src={prosps.imagemC} alt="Cartão" />
                </div>
                <p><strong>Cartão</strong></p>
                <p>Pagamento em crédito ou débito</p>
            </div>
            <div className="card">
                <div className="circulo">
                    <img src={prosps.imagemE} alt="Estudantes" />
                </div>
                <p><strong>Para Estudantes</strong></p>
                <p>Desconto de 50% para estudantes, com todas as opções de pagamento</p>
            </div>
        </Card>
    )
}
