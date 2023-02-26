$(document).ready(function () {

});

// Slider
function setLabelPosition(range, label) {
    var value = range.val(),
        min = range.attr("min"),
        max = range.attr("max"),
        left = ((value - min) * 100) / (max - min);

    var newValue = Number((range.val() - min) * 100 / (max - min)),
        newPosition = 20 - (newValue * 0.4);

    label.css('left', `calc(${newValue}% + (${newPosition}px))`);
}

function hideLabel() {
    // label.css("opacity", 1);
    $(".range-value").css("opacity", 0);
}

function setEstimatedReach(budget, duration) {
    var reach = budget * duration,
        min = 1000,
        max = 10000;

    var minReach = (min * duration * budget) * 0.023;
    var maxReach = (max * duration * budget) * 0.038;
    $("#estimated-reach").html(minReach.toLocaleString("en-US") + ' - ' + maxReach.toLocaleString("en-US"));
}

// Budget
function getBudget() {
    return $("#budget__input").val();
}

function setBudget(budget = $("#budget__input").val()) {
    updateBudgetLabel(budget);
    var duration = getDuration();
    setTotalSpendBudget(budget, duration);
    setEstimatedReach(budget, duration);
    setLabelPosition(
        $("#budget__input"),
        $("#budget-value")
    );
    $("#budget-value").css("opacity", 1);
    return budget;
}

function updateBudgetLabel(budget) {
    // $("#budget-value").html("$" + budget + " daily");
    $("#budget-value").html("$" + budget);
}

function setTotalSpendBudget(dailyBudget, duration) {
    var budget = dailyBudget * duration;
    $("#total-spend__budget").html(budget);
    $("#total-spend__duration").html(duration);
}


// Duration
function getDuration() {
    return $("#duration__input").val();
}

function setDuration(duration = $("#duration__input").val()) {
    setDurationLabel(duration);
    var budget = getBudget();
    setTotalSpendBudget(budget, duration);
    setEstimatedReach(budget, duration);
    setLabelPosition(
        $("#duration__input"),
        $("#duration-value")
    );
    $("#duration-value").css("opacity", 1);
    return duration;
}

function setDurationLabel(duration) {
    // $("#duration-value").html(duration + " days");
    $("#duration-value").html(duration);
}