//
// page.html is required
//
import {text} from './mentorComments.js';

const EXERCISM_FEATURE = "exercism-feature";
const GENERAL_SNIPPET = "xxx-general";
const COMMENT_TEXT_ID = "commentText";
const DATA_VAL_ATTR = "data-val";
const CAT_PLACEHOLDER = /{{[^}^{]*}}/g;
const CAT_PLACEHOLDER_PREFIX = '{{';
const CAT_PLACEHOLDER_SUFFIX = '}}';

const template = document.getElementById(COMMENT_TEXT_ID).value;

/**
 * usage: typically called when a feature is selected or deselected on the page.html
 * @param exerciseName, e.g. twofer, resistor-color
 */
export function showText(exerciseName) {
    const commentTextEl = document.getElementById(COMMENT_TEXT_ID);
    const features = getActiveFeatures();
    const mentorComments = buildMentorComments(exerciseName, features);
    const categories = getCommentCateogries(template);
    addMentorCommentsToPage(commentTextEl, categories, mentorComments);
}

function addMentorCommentsToPage(commentTextEl, categories, mentorComments) {
    let commentText = template;
    for (var ii = 0; ii < categories.length; ii++ ) {
        if (mentorComments[categories[ii]] !== undefined) {
            commentText = commentText.replace(CAT_PLACEHOLDER_PREFIX + categories[ii] + CAT_PLACEHOLDER_SUFFIX, mentorComments[categories[ii]]);
        }
        else {
            commentText = commentText.replace(CAT_PLACEHOLDER_PREFIX + categories[ii] + CAT_PLACEHOLDER_SUFFIX, '');
        }
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

/**
 * for each feature in the exercise identified by exerciseName
 * add the snippet to which it refers to the comment category
 * @param exerciseName e.g. twofer, resistor-color
 * @param features an array of DOM elements (typically all those from the current page with a class of exercism-feature
 *        each feature has a data-val value which corresponds to the name of a snippet.
 */
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

function getCommentCateogries(commentText) {
    const categories = commentText.match(CAT_PLACEHOLDER);
    if (categories == null) {
        return [];
    }
    for (var ii = 0; ii < categories.length; ii++) {
        categories[ii] = categories[ii].replace('{{','').replace('}}', '');
    }
    return categories;
}

function assert(assertion) {
    if (!assertion) {
        throw( "failure");
    }
}