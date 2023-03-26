import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import {
    BlockEditorProvider,
    BlockList,
    BlockTools,
    WritingFlow,
    ObserveTyping,
} from '@wordpress/block-editor';
import { parse } from '@wordpress/blocks';
import { SlotFillProvider, Popover } from '@wordpress/components';
import { registerCoreBlocks } from '@wordpress/block-library';

import '@wordpress/components/build-style/style.css';
import '@wordpress/block-editor/build-style/style.css';

function SiteInfo({ siteInfo }) {
    return (
        <header className="sidebar-group site-info">
            <h1 className="site-title">{siteInfo.title}</h1>
            <div className="site-url">{siteInfo.url}</div>
        </header>
    )
}

function DraftsListItem({ draft, onDraftClick, isSelected }) {
    const classes = classnames('draft-list-item', {
        'is-selected': isSelected,
    });

    return (
        <li
            key={draft.id}
            className={classes}
            onClick={() => onDraftClick(draft)}
        >
            {draft.title.rendered == '' ? (
                <h3 className="draft-title untitled">(Untitled)</h3>
            ) : (
                <h3 className="draft-title">{draft.title.rendered}</h3>
            )}
        </li>
    )
}

function DraftsList({ drafts, onDraftClick, selectedDraftID }) {
    return (
        <ul className="drafts-list">
            {drafts.map((draft) => (
                <DraftsListItem
                    key={draft.id}
                    draft={draft}
                    onDraftClick={onDraftClick}
                    isSelected={draft.id === selectedDraftID}
                />
            ))}
        </ul>
    )
}

function DraftDetails({ selectedBlocks }) {
    const [blocks, setBlocks] = useState(selectedBlocks);

    useEffect(() => {
        setBlocks(selectedBlocks);
        console.log(blocks);
    }, [selectedBlocks]);

    return (
        <>
            {blocks && (
                <BlockEditorProvider
                    value={blocks}
                    onInput={(blocks) => setBlocks(blocks)}
                    onChange={(blocks) => setBlocks(blocks)}
                >
                    <SlotFillProvider>
                        <BlockTools>
                            <WritingFlow>
                                <ObserveTyping>
                                    <BlockList />
                                </ObserveTyping>
                            </WritingFlow>
                        </BlockTools>
                        <Popover.Slot />
                    </SlotFillProvider>
                </BlockEditorProvider>
            )}
        </>
    );
}


function DraftsSection({ setIsAuthenticated, siteInfo, drafts }) {
    const [selectedDraft, setSelectedDraft] = useState(null);
    const [selectedBlocks, setSelectedBlocks] = useState([]);

    const handleDraftClick = (draft) => {
        setSelectedDraft(draft.id);
        if (draft.content.raw) {
            setSelectedBlocks(parse(draft.content.raw));
        } else {
            setSelectedBlocks([]);
        }
    };

    return (
        <section className="main drafts">
            <div className="sidebar">
                {siteInfo && (
                    <SiteInfo siteInfo={siteInfo} />
                )}

                {drafts && (
                    <div className="sidebar-group drafts primary">
                        <h2>Drafts</h2>
                        <DraftsList
                            drafts={drafts}
                            onDraftClick={handleDraftClick}
                            selectedDraftID={selectedDraft}
                        />
                    </div>
                )}

                <footer>
                    <button
                        onClick={() => setIsAuthenticated(false)}
                    >Sign Out</button>
                </footer>
            </div>

            <div className="details">
                {drafts && selectedDraft &&
                    <DraftDetails selectedBlocks={selectedBlocks} />
                }
            </div>
        </section>
    )
}

export default DraftsSection;