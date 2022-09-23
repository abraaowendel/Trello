import styled from 'styled-components';

export const Card = styled.div`
    display: inline-block;
    height: 100%;
    vertical-align: top;
    width: 225px;
    position: relative;
    cursor: pointer;
    border: 1px solid #ddd;
    background-color: #EBECF0;
    padding: 10px;
    border-radius: 5px;
`;
export const InputTitle = styled.input`
    background-color: transparent;
    outline: 0;
    padding: 3px 5px;
    border: 2px solid transparent;
    border-radius: 2px;
    &:focus{
        border-color: #0079BF;
    }
`;

export const NewTask = styled.button `
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: transparent;
    align-items: center;
    padding: 8px;
    font-size: 13px;
    border: 0;
    cursor: pointer;
    &:hover{
        background-color: #DADBE2;
    }
`
export const TaskArea = styled.div `
  display: flex;
  flex-direction: column;
`

export const CardTop = styled.div `
    display:flex;
    justify-content: space-between;
`

export const IconOptions = styled.button `
    border: 0;
    cursor: pointer;
    font-size: 18px;
`
export const EditTask = styled.div `
    margin-top: 10px;
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