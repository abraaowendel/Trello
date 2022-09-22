import styled from 'styled-components';

export const OptionsArea = styled.div`
    position: absolute;
    top: -10px;
    right: -20px;
    min-height: 50px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 0;
    justify-content: center;
    z-index: 5;
    button{
        background-color: #FFF;
        width: 100%;
        cursor: pointer;
        border: 1px solid transparent;
        padding: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Georgia, 'Times New Roman', Times, serif;
        :nth-child(1){
            border-radius: 3px 3px 0 0;
            border-bottom: 1px solid #CCC;
            background-color: #ff0000;
            color: #fff;
        }
        :nth-child(2){
            border-radius: 0 0 3px 3px;
        }
    }

`;

