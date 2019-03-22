//
// page.html is required
//
import {text} from './mentorComments.js';

const mike = text.exercises['twofer']["null-coalescence"].text;

let bob = 2;


// alert(mike + bob);

export function doSomething(text)
{
    alert(mike);

    // document.getElementsByClassName('abc').length();
}

export function showText(exerciseName, featureName) {
    show(getSnippet(exerciseName, featureName));
}

function show(snippet) {
    var location = findLocation(snippet.category);
    location.innerHTML = snippet.text;
}


function getSnippet(exerciseName, featureName) {
    var generalSnippet = lookupSnippet("xxx-general", featureName);
    var exerciseSnippet = lookupSnippet(exerciseName, featureName);
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
    var exercise = text.exercises[exerciseName];
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