var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

let height = c.height;
let width = c.width;

// đầu

// Hàm xử lý sự kiện khi click vào canvas
// phải
let eyes1 = {
  currentX: 550,
  currentY: 280,
  targetX: 550,
  targetY: 280,
};

//trái

let eyes2 = {
  currentX: 360,
  currentY: 280,
  targetX: 360,
  targetY: 220,
};

document.addEventListener("mousemove", (e1) => {
  eyes1.targetX = e1.clientX;
  eyes1.targetY = e1.clientY;
  console.log(eyes1);
});

document.addEventListener("mousemove", (e2) => {
  eyes2.targetX = e2.clientX;
  eyes2.targetY = e2.clientY;
  console.log(eyes2);
});

let shellY = 579;
// let shellsmall = 550;
// let shellline = 520;

let isEventHandled = false;
let heart = 519; // Tọa độ y của hình trái tim
// Tọa độ y mục tiêu của hình trái tim

document.addEventListener("click", (e) => {
  if (!isEventHandled) {
    isEventHandled = true;
    heart.targetX1 = e.clientX; // Lấy tọa độ x của sự kiện click
    heart.targetY1 = e.clientY;
    setInterval(() => {
      // trái tim
      ctx.beginPath();
      ctx.moveTo(456, 519);
      ctx.bezierCurveTo(456, 516, 451, 504, 431, 504);
      ctx.bezierCurveTo(401, 504, 401, 541.5, 401, 541.5);
      ctx.bezierCurveTo(401, 559.5, 421, 581.5, 456, 599.5);
      ctx.bezierCurveTo(491, 581.5, 511, 559.5, 511, 541.5);
      ctx.bezierCurveTo(511, 541.5, 511, 504, 481, 504);
      ctx.bezierCurveTo(466, 504, 456, 516, 456, 519);
      ctx.fillStyle = "#FF0000";
      ctx.fill();
      ctx.closePath();
    });
    draw();
  }
});

let fps = 30;
let fpsInterval = 1000 / fps;
let then = Date.now();
let delta = 0;

