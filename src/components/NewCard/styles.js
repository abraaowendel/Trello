import styled from 'styled-components';

export const CardArea = styled.div`
`;

export const AddCard = styled.div`
    border-radius: 5px;
    min-height: ${(props) => props.heigth};
    min-width: 230px;
    padding: 4px;
    border: 1px solid #ddd;
    color:  #000;
    background-color: ${(props) => props.color};
    input{
        width: 100%;
        padding: 5px;
    }
    button{
        border: 0;
        font-size: 14px;
        color: #000;
        padding: 5px;
        border-radius: 3px;
        cursor: pointer;
    }
    .btnAddCard{
        width: 100%;
        &:hover{
            background-color: #ddd;
        }
    }
    .btns{
        display: flex;
        align-items: center;
        margin-top: 5px;
        .btnAdd{
            flex: 1;
            background-color: #026AA7;
            color: #fff;
        }
        .btnClose{
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 10px;
            min-width: 50px;
            background-color: #ff0000;
        }
    }
`;

export const InputCard = styled.div`
    div{

    }
`;
