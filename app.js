const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

/*CSS와 별개로 js에서 캔버스에 값이 들어갈 영역 설정을 따로 해줘야함 */
canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = "2.5";


let painting = false;

function onMouseMove(event) {
    /*스크린내 옵셋값 추출 */
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function stopPainting() {
    painting = false;
}
function startPainting() {
    painting = true;
}

function onMouseDown(event) {
    painting = true;

}

/*마우스 움직임 감지 */
if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

