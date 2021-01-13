const canvas = document.getElementById("jsCanvas");

let painting = false;

function onMouseMove(event) {
    /*스크린내 옵셋값 추출 */
    const x = event.offsetX;
    const y = event.offsetY;
}

function stopPainting() {
    painting = false;
}

function onMouseDown(event) {
    painting = true;

}

function onMouseUp(event) {
    stopPainting();
    
}

/*마우스 움직임 감지 */
if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave" stopPainting);
}

