import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import SHOP_DATA from './shop_data'

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
           collections: SHOP_DATA
        };

    }

    render() {
        return (

            <div>

                {this.state.collections.map(({id, ...otherProperties}) => (
                    <CollectionPreview key={id} {...otherProperties}/>
                ))}
            </div>

        )
    }



}

export default ShopPage;