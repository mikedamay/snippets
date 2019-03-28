import {feature_start, feature_item, feature_end} from "./featureTemplate.js";
import {text} from "./mentorComments.js";

export function layoutFeatures(exercise) {
    const html =  buildHtml(exercise);
    document.getElementById('feature-table').innerHTML = html;
}

function buildHtml(exercise) {
    const snippets = text.exercises[exercise];
    assert(snippets !== undefined);

    const itemsHtml = buildItemsHtml(snippets);
    const generalItemsHtml = buildItemsHtml(text.exercises["xxx-general"])
    return feature_start + itemsHtml + generalItemsHtml + feature_end;
}


function buildItemsHtml(snippets) {
    let itemsHtml = "";
    for (var snippet in snippets) {
        if (snippets.hasOwnProperty(snippet)) {
            itemsHtml += buildItemHtml(snippet, snippets[snippet].feature);
        }
    }
    return itemsHtml;
}

function buildItemHtml(snippetName, featureText) {
    return feature_item.replace(/{{feature-name}}/g, snippetName).replace(/{{feature-text}}/g, featureText);
}


function assert(assertion, message) {
    if (!assertion) {
        throw( message);
    }
}