import styled from "styled-components";

export const Container = styled.header`
    background-color: var(--box);
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        width: 226px;
        height: 110px;
        padding-left: 105px;
        padding-top: 9px;
        padding-bottom: 10px;
    }

    nav {
        padding-right: 100px;
        line-height: -10px;
    }

    nav ul {
        list-style: none;
    }


    nav ul li {
        display: inline-block;
        margin: 25px;
    }

    nav ul li a{
        color: #000000;
        text-decoration: none;
        transition: all 1s;
        font-size: 20px;


        &:hover {
            color: var(--detalhes);
        }
    }
`
