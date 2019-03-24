//
// page.html is required
//
import {text} from './mentorComments.js';

const EXERCISM_FEATURE = "exercism-feature";

const mike = text.exercises['twofer']["null-coalescence"].text;


export function doSomething(text)
{
    alert(mike);

    // document.getElementsByClassName('abc').length();
}

function addMentorCommentsToPage(categories, mentorComments) {
    const commentTextEl = document.getElementById('commentText');
    let commentText = commentTextEl.value;
    for (var ii = 0; ii < categories.length; ii++ ) {
        commentText = commentText.replace('{{' + categories[ii] + '}}', mentorComments[categories[ii]]);
    }
    commentTextEl.value = commentText;
}

export function showText(exerciseName, featureName) {
    const features = getActiveFeatures();
    // show(getSnippet(exerciseName, featureName));
    const mentorComments = buildMentorComments(exerciseName, features);
    const categories = getCommentCateogries();
    addMentorCommentsToPage(categories, mentorComments);
}

function show(snippet) {
    const location = findLocation(snippet.category);
    location.innerHTML = snippet.text;
}


function getSnippet(exerciseName, featureName) {
    const generalSnippet = lookupSnippet("xxx-general", featureName);
    const exerciseSnippet = lookupSnippet(exerciseName, featureName);
    if (exerciseSnippet === undefined) {
        if (generalSnippet === undefined) {
            return "No snippet found for '" + featureName + "' in '" + exerciseName + "'";
        }
        else {
            return generalSnippet;
        }
    }
    else {
        return exerciseSnippet;
    }
}

function lookupSnippet(exerciseName, featureName) {
    const exercise = text.exercises[exerciseName];
    if (exerciseName !== undefined) {
        return exercise[featureName];
    }
    else {
        return undefined;
    }
}

function findLocation(category) {
    return document.getElementById(category);
}

function getActiveFeatures() {
    const features = document.getElementsByClassName(EXERCISM_FEATURE);
    return features;
}

function buildMentorComments(exerciseName, features) {
    const comments = {};

    for (var ii = 0; ii < features.length; ii++) {
        const feature = features[ii];
        const featureName = feature.getAttribute('data-val');
        assert(featureName !== null);
        const snippet = getSnippet(exerciseName, featureName);
        const category = snippet.category;
        if (comments[category] === undefined) {
            comments[category] = "";
        }
        comments[category] += formatSnippetText(snippet);
    }
    return comments;
}

function formatSnippetText(snippet) {
    return snippet.text + '\n\n';
    // return "<div>" + snippet.text + "</div>";
}

function getCommentCateogries()
{
    const commentTextEl = document.getElementById('commentText');
    const commentText = commentTextEl.value;

    const categories = commentText.match(/{{[^}^{]*}}/g);
    if (categories == null) {
        return [];
    }
    for (var ii = 0; ii < categories.length; ii++) {
        categories[ii] = categories[ii].replace('{','').replace('}', '').replace('{','').replace('}', '');
    }
    return categories;
}

function assert(assertion) {
    if (!assertion) {
        throw( "failure");
    }
}