function draw() {
  setInterval(() => {
    delta = Date.now() - then;
    let fps = 1000 / delta;
    then = Date.now();
    // alpha += 0.5;
    // eyeHeight += Math.sin(alpha) * 10;

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "black";
    ctx.font = "20px Georgia";
    ctx.fillText(`FPS: ${Math.round(fps * 1000) / 1000}`, 10, 50);

    ctx.beginPath();
    // ctx.scale(1, 0.85);
    ctx.arc(450, 300, 150, 0, Math.PI * 2, false);
    ctx.stroke();
    ctx.closePath();

    // tai trái
    ctx.beginPath();
    ctx.moveTo(345, 190);
    ctx.lineTo(350, 150);
    ctx.lineTo(385, 165);
    ctx.fillStyle = " #535C7A";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    // tai phải

    ctx.beginPath();
    ctx.moveTo(520, 166);
    ctx.lineTo(555, 150);
    ctx.lineTo(555, 192);
    ctx.fillStyle = " #535C7A";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    // con mắt trái

    ctx.beginPath();
    ctx.ellipse(360, 280, 25, 35, Math.PI, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();

    ctx.beginPath();
    // ctx.scale(1, 1);
    ctx.arc(eyes2.currentX, eyes2.currentY, 8, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    // mắt phải

    ctx.beginPath();
    ctx.ellipse(550, 280, 25, 35, Math.PI, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();

    ctx.beginPath();
    // ctx.scale(1, 1);
    ctx.arc(eyes1.currentX, eyes1.currentY, 8, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    // mũi
    ctx.beginPath();
    ctx.ellipse(455, 280, 50, 30, Math.PI, 0, 2 * Math.PI);
    ctx.fillStyle = "#623E12";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    //miệng;
    ctx.beginPath();
    ctx.ellipse(455, 360, 40, 55, Math.PI, 0, Math.PI, true);
    ctx.fillStyle = "#4E0D16";

    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    //lưỡi
    ctx.beginPath();
    ctx.ellipse(455, 388, 25, 25, Math.PI, 0, Math.PI, true);
    ctx.fillStyle = "#B6556E";
    ctx.fill();
    // ctx.stroke();
    ctx.closePath();

    //răng phải

    ctx.beginPath();
    ctx.moveTo(483, 370);
    ctx.lineTo(475, 360);
    // ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(490, 360);
    ctx.lineTo(485, 370);
    // ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(487, 364, 2.5, 0, Math.PI * 2, false);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(490, 361, 2.5, 0, Math.PI * 2, false);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(485.5, 361, 2.5, 0, Math.PI * 2, false);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();

    // răng trái

    ctx.beginPath();
    ctx.moveTo(410, 360);
    ctx.lineTo(415, 370);
    // ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(423, 360);
    ctx.lineTo(415, 370);
    // ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(419, 362, 2.5, 0, Math.PI * 2, false);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(423, 362, 2.5, 0, Math.PI * 2, false);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(421, 365, 2.5, 0, Math.PI * 2, false);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();

    // nốt ruồi trái

    ctx.beginPath();
    ctx.arc(390, 330, 1, 0, Math.PI * 2);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(350, 330, 1, 0, Math.PI * 2);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(370, 370, 1, 0, Math.PI * 2);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.stroke();

    // nốt ruồi phải

    ctx.beginPath();
    ctx.arc(520, 330, 1, 0, Math.PI * 2);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(560, 330, 1, 0, Math.PI * 2);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(540, 370, 1, 0, Math.PI * 2);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    // thân trái

    ctx.beginPath();
    ctx.arc(400, 450, 30, 0, Math.PI, true);
    ctx.fillStyle = "#648C9C";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    // bán nguyệt phải
    ctx.beginPath();
    ctx.arc(543, 435, 15, 0, Math.PI * 2, true);
    ctx.fillStyle = "#648C9C";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    // bán nguyệt trái
    ctx.beginPath();
    ctx.arc(363, 437, 15, 0, Math.PI * 2, true);
    ctx.fillStyle = "#648C9C";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(508, 450, 30, 0, Math.PI, true);
    ctx.fillStyle = "#648C9C";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.ellipse(454, 580, 150, 160, Math.PI, 0, Math.PI * 2);
    ctx.fillStyle = "#648C9C";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    // tay phải
    ctx.beginPath();
    ctx.moveTo(585, 500);
    ctx.quadraticCurveTo(580, 580, 550, 580);
    ctx.quadraticCurveTo(550, 390, 589, 520);
    ctx.fillStyle = "white";
    ctx.fill();
    // ctx.stroke();
    ctx.closePath();

    // tay trái

    ctx.beginPath();
    ctx.moveTo(325, 500);
    ctx.quadraticCurveTo(320, 590, 370, 580);
    ctx.quadraticCurveTo(320, 400, 325, 530);
    ctx.fillStyle = "white";
    ctx.fill();
    // ctx.stroke();
    ctx.closePath();

    // vỏ sò
    if (!isEventHandled) {
      // Vẽ vỏ sò khi chưa có sự kiện click
      ctx.beginPath();
      ctx.ellipse(456, 579, 20, 20, Math.PI, 0, Math.PI, true);
      ctx.fillStyle = "#CBB15B";
      ctx.fill();
      ctx.stroke();
      ctx.closePath();

      ctx.beginPath();
      ctx.ellipse(455, 550, 50, 30, Math.PI, 0, 2 * Math.PI);
      ctx.fillStyle = "#CBB15B";
      ctx.fill();
      ctx.stroke();
      ctx.closePath();

      ctx.beginPath();
      ctx.moveTo(470, 520);
      ctx.bezierCurveTo(480, 530, 480, 560, 470, 580);
      ctx.stroke();
      ctx.closePath();

      ctx.beginPath();
      ctx.moveTo(440, 520);
      ctx.bezierCurveTo(430, 530, 430, 560, 440, 580);
      ctx.stroke();
      ctx.closePath();
    } else {
      // Vẽ vỏ sò sau khi có sự kiện click
      if (shellY < 800) {
        shellY += 1;
      } else {
        shellY = 800;
      }
      ctx.beginPath();
      ctx.ellipse(456, shellY, 20, 20, Math.PI, 0, Math.PI, true);
      ctx.fillStyle = "#CBB15B";
      ctx.fill();
      ctx.stroke();
      ctx.closePath();

      ctx.beginPath();
      ctx.ellipse(455, shellY - 29, 50, 30, Math.PI, 0, 2 * Math.PI);
      ctx.fillStyle = "#CBB15B";
      ctx.fill();
      ctx.stroke();
      ctx.closePath();

      ctx.beginPath();
      ctx.moveTo(470, shellY - 59);
      ctx.bezierCurveTo(480, shellY - 49, 480, shellY - 19, 470, shellY - 1);
      ctx.stroke();
      ctx.closePath();

      ctx.beginPath();
      ctx.moveTo(440, shellY - 59);
      ctx.bezierCurveTo(430, shellY - 49, 430, shellY - 19, 440, shellY - 1);
      ctx.stroke();
      ctx.closePath();

      // Vẽ hình trái tim
      ctx.beginPath();
      ctx.moveTo(456, 519);
      ctx.bezierCurveTo(456, 516, 451, 504, 431, 504);
      ctx.bezierCurveTo(401, 504, 401, 541.5, 401, 541.5);
      ctx.bezierCurveTo(401, 559.5, 421, 581.5, 456, 599.5);
      ctx.bezierCurveTo(491, 581.5, 511, 559.5, 511, 541.5);
      ctx.bezierCurveTo(511, 541.5, 511, 504, 481, 504);
      ctx.bezierCurveTo(466, 504, 456, 516, 456, 519);
      ctx.fillStyle = "#FF0000";
      ctx.fill();
      ctx.closePath();
    }

    // chân phải
    ctx.beginPath();
    ctx.ellipse(590, 745, 20, 60, Math.PI / 1.45, 0, Math.PI * 2);
    ctx.fillStyle = " #535C7A";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(642, 776);
    ctx.lineTo(610, 750);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(630, 781);
    ctx.lineTo(590, 750);
    // ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    // chân trái
    ctx.beginPath();
    ctx.ellipse(320, 745, 20, 60, Math.PI / 3, 0, Math.PI * 2);
    ctx.fillStyle = " #535C7A";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(279, 779);
    ctx.lineTo(315, 750);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(269, 773);
    ctx.lineTo(295, 750);
    ctx.stroke();
    ctx.closePath();

    if (eyes1.currentX < eyes1.targetX) {
      eyes1.currentX += 1;
    } else if (eyes1.currentX > eyes1.targetX) {
      eyes1.currentX -= 1;
    }
    if (eyes1.currentX > 565) {
      eyes1.currentX -= 1;
    }
    if (eyes1.currentX < 535) {
      eyes1.currentX += 1;
    }

    if (eyes1.currentY < eyes1.targetY) {
      eyes1.currentY += 1;
    } else if (eyes1.currentY > eyes1.targetY) {
      eyes1.currentY -= 1;
    }
    if (eyes1.currentY > 295) {
      eyes1.currentY -= 1;
    }
    if (eyes1.currentY < 260) {
      eyes1.currentY += 1;
    }

    if (eyes2.currentX < eyes2.targetX) {
      eyes2.currentX += 1;
    } else if (eyes2.currentX > eyes2.targetX) {
      eyes2.currentX -= 1;
    }
    if (eyes2.currentX > 375) {
      eyes2.currentX -= 1;
    }
    if (eyes2.currentX < 345) {
      eyes2.currentX += 1;
    }

    if (eyes2.currentY < eyes2.targetY) {
      eyes2.currentY += 1;
    } else if (eyes2.currentY > eyes2.targetY) {
      eyes2.currentY -= 1;
    }
    if (eyes2.currentY > 295) {
      eyes2.currentY -= 1;
    }
    if (eyes2.currentY < 265) {
      eyes2.currentY += 1;
    }
  }, fpsInterval);
}

draw();
