

export function copyToClipboard(element) {
    element.focus();
    element.select();
    document.execCommand('copy');
}