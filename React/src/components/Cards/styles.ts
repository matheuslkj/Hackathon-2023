import styled from "styled-components";

export const Card = styled.div`
    grid-gap: 15px 15px;
    width: 200;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    flex-wrap: wrap;

    .card {
        background-color: var(--box);
        opacity: 0.9;
        width: 220px;
        height: 400px;
        display: grid;
        place-items: center;
    }

    .circulo {
        background-color: var(--detalhes);
        width: 120px;
	    height: 120px;
	    border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
	    transition: 0.3s ease;

        &:hover{
            transform: rotateY(180deg);
        }
    }

    .circulo img {
        width: 75px;
        height: 75px;
    }

    h4 {
        font-size: 1.25rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin: -80px 0 0;
    }

    p {
        text-align: center;
        margin: -80px 0 0;
    }
`
