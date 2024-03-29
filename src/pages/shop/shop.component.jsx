import React from 'react';
import SHOP_DATA from './shop.data';
import { CollectionPreview } from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {

    state = { collections: SHOP_DATA }

    render() {
        const { collections } = this.state; 
        return (
            <div>
                {
                    collections.map(collection => <CollectionPreview key={collection.id} title={collection.title} items={collection.items}/>)
                }
            </div>
        );
    };
}

export default ShopPage;
