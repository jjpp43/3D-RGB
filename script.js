var dragging = false;
var originalX;
cube.mouseDown(function(e){
   originalX =  e.pageX;
   dragging = true;
});
cube.mouseUp(function(e){
    dragging = false;
});
cube.mouseMove(function(e){
    if (dragging){
        var DeltaX = e.pageX - originalX;
        var rotation = CalculateRotationDegrees(DeltaX);
        cube.css('transform',rotation);
    }
});
//code snippet from stackoverflow
//내 입맛대로 바꾸기 
