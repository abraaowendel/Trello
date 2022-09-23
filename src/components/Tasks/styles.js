import styled from 'styled-components';

export const DescriptionArea = styled.div`
    position: relative;
    display: block;
    background-color: #F4F5F7;
    margin: 5px 0;
    border-radius: 3px;
    word-break: break-all;
    max-width: 200px;
    
    input{
        box-shadow: 0 0 1px #091e42;
        outline: 0;
        padding: 5px 25px 5px 5px;
        border: 0;
        display: block;
        width: 100%;
        height: 100%;
    }
    span{
        cursor: pointer;
        display: none;
        position: absolute;
        top: 5px;
        right: 8px;
        font-size: 10px;
        z-index: 2;
    }
    &:hover{
        span{
            display: block;
        }
    }
`;
