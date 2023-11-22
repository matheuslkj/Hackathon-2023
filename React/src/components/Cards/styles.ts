import styled from "styled-components";

export const Card = styled.div`
    grid-gap: 10px 10px;
    padding: 20;
    margin: 20;
    border-radius: 8;
    width: 200;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    .card {
        background-color: #e0e5eb;
        opacity: 0.95;
        word-break: break-word;
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
	    overflow: hidden;
	    float: unset;
        margin-left: auto;
        margin-right: auto;
	    margin: 15px;
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

    p {
        text-align: center;
    }
`
