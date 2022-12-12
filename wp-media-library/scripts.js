// Run a function when the page is ready
$(document).ready(function () {
    renderMediaItems(media);
    handleMediaItemClick();

    // When the escape key is pressed, close the media details
    $(document).keyup(function (event) {
        if (event.keyCode === 27) {
            closeDetails();
        }
    });

    // When the left arrow key is pressed, show the previous media item
    $(document).keyup(function (event) {
        if (event.keyCode === 37) {
            previousMedia();
        }
    });

    // When the right arrow key is pressed, show the next media item
    $(document).keyup(function (event) {
        if (event.keyCode === 39) {
            nextMedia();
        }
    });

    // renderMediaItemDetails(media[1]);
    // toggleSidebar('edit');

});

// Defines a fake collection of media items, right now
// it's just an array of images. In the future, this
// could be a collection of images, videos, spreadsheets,
// documents, audio and other files.
var media = [
    { src: 'library/1.jpeg', title: 'A bridge over troubled water', id: 0 },
    { src: 'library/2.jpeg', title: 'Rocks meet sea', id: 1 },
    { src: 'library/3.jpeg', title: 'Bayfront view', id: 2 },
    { src: 'library/4.jpeg', title: 'Love at sunset', id: 3 },
    { src: 'library/5.jpeg', title: 'Harvest time!', id: 4 },
    { src: 'library/6.webp', title: 'Reading time', id: 5 },
    { src: 'library/7.jpeg', title: 'Ignoring the sunset', id: 6 },
    { src: 'library/8.jpeg', title: 'Path through the field', id: 7 },
    { src: 'library/9.jpeg', title: 'All the windows', id: 8 },
    { src: 'library/10.jpeg', title: 'Dew on a web', id: 9 },
    { src: 'library/11.jpeg', title: 'Man swimming in water', id: 10 },
    { src: 'library/12.jpeg', title: 'Palm trees on the beach', id: 11 },
    { src: 'library/13.jpeg', title: 'Rocks on the shoreline', id: 12 },
    { src: 'library/14.jpeg', title: 'Beach sunsets are the best', id: 13 },
    { src: 'library/15.webp', title: 'Books and postcards at the local shop', id: 14 },
    { src: 'library/16.jpeg', title: 'View overlooking the city', id: 15 },
    { src: 'library/17.jpeg', title: 'An ancient ampitheater', id: 16 },
    { src: 'library/18.jpeg', title: 'Sidewalk book shop on vacation', id: 17 },
];

function getMediaByID(id) {
    return media[id];
}

// Render a single media item
function renderMediaItem(mediaItem) {
    var template = $("#template__media-item").html();
    var media = Mustache.render(template, mediaItem);
    $("#media").append(media);
}

// Render all media items
function renderMediaItems(media) {
    for (var i = 0; i < media.length; i++) {
        renderMediaItem(media[i]);
    }
}

function setView(view = "grid") {
    if (view === "grid") {
        $("#media").removeClass("is-list-view");
        $("#media").addClass("is-grid-view");
    } else if (view === "list") {
        $("#media").removeClass("is-grid-view");
        $("#media").addClass("is-list-view");
    }
}

// Thumbnail Slider
function changeMediaItemWidth(width) {
    $(".media-item").css("width", width);
}

function getThumbnailSliderValue() {
    return $("#thumbnail-slider").val();
}

function setThumbnailSize() {
    var size = getThumbnailSliderValue();
    changeMediaItemWidth("calc(" + size + "% - 12px");
}


// Clicking Items
function handleMediaItemClick() {
    $(".media-item").click(function () {
        cloneAndScaleElement($("img", this));
        renderMediaItemDetails(getMediaByID($(this).data("id")));
    });
}

function cloneAndScaleElement(element) {
    var clone = element.clone();
    clone.addClass("media-item-clone");
    clone.css({
        "position": "absolute",
        "z-index": "1",
        "top": element.offset().top - 94,
        "left": element.offset().left,
        "width": element.width(),
        "height": element.height()
    });
    $("#media").prepend(clone);

    // remove the clone after 0.2s
    setTimeout(function () {
        clone.remove();
    }, 200);
}


// Media Details
function renderMediaItemDetails(mediaItem) {
    var template = $("#template__media-details").html();
    var detailsUI = Mustache.render(template, mediaItem);

    if ($("#media-details").length) {
        $("#media-details").html(detailsUI);
    } else {
        setTimeout(function () {
            $("body").append(detailsUI);
        }, 100);
    }

    $("body").data("media-id", mediaItem.id);
    setBodyScroll("off");
}

function closeDetails() {
    $("#media-details").remove();
    $("body").data("media-id", '');
    setBodyScroll("on");
}

function nextMedia() {
    var mediaID = $("body").data("media-id");
    if (mediaID < media.length - 1) {
        mediaID++;
    } else {
        mediaID = 0;
    }
    // closeDetails();
    renderMediaItemDetails(getMediaByID(mediaID));
}

function previousMedia() {
    var mediaID = $("body").data("media-id");
    if (mediaID > 0) {
        mediaID--;
    } else {
        mediaID = media.length - 1;
    }
    // closeDetails();
    renderMediaItemDetails(getMediaByID(mediaID));
}

function toggleSidebar(tool) {
    openDetailsSidebar();

    var template, toolUI,
        sidebar = $("#media-details__sidebar")
    mediaID = $("body").data("media-id");

    if (tool === "info") {
        if (sidebar.data("tool") === "info") {
            sidebar.data("tool", "");
            closeDetailsSidebar();
            return;
        }
        sidebar.data("tool", "info");
        template = $("#template__media-info").html();
    } else if (tool === "edit") {
        if (sidebar.data("tool") === "edit") {
            sidebar.data("tool", "");
            closeDetailsSidebar();
            return;
        }
        sidebar.data("tool", "edit");
        template = $("#template__media-edit").html();
    }

    toolUI = Mustache.render(template, getMediaByID(mediaID));
    sidebar.html(toolUI);
}

function openDetailsSidebar() {
    $("#media-details__sidebar").addClass("opened");
}

function closeDetailsSidebar() {
    $("#media-details__sidebar").removeClass("opened");
}

function isDetailsSidebarOpen() {
    return $("#media-details__sidebar").hasClass("opened");
}

function setBodyScroll(scroll = "on") {
    if (scroll === "off") {
        $("body").addClass("no-scroll");
    } else {
        $("body").removeClass("no-scroll");
    }
}
