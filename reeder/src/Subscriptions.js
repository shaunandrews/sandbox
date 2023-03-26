import React from "react";
import classnames from "classnames";

// Simulated Database
import items from './data/items.json';

// Styles
import "./Subscriptions.scss";

function SubscriptionItem({ id, title, unreadCount, description, selectedSubscription, onClick }) {
    const classes = classnames('subscription-list-item', {
        'is-selected': id === selectedSubscription
    });

    return (
        <li
            className={classes}
            onClick={onClick}
        >
            <div className="subscription__title">{title}</div>
            <SubscriptionItemCount SubscriptionID={id} />
        </li>
    )
}

function SubscriptionItemCount({ SubscriptionID }) {
    // Find the number of items for the selected subscription
    const itemCount = items.filter(item => item.subscriptionId === SubscriptionID).length;

    return (
        <div className="subscription__unread-count">{itemCount}</div>
    )
}

function Subscriptions({ allSubscriptions, selectedSubscription, setSelectedSubscription }) {
    return (
        <ol className="subscriptions">
            {allSubscriptions.map(subscription => (
                <SubscriptionItem
                    key={subscription.id}
                    id={subscription.id}
                    title={subscription.title}
                    unreadCount={subscription.unreadCount}
                    description={subscription.description}
                    selectedSubscription={selectedSubscription}
                    onClick={() => setSelectedSubscription(subscription.id)}
                />
            ))}
        </ol>
    )
}

export default Subscriptions;