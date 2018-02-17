window.onload = function () {
    var canvasElement = document.getElementById('NewCanvas');
    console.log('Canvas height: ', canvasElement.height, ' Canvas width: ', canvasElement.width);
    var context = canvasElement.getContext('2d');
    console.log('Context height: ', context.height, ' Context width: ', context.width);
    context.strokeStyle = '#000'
    context.moveTo(0, 0);
    context.lineTo(200, 200);
    context.stroke();

    drawCircle([100, 150], 20, context);

    drawCircle([50, 100], 30, context);
};

function drawCircle(center, radius, context) {
    context.beginPath();
    context.arc(center[0], center[1], radius, 0, 2 * Math.PI);
    context.stroke();

}
