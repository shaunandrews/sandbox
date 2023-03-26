import React, { useState } from 'react';
import classnames from "classnames";

import "./Feed.scss";

function FeedItem({ id, title, description, url, selectedFeedItem, onClick }) {
    const classes = classnames('feed-item', {
        'is-selected': id === selectedFeedItem
    });

    return (
        <li
            className={classes}
            onClick={onClick}
        >
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{url}</p>
        </li>
    )
}

function Feed({ items, selectedItem, setSelectedItem }) {
    return (
        <ul className="feed">
            {items.map(item => (
                <FeedItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    url={item.url}
                    selectedFeedItem={selectedItem}
                    onClick={() => setSelectedItem(item.id)}
                />
            ))}
        </ul>
    )
}

export default Feed;