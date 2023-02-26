<script>
    import Layout from "../components/layout.svelte";
    import TabBar from "../components/tab-bar.svelte";
    import BottomSheet from "../components/bottom-sheet.svelte";
    import CurrentSite from "../components/current-site.svelte";
    import SiteMenu from "../components/site-menu.svelte";
    import SiteSwitcher from "../components/site-switcher.svelte";
    import UserMenu from "../components/user-menu.svelte";
    import StatsCard from "../components/dashboard/stats.svelte";
    import PagesCard from "../components/dashboard/pages.svelte";
    import PostsCard from "../components/dashboard/posts.svelte";
    import DraftsCard from "../components/dashboard/drafts.svelte";
    import BackupCard from "../components/dashboard/backup.svelte";
    import SubscribersCard from "../components/dashboard/subscribers.svelte";
    import SiteViewToggle from "../components/site-view-toggle.svelte";

    let isBottomSheetVisible = false;

    function openBottomSheet() {
        console.log(isBottomSheetVisible);
        isBottomSheetVisible = true;
    }
</script>

<svelte:head>
    <title>My Site</title>
</svelte:head>

<Layout>
    <header id="top-bar">
        <CurrentSite />
        <div class="top-bar-secondary">
            <SiteMenu />
            <UserMenu on:click={openBottomSheet} />
        </div>
    </header>

    <!-- <SiteViewToggle /> -->

    <section id="cards">
        <StatsCard />
        <SubscribersCard />
        <DraftsCard />
        <PagesCard />
        <PostsCard />
        <BackupCard />
    </section>

    <TabBar />

    <BottomSheet visible={isBottomSheetVisible} />
</Layout>

<style>
    #top-bar {
        position: sticky;
        top: 0;
        left: 0;
        width: 100%;
        padding: 15px;
        border-bottom: 1px solid rgb(239, 239, 239, 1);
        background: rgba(239, 239, 239, 0.25);
        backdrop-filter: blur(10px);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .top-bar-secondary {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 5px;
    }

    #cards {
        padding: 0 20px 20px 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
</style>
