import { Card } from "./styles"

export const Cards = (prosps: {imagemD: string, imagemC: string, imagemE: string | undefined; }) => {
    return(
        <Card>
            <div className="card">
                <div className="circulo">
                    <img src={prosps.imagemD} alt="Dinheiro" />
                </div>
                <h4>Dinheiro</h4>
                <p>Dinheiro em espécie ou PIX</p>
            </div>
            <div className="card">
                <div className="circulo">
                    <img src={prosps.imagemC} alt="Cartão" />
                </div>
                <h4>Cartão</h4>
                <p>Pagamento em crédito ou débito</p>
            </div>
            <div className="card">
                <div className="circulo">
                    <img src={prosps.imagemE} alt="Estudantes" />
                </div>
                <h4>Para Estudantes</h4>
                <p>Desconto de 50% para estudantes, com todas as opções de pagamento</p>
            </div>
        </Card>
    )
}
