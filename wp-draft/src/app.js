import './reset.scss';
import './app.scss';

import React from 'react';
import { useState, useEffect } from 'react';

const WPAPI = require("wpapi");
const wp = new WPAPI({
  endpoint: "",
  username: "",
  password: "",
});

function App() {
  const [draftPosts, setDraftPosts] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');

  useEffect(() => {
    wp.posts()
      // .status('draft')
      .perPage(3)
      .order("desc")
      .orderby("date")
      .then((posts) => {
        setDraftPosts(posts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const clickTask = (event, postId) => {
    setSelectedTask(postId);

    const selectedPost = draftPosts.find((post) => post.id === postId);
    setTitle(selectedPost.title.rendered);
    setContent(selectedPost.content.rendered);
    setTags(selectedPost.tags.map((tag) => tag.name).join(', '));
  };

  return (
    <div className="application">
      <header>
        <h1>WP Draft</h1>
      </header>

      <main>
        <ol className="drafts">
          {draftPosts.map((post) => (
            <li
              key={post.id}
              className={`draft${selectedTask === post.id ? ' is-selected' : ''}`}
              onClick={(event) => clickTask(event, post.id)}
            >
              <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h2>
            </li>
          ))}
        </ol>

        {selectedTask !== null && (

          <div className="canvas">
            <div className="draft-input-group">
              {/* A label and input for the draft image */}
              <label htmlFor="image">Image</label>
              <input type="file" id="image" name="image" />
            </div>

            <div className="draft-input-group">
              {/* A label and input for the draft title */}
              <label htmlFor="title">Title</label>
              <input type="text" id="title" name="title" value={title} onChange={(event) => setTitle(event.target.value)} />
            </div>

            <div className="draft-input-group">
              {/* A label and textarea for the draft content */}
              <label htmlFor="content">Content</label>
              <textarea id="content" name="content" value={content} onChange={(event) => setContent(event.target.value)} />
            </div>

            <div className="draft-input-group">
              {/* A label an input for tags */}
              <label htmlFor="tags">Tags</label>
              <input type="text" id="tags" name="tags" value={tags} onChange={(event) => setTags(event.target.value)} />
            </div>

            {/* Draft actions */}
            <div className="draft-actions">
              <button type="submit" className="primary">
                Save draft
              </button>
              <button type="submit" className="secondary">
                Publish
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
