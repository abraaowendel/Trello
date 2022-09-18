import styled from 'styled-components';

export const DescriptionArea = styled.div`
    position: relative;
    background-color: #F4F5F7;
    margin: 5px 0;
    padding: 5px 25px 5px 5px;
    border-radius: 3px;
    z-index: 0;
    box-shadow: 0 0 1px #091e42;

    word-wrap: break-word;
    font-size: 13px;
    span{
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

