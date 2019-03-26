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

/**
 * snippets appear on page.html
 * @param commentTextEl - text area for snippets
 * @param categories - names of all the possible categories in the template
 * @param mentorComments dictionary of concatenated snippets for each category for which there are active features
 */
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

/**
 *
 * @param exerciseName e.g. twofer, resitor-color
 * @param featureName, e.g. good-solution
 * @returns either a general snippet (where exeriseName is ignored or a specific exercise feature
 */
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

/**
 * internal lookup
 * @param exerciseName e.g. twofer, resistor-color
 * @param featureName e.g. good-solution, dictionary, etc.
 * @returns a snippet with a name of featureName
 */
function lookupSnippet(exerciseName, featureName) {
    const exercise = text.exercises[exerciseName];
    if (exerciseName !== undefined) {
        return exercise[featureName];
    }
    else {
        return undefined;
    }
}

/**
 *
 * @returns {Array} elements with a class of exercism-feature
 * @returns any checked features (DOM elements
 */
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
 * @returns a dictionary mapping category names to concatenated snippets e.g. review-point -> snippet1\n\nsnippet2...
 */
function buildMentorComments(exerciseName, features) {
    const comments = {};

    for (var ii = 0; ii < features.length; ii++) {
        const feature = features[ii];
        const featureName = feature.getAttribute(DATA_VAL_ATTR);
        assert(featureName !== null, "featureName cannot be null - missing data-val?");
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

/**
 *
 * @param commentTemplate - some thing like 'blah blah\n\n{{review-point}}\n\nblah\n\n{discussion-point}....
 * @returns an array of categories such as 'review-point', 'discussion-point' in the same range as snippet categories
 */
function getCommentCateogries(commentTemplate) {
    const categories = commentTemplate.match(CAT_PLACEHOLDER);
    if (categories == null) {
        return [];
    }
    for (var ii = 0; ii < categories.length; ii++) {
        categories[ii] = categories[ii].replace(CAT_PLACEHOLDER_PREFIX,'').replace(CAT_PLACEHOLDER_SUFFIX, '');
    }
    return categories;
}

function assert(assertion, message) {
    if (!assertion) {
        throw( message);
    }
}