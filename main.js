//
// page.html is required
//
import {text} from './mentorComments.js';

const EXERCISM_FEATURE = "exercism-feature";
const GENERAL_SNIPPET = "xxx-general";
const COMMENT_TEXT_ID = "commentText";
const DATA_VAL_ATTR = "data-val";

const template = document.getElementById(COMMENT_TEXT_ID).value;

export function showText(exerciseName, featureName) {
    const commentTextEl = document.getElementById(COMMENT_TEXT_ID);
    const features = getActiveFeatures();
    const mentorComments = buildMentorComments(exerciseName, features);
    const categories = getCommentCateogries(commentTextEl);
    addMentorCommentsToPage(commentTextEl, categories, mentorComments);
}

function addMentorCommentsToPage(commentTextEl, categories, mentorComments) {
    let commentText = template;
    for (var ii = 0; ii < categories.length; ii++ ) {
        commentText = commentText.replace('{{' + categories[ii] + '}}', mentorComments[categories[ii]]);
    }
    commentTextEl.value = commentText;
}

function getSnippet(exerciseName, featureName) {
    const generalSnippet = lookupSnippet(GENERAL_SNIPPET, featureName);
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
    let activeFeatures = [];
    let jj = 0;
    for (var ii = 0; ii < features.length; ii++) {
        if (features[ii].checked) {
            activeFeatures[jj] = features[ii];
            jj++;
        }
    }
    return activeFeatures;
}

function buildMentorComments(exerciseName, features) {
    const comments = {};

    for (var ii = 0; ii < features.length; ii++) {
        const feature = features[ii];
        const featureName = feature.getAttribute(DATA_VAL_ATTR);
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
}

function getCommentCateogries(commentTextEl) {
    const commentText = commentTextEl.value;

    const categories = commentText.match(/{{[^}^{]*}}/g);
    if (categories == null) {
        return [];
    }
    for (var ii = 0; ii < categories.length; ii++) {
        categories[ii] = categories[ii].replace('{','').replace('}', '')
          .replace('{','').replace('}', '');
    }
    return categories;
}

function assert(assertion) {
    if (!assertion) {
        throw( "failure");
    }
}