import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectShopCollections } from '../../redux/shop/shop.selectors.js';

import CollectionPreview from '../collection-preview/collection-preview.component.jsx';
import './collections-overview.styles.scss';

const CollectionsOverview = ({collections}) => (
  <div>
  {
    collections.map(({id, ...otherCollectionProps}) => (
      <CollectionPreview key={id} {...otherCollectionProps}/>
    ))
  }
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
});

export default connect(mapStateToProps)(CollectionsOverview);