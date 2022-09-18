import styled from 'styled-components';

export const Card = styled.div`
    position: relative;
    cursor: pointer;
    border: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background-color: #EBECF0;
    padding: 10px;
    border-radius: 5px;
    max-width: 230px;
`;
export const InputTitle = styled.input`
    background-color: transparent;
    outline: 0;
    padding: 3px 5px;
    border: 2px solid transparent;
    border-radius: 2px;
    font-weight: bold;
    &:focus{
        border-color: #0079BF;
    }
`;

export const NewTask = styled.button `
    margin-top: 5px;
    display: flex;
    justify-content: center;
    background-color: transparent;
    align-items: center;
    padding: 5px;
    font-size: 13px;
    border: 0;
    cursor: pointer;
    &:hover{
        background-color: #DADBE2;
    }
`
export const TaskArea = styled.div `

`
export const EditTask = styled.div `
    display: flex;
    flex-direction: column;

    textarea{
        border: 0;
        box-shadow: 0 0 1px #091e42;

        outline: none;
        min-height: 25px;
        resize: none;
        width: 100%;
        padding: 5px;
    }
    .btns{
        margin-top: 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .btnAdd,
    .btnClose{   
        cursor: pointer;    
        font-size: 13px;
        border: 1px solid #CCC;
        border-radius: 4px;
        padding: 8px 10px;
    }
    .btnClose{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #ff0000;
    }
    .btnAdd{        
        color: #fff;
        min-width: 80%;
        background-color: #0079BF;
        margin-right: 3px;
        &:hover{
            background-color: #026AA7;

        }
    }
`