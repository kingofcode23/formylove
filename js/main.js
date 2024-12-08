const nhac= new Audio('./sound/sound.mp3');
$(document).ready(function() {
    // process bar
    setTimeout(function() {
        firstQuestion();
        $('.spinner').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    }, 600);
})

function init(){
    $('#title').text(CONFIG.title)
    $('#desc').text(CONFIG.desc)
    $('#yes').text(CONFIG.btnYes)
    $('#no').text(CONFIG.btnNo)
    $('#reply').text(CONFIG.btnReply)
}

function firstQuestion(){
    $('.content').hide();
    Swal.fire({
        title: CONFIG.introTitle,
        text: CONFIG.introDesc,

        // 2. Ảnh ở câu hỏi đầu tiên
        imageUrl: 'data:image/jpeg;base64,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',
        imageWidth: 300,
        imageHeight: 300,
        background: '#fff url("data:image/jpeg;base64,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")',
        imageAlt: 'Custom image',
        confirmButtonText: CONFIG.btnIntro
      }).then(function(){
        // Sau khi bấm nút xác nhận, phát nhạc
        //const nhac = new Audio('./sound/sound.mp3'); // Đảm bảo rằng đường dẫn âm thanh đúng
        nhac.play().then(() => {
          console.log("Nhạc đã phát!");
        }).catch((error) => {
          console.error("Lỗi khi phát âm thanh:", error);
        });

        $('.content').show(200);
      });
}


 // switch button position
 function switchButton() {
    var audio = new Audio('sound/duck.mp3');
    audio.play();
    var leftNo = $('#no').css("left");
    var topNO = $('#no').css("top");
    var leftY = $('#yes').css("left");
    var topY = $('#yes').css("top");
    $('#no').css("left", leftY);
    $('#no').css("top", topY);
    $('#yes').css("left", leftNo);
    $('#yes').css("top", topNO);
}

function moveButton() {
    var audio = new Audio('sound/Swish1.mp3');
    audio.play();
    var x = Math.random() * ($(window).width() - $('#no').width()) * 0.9 ;
    var y = Math.random() * ($(window).height() - $('#no').height()) * 0.9;
    var left = x + 'px';
    var top = y + 'px';
    $('#no').css("left", left);
    $('#no').css("top", top);
}

init()

var n = 0;
$('#no').mousemove(function() {
    if (n < 1)
        switchButton();
    if (n > 1)
        moveButton();
    n++;
});
$('#no').click(() => {
    if (screen.width>=900)
        switchButton();
})

// generate text in input
function textGenerate() {
    var n = "";
    var text = " " + CONFIG.reply;
    var a = Array.from(text);
    var textVal = $('#txtReason').val() ? $('#txtReason').val() : "";
    var count = textVal.length;
    if (count > 0) {
        for (let i = 1; i <= count; i++) {
            n = n + a[i];
            if (i == text.length + 1) {
                $('#txtReason').val("");
                n = "";
                break;
            }
        }
    }
    $('#txtReason').val(n);
    setTimeout("textGenerate()", 1);
}

// show popup
$('#yes').click(function() {
    var audio = new Audio('sound/tick.mp3');
    audio.play();
    Swal.fire({
        title: CONFIG.question,
        html: true,
        width: 900,
        padding: '3em',
        html: "<input type='text' class='form-control' id='txtReason' onmousemove=textGenerate()  placeholder='" + CONFIG.reasonPlaceholder + "'>",
        background: ' url("data:image/jpeg;base64,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")',
        backdrop: `
              rgba(0,0,123,0.4)
              url("https://media0.giphy.com/media/KztT2c4u8mYYUiMKdJ/giphy.gif?cid=6c09b9528mx66ltfg77rfjq58pq46u9ovzqrvya62qti5t0s&ep=v1_gifs_search&rid=giphy.gif&ct=g")
              left top           
              no-repeat
            `,
        confirmButtonColor: '#75bfb2',
        confirmButtonColor: '#f2a7aca',
        confirmButtonText: CONFIG.btnReply
    }).then((result) => {
        if (result.value) {
            nhac.pause();
            nhac.currentTime = 0;
            var audio = new Audio('sound/ctay.mp3');
            audio.play();
            Swal.fire({
                width: 900, // Độ rộng của hộp thoại
                confirmButtonText: CONFIG.btnAccept,  // Sử dụng CONFIG.btnAccept làm văn bản cho nút "Confirm"
                background: '#fff url("")', // Có thể tùy chỉnh background của hộp thoại
                title: CONFIG.mess,  // Tiêu đề của hộp thoại
                text: CONFIG.messDesc,  // Mô tả thông báo
                confirmButtonColor: '#75bfb2',  // Màu của nút xác nhận
            }).then((result) => {
                // Khi người dùng đóng hộp thoại hoặc bấm vào nút "Confirm"
                if (result.isConfirmed) {
                    // Nếu người dùng bấm vào nút "Confirm"
                    window.location.href = 'https://www.facebook.com/hoang.luong.271';  // Mở trang Facebook của bạn
                }
            })
        }
    })
})
