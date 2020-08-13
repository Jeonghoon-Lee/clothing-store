import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button/custom-button.component';

// import './collection-item.styles.scss';
import {
  CollectionItemContainer,
  ItemImageContainer,
  CustomButtonContainer,
  CollectionItemFooter,
  ItemNameContainer,
  ItemPriceContainer,
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <ItemImageContainer imageUrl={imageUrl} />
      <CollectionItemFooter>
        <ItemNameContainer>{name}</ItemNameContainer>
        <ItemPriceContainer>{price}</ItemPriceContainer>
      </CollectionItemFooter>
      <CustomButtonContainer inverted onClick={() => addItem(item)}>
        Add to Cart
      </CustomButtonContainer>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
