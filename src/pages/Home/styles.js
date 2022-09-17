import styled from 'styled-components';

export const GridArea = styled.div`
    padding: 30px 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 10px;
`;

