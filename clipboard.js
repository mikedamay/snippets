import {layoutFeatures} from "./featureLayout.js";
import {getActiveFeatures, getFeatureElements, EXERCISE_DROPDOWN, DATA_VAL_ATTR} from "./main.js";

export function copyToClipboard(element) {
    element.focus();
    element.select();
    document.execCommand('copy', false);
}

function saveState() {
    let state = {};

    state.exercise = document.getElementById(EXERCISE_DROPDOWN).options[document.getElementById(EXERCISE_DROPDOWN).selectedIndex].value;
    state.features = [];
    const activeFeatures = getActiveFeatures();
    for (var ii = 0; ii < activeFeatures.length; ii++) {
        state.features[ii] = activeFeatures[ii].getAttribute(DATA_VAL_ATTR);
    }
    return state;
}

function restoreState(state) {
    document.getElementById(EXERCISE_DROPDOWN).value = state.exercise;
    layoutFeatures(state.exercise);
    const features = getFeatureElements();
    for (var ii = 0; ii < features.length; ii++) {
        if (state.features.find(function (item) {
            return item === features[ii].getAttribute(DATA_VAL_ATTR)
        }) !== undefined) {
            features[ii].checked = true;
        }
    }
}