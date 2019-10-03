export class Helpers {

    crossBrowserTranslate(movedBlock, prop, amount) {

        const p = prop + '(' + amount + 'px)';
        movedBlock.style.mozTransform = p;
        movedBlock.style.webkitTransform = p;
        movedBlock.style.oTransform = p;
        movedBlock.style.msTransform = p;
        movedBlock.style.transform = p;

    }

    randomDataSet(dataSetSize, minValue, maxValue) {
        return new Array(dataSetSize).fill(0).map(() =>
            Math.round(Math.random() * (maxValue - minValue) + minValue)
        )
    }


}