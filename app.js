function draw() {
    var canvas = document.getElementById('example');
    var modification = document.getElementById('modification');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        //draw lines
        for (i = 20; i < 100; i += 10) {
            ctx.moveTo(10, i);
            ctx.lineTo(100, i);
            ctx.stroke();
        }
        for (i = 20; i < 100; i += 10) {
            ctx.moveTo(i, 10);
            ctx.lineTo(i, 100);
            ctx.stroke();
        }
    }
    if (modification.getContext) {
        var ctx = modification.getContext('2d');
        var width = 1;
        for (i = 20; i < 100; i += 20) {

            ctx.beginPath();
            ctx.moveTo(10, i);
            ctx.lineTo(100, i);
            ctx.lineCap = 'round';
            ctx.lineWidth = width;

            ctx.strokeStyle = 'rgb(19,139,67)';
            ctx.stroke();
            width += 3;
        }
    }

    //draw arcs(circle)
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        var x = 70;
        var y = 200;
        var radius = 50;
        var startAngle = 0;
        var endAngle = 2 * Math.PI;
        var counterClockwise = false;
        ctx.beginPath();
        ctx.arc(x, y, radius, startAngle, endAngle, counterClockwise);
        ctx.lineWidth = 3;
        ctx.strokeStyle = "purple";
        ctx.stroke();


    }

//draw arcs(rainbow)
    if (modification.getContext) {
        var ctx = modification.getContext('2d');
        var x = 70;
        var y = 200;
        var radius = 60;
        var arcWidth = 6;
        var startAngle = 1.1 * Math.PI;
        var endAngle = 1.9 * Math.PI;
        var counterClockwise = false;
        for (var arcIndex = 1; arcIndex < 8; arcIndex++) {

            ctx.beginPath();
            switch (arcIndex) {
                case 1:
                    ctx.strokeStyle = 'red';
                    break;
                case 2:
                    ctx.strokeStyle = 'orange';
                    break;
                case 3:
                    ctx.strokeStyle = 'yellow';
                    break;
                case 4:
                    ctx.strokeStyle = 'green';
                    break;
                case 5:
                    ctx.strokeStyle = '#00CED1';
                    break;
                case 6:
                    ctx.strokeStyle = 'blue';
                    break;
                case 7:
                    ctx.strokeStyle = 'purple';
                    break;
                default:
                    ctx.strokeStyle = 'black';
                    break;
            }
            ctx.arc(x, y, radius, startAngle, endAngle, counterClockwise);
            ctx.lineWidth = arcWidth;
            radius -= arcWidth;

            ctx.stroke();

        }


    }
}