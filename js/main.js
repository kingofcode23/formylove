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
}

function firstQuestion(){
    $('.content').hide();
    Swal.fire({
        title: CONFIG.introTitle,
        text: CONFIG.introDesc,

        // 2. Ảnh ở câu hỏi đầu tiên
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm_u8dnIJULMcFPrn3lXmYGoV0Dol166_MOw&s',
        imageWidth: 300,
        imageHeight: 300,
        background: '#fff url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsHMSOwXwvBxMqBkXhAmFjC3qscRrdgiZCaw&s")',
        imageAlt: 'Custom image',
        confirmButtonText: CONFIG.btnIntro
      }).then(function(){
        $('.content').show(200);
      })
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
            Swal.fire({
                width: 900,
                confirmButtonText: CONFIG.btnAccept,
                background: '#fff url("data:image/jpeg;base64,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")',
                title: CONFIG.mess,
                text: CONFIG.messDesc,
                confirmButtonColor: '#75bfb2',
                onClose: () => {
                    window.location.href = 'html2.html';
                  }
            })
        }
    })
})

