import styled from "styled-components";

export const ItemContainer = styled.div `
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #252b33;
    margin: 20px 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    img {
        width: 120px;
        height: 120px;
        border-radius: 100px;
        margin-bottom: 20px;
        border: 2px solid #d1d5da;
    }
    
    .infosPerfil {
        width: 30%;
        height: 250px;
        margin-left: -50px;
        background-color: #252b33;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        border-right: 2px solid #191b1d;
    }

    .infos {
        background-color: #252b33;
        width: 60%;
        min-height: 250px;
        margin-top: 20px;
        margin-left: 10px;
        position: relative;
        box-sizing: border-box;
        overflow: hidden; 
        padding-bottom: 20px;
    }

    .repoNome {
        font-size: 32px;
        color: #fafafa;
        background-color: #1a1e22;
        border-bottom: 10px solid #191b1d;
        width: 100%;
        padding: 10px 20px;
    }

    p {
        font-size: 16px;
        margin: 20px 20px;
        color: #fafafa60;
    }

    .fullName {
        margin-top: 10px;
    }

    a.remover {
        color: #be0101;
        border: 1px solid #be0101;
        margin: 20px 10px;
        transition: background-color 0.6s ease, color 0.6s ease;
        
        &:hover {
            background-color: #be0101;
            color: #292f38;
        }
    }
    
    a.ver {
        color: #036ad1;
        border: 1px solid #036ad1;
        transition: background-color 0.6s ease, color 0.6s ease;

        &:hover {
            background-color: #036ad1;
            color: #292f38;
        }
    }

    a { 
        margin: 0px 20px;
        color: #036ad1;
        padding: 5px 15px;
        text-decoration: none;
    }

    hr {
        color: #fafafa60;
        margin: 20px 0;
    }
`