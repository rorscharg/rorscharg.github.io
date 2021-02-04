import React from 'react';
import Layout from '../../components/layout';
import Cart from './Cart';
import './index.scss';
import StoreItem from './storeItem';

class StoreHome extends React.Component {
  render() {
    var lineItems = process.env.LINE_ITEM.split(",");
    var items = [{ itemId: lineItems[0],imagePath: "/store/print1.jpg", title: "First Form", description: "A NICE PRINT" },
                 { itemId: lineItems[1],imagePath: "/store/print3.jpg", title: "Second Form",description: "A SECOND PRINT" },
                 { itemId: lineItems[2],imagePath: "/store/print4.jpg", title: "Third Form",description: "A Third PRINT" }];
    var itemsToDisplay = items.map((item, index) => (<StoreItem key={index} item={item}></StoreItem>));

    return (
      <Layout>
        <div className="home-container">
          <div className="poster-container">
            {itemsToDisplay}
            <Cart />
          </div>
        </div>
      </Layout>
    )
  }
}

export default StoreHome