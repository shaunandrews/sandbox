import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

// Internal Components
import Subscriptions from './Subscriptions';
import Feed from './Feed';

// Simulated Database
import subscriptions from './data/subscriptions.json';
import items from './data/items.json';

// Styles
import './App.scss';

function App() {
  const [selectedSubscription, setSelectedSubscription] = useState(null);
  const [selectedSubscriptionItem, setSelectedSubscriptionItem] = useState(null);

  // Find items for the selected subscription
  const selectedSubscriptionItems = items.filter(item => item.subscriptionId === selectedSubscription);

  return (
    <div className="app">
      <Subscriptions
        allSubscriptions={subscriptions}
        selectedSubscription={selectedSubscription}
        setSelectedSubscription={setSelectedSubscription}
      />

      <Feed
        items={selectedSubscriptionItems}
        selectedItem={selectedSubscriptionItem}
        setSelectedItem={setSelectedSubscriptionItem}
      />

      <iframe
        className="app__content-iframe"
        src={selectedSubscriptionItem ? selectedSubscriptionItem.url : ''}
      />
    </div>
  );
}

export default App;
