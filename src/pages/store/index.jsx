import React from 'react';
import Layout from '../../components/layout';
import Cart from './Cart';
import './index.scss';
import StoreItem from './storeItem';

class StoreHome extends React.Component {
  render() {
    var lineItem0 = process.env.LINE_ITEM0.split(",");
    var lineItem1 = process.env.LINE_ITEM1.split(",");
    var lineItem2 = process.env.LINE_ITEM2.split(",");
    var items = [{ itemIds: lineItem0,imagePath: "/store/print1.jpg", title: "First Form", description: "First Form", orientation: "vertical"},
                 { itemIds: lineItem1,imagePath: "/store/print3.jpg", title: "Second Form",description: "Second Form", orientation: "vertical" },
                 { itemIds: lineItem2,imagePath: "/store/print4.jpg", title: "Third Form",description: "Third Form", orientation: "horizontal" }];
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