import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  @media screen and (max-width: 800px) {
    font-size: 18px;
    /* padding: 15px 2px; */
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 800px) {
    width: 22%;
  }
`;

export const TextContainer = styled.span`
  width: 23%;

  @media screen and (max-width: 800px) {
    width: 22%;
  }
`;

export const ItemQuantityContainer = styled.span`
  width: 23%;
  display: flex;

  span {
    margin: 0 10px;
  }

  div {
    cursor: pointer;
  }

  @media screen and (max-width: 800px) {
    width: 22%;
  }
`;

export const ItemRemoveButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
