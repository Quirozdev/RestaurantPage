export default function createSvgElement(svgObj) {
    // for reference: https://dev.to/tqbit/how-to-create-svg-elements-with-javascript-4mmp
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const iconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");

    svg.setAttribute("viewBox", svgObj.viewBox);

    iconPath.setAttribute("d", svgObj.path.d);

    svg.appendChild(iconPath);

    return svg;
}
