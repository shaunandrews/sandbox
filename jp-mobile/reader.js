function ReaderPostActions() {
    return (
        <div className="post-actions">
            <button className="icon-only"><Icon name="bookmark" /></button>
            <button className="icon-only"><Icon name="repeat" /></button>
            <button className="icon-only"><Icon name="comment" /></button>
            <button className="icon-only"><Icon name="star" /></button>
        </div>
    )
}

function ReaderPost({
    avatar,
    siteTitle,
    siteUrl,
    featuredImage,
    title,
    excerpt,
}) {
    return (
        <div className="reader-post">
            <div className="reader-post__avatar">
                {avatar}
            </div>

            <div className="reader-post__body">
                <div className="reader-post__site">
                    <h2 className="reader-post__site-title">{siteTitle}</h2>
                    {/* <p className="reader-post__site-url">{siteUrl}</p> */}
                </div>

                <h3 className="reader-post__title">{title}</h3>

                {featuredImage && (
                    <div className="reader-post__featured-image">
                        {featuredImage}
                    </div>
                )}

                <p className="reader-post__excerpt">{excerpt}</p>
                {/* <p className="reader-post__tags">meditation, mental health, mindfulness, self-care</p> */}
                <ReaderPostActions />
            </div>
        </div>
    )
}

function ReaderFollowingPosts() {
    return (
        <div className="reader__following-posts">
            <ReaderPost
                avatar={<img src="https://loremflickr.com/40/40/?lock=39" height="40" width="40" alt="Avatar" />}
                siteTitle="Sporadic Thoughts"
                siteUrl="sporadicthoughts.com"
                title="The Benefits of Meditation for Mental Health"
                excerpt="Meditation has been shown to have numerous benefits for mental health, including reducing anxiety and depression, improving focus and attention, and increasing feelings of well-being. In this article, we explore the science behind meditation and how you can start a meditation practice."
            />

            <ReaderPost
                avatar={<img src="https://loremflickr.com/40/40/" height="40" width="40" alt="Avatar" />}
                siteTitle="The Foodie Life"
                siteUrl="foodielife.com"
                featuredImage={<img src="https://loremflickr.com/300/200/?lock=392" height="200" width="300" alt="Featured Image" />}
                title="Exploring the Culinary Wonders of Thailand"
                excerpt="Thai cuisine is renowned for its bold flavors and exotic ingredients. In this post, we take a culinary journey through Thailand, sampling some of the country's most iconic dishes and exploring the unique cultural influences that have shaped the cuisine."
            />

            <ReaderPost
                avatar={<img src="https://loremflickr.com/40/40/" height="40" width="40" alt="Avatar" />}
                siteTitle="Fitness Frenzy"
                siteUrl="fitnessfrenzy.com"
                featuredImage={<img src="https://loremflickr.com/300/200/" height="200" width="300" alt="Featured Image" />}
                title="Why Strength Training is Essential for Women"
                excerpt="Many women avoid strength training because they believe it will make them look bulky or masculine. In reality, strength training is essential for building lean muscle mass, improving bone density, and boosting metabolism. In this post, we debunk common myths about strength training and explain why every woman should incorporate it into her fitness routine."
            />

            <ReaderPost
                avatar={<img src="https://loremflickr.com/40/40/" height="40" width="40" alt="Avatar" />}
                siteTitle="The Tech Insider"
                siteUrl="techinsider.com"
                title="The Future of Virtual Reality"
                excerpt="Virtual reality technology has come a long way in recent years, and experts predict that it will revolutionize everything from gaming and entertainment to healthcare and education. In this post, we explore the latest advancements in virtual reality and discuss the potential applications for this exciting technology."
            />

            <ReaderPost
                avatar={<img src="https://loremflickr.com/40/40/" height="40" width="40" alt="Avatar" />}
                siteTitle="The Wanderlust Chronicles"
                siteUrl="wanderlustchronicles.com"
                featuredImage={<img src="https://loremflickr.com/300/200/" height="200" width="300" alt="Featured Image" />}
                title="Discovering the Hidden Gems of Japan"
                excerpt="Japan is known for its bustling cities and iconic landmarks, but there are also plenty of off-the-beaten-path destinations that offer a glimpse into the country's rich history and culture. In this post, we take a journey through Japan's hidden gems, from quaint mountain villages to serene temples and gardens."
            />

            <ReaderPost
                avatar={<img src="https://loremflickr.com/40/40/" height="40" width="40" alt="Avatar" />}
                siteTitle="Fitness and Health"
                siteUrl="fitnessandhealth.com"
                title="5 Effective Ways to Boost Your Metabolism"
                excerpt="Your metabolism is responsible for converting food into energy. A higher metabolism means that you burn more calories at rest. In this article, we explore 5 effective ways to boost your metabolism and help you reach your fitness goals faster."
            />

            <ReaderPost
                avatar={<img src="https://loremflickr.com/40/40/" height="40" width="40" alt="Avatar" />}
                siteTitle="Travel Tales"
                siteUrl="traveltales.com"
                featuredImage={<img src="https://loremflickr.com/300/200/" height="200" width="300" alt="Featured Image" />}
                title="Discovering the Wonders of Patagonia"
                excerpt="Patagonia is a region located at the southern tip of South America, known for its stunning natural landscapes and diverse wildlife. In this article, we share our experience of exploring Patagonia and the wonders we discovered along the way."
            />
        </div>
    )
}

function ReaderView() {
    const [currentView, setCurrentView] = React.useState('Following');
    const [currentType, setCurrentType] = React.useState('posts');
    const [currentSection, setCurrentSection] = useState('Following');

    return (
        <div className="view reader">
            <header className="view__header toolbar">
                <SectionHeadingMenu
                    currentSection={currentSection}
                    onChange={setCurrentSection}
                    sections={[
                        { label: 'Following', icon: 'check-square' },
                        { label: 'Discover', icon: 'binoculars' },
                        { label: 'Liked posts', icon: 'star' },
                        { label: 'Saved posts', icon: 'bookmarks' }
                    ]}
                />

                <div className="toolbar-group">
                    <button className="icon-only"><Icon name="search" /></button>
                    <button className="icon-only"><Icon name="menu" /></button>
                </div>
            </header>

            <main className="view__content">
                <SegmentedControl
                    options={[
                        { value: 'posts', label: 'Posts' },
                        { value: 'sites', label: 'Sites' },
                        { value: 'tags', label: 'Tags' }
                    ]}
                    value={currentType}
                    onChange={setCurrentType}
                />

                {currentType === 'posts' && (
                    <ReaderFollowingPosts />
                )}

                {currentType === 'sites' && (
                    <div className="reader__following-sites">
                        <Site
                            icon={<SiteIcon number="1234" />}
                            title="WordPress News"
                            url="wordpress.org/news/"
                        />
                        <Site
                            icon={<SiteIcon number="2345" />}
                            title="WordPress.com Blog"
                            url="wordpress.com/blog"
                        />
                        <Site
                            icon={<SiteIcon number="3456" />}
                            title="CSSTricks"
                            url="css-tricks.com"
                        />
                        <Site
                            icon={<SiteIcon number="4323" />}
                            title="Baxtor's Blog"
                            url="baxtor.blog"
                        />
                        <Site
                            icon={<SiteIcon number="3324" />}
                            title="Automattic Design"
                            url="automattic.design"
                        />
                    </div>
                )}
            </main>
        </div>
    )
}