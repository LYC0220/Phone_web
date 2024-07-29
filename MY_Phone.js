// 開關

let start = document.getElementById('start')
let start_hidden = document.getElementById('start_hidden')
start.addEventListener('mousedown',function(){
    start.style.width = '4px'

    if(start_hidden.style.opacity === '0'){
        start_hidden.style.opacity = '1'
    }else{
        start_hidden.style.opacity = '0'
    }

    setTimeout(function(){
        start.style.width = '8px'
    },500)
})

// 手機APP

let lock_number = []

let middle = document.getElementById('middle')
let circle = document.getElementById('circle')
let black = document.getElementsByClassName('black')

let b1 = document.getElementById('b1')
let b2 = document.getElementById('b2')
let b3 = document.getElementById('b3')
let b4 = document.getElementById('b4')
let b5 = document.getElementById('b5')
let b6 = document.getElementById('b6')
let b7 = document.getElementById('b7')
// let b8 = document.getElementById('b8')
// let b9 = document.getElementById('b9')
// let b10 = document.getElementById('b10')

let B1 = document.getElementById('b1_background')
let B2 = document.getElementById('b2_background')
let B3 = document.getElementById('b3_background')
let B4 = document.getElementById('b4_background')
let B5 = document.getElementById('b5_background')
let B6 = document.getElementById('b6_background')
let B7 = document.getElementById('b7_background')

let b6_botton = document.getElementById('b6_botton')

b1.addEventListener('click',function(){
    for(i=0;i<black.length;i++){
        black[i].style.cursor = 'default'
        if(i != 0){
            black[i].style.display = 'none'

        }
    }
    b1.style.width = '100%'
    b1.style.height = '100%'
    b1.style.margin = '0px'
    b1.style.borderRadius = '0px'

    middle.style.widtht = '100%'
    middle.style.height = '100%'

    B1.style.display = 'none'
})

b2.addEventListener('click',function(){
    for(i=0;i<black.length;i++){
        black[i].style.cursor = 'default'
        if(i != 1){
            black[i].style.display = 'none'
        }
    }
    b2.style.width = '100%'
    b2.style.height = '100%'
    b2.style.margin = '0px'
    b2.style.borderRadius = '0px'

    middle.style.widtht = '100%'
    middle.style.height = '100%'

    B2.style.display = 'none'
})

b3.addEventListener('click',function(){
    for(i=0;i<black.length;i++){
        black[i].style.cursor = 'default'
        if(i != 2){
            black[i].style.display = 'none'
        }
    }
    b3.style.width = '100%'
    b3.style.height = '100%'
    b3.style.margin = '0px'
    b3.style.borderRadius = '0px'

    middle.style.widtht = '100%'
    middle.style.height = '100%'

    B3.style.display = 'none'
})

b4.addEventListener('click',function(){
    for(i=0;i<black.length;i++){
        black[i].style.cursor = 'default'
        if(i != 3){
            black[i].style.display = 'none'
        }
    }
    b4.style.width = '100%'
    b4.style.height = '100%'
    b4.style.margin = '0px'
    b4.style.borderRadius = '0px'

    middle.style.widtht = '100%'
    middle.style.height = '100%'

    B4.style.display = 'none'
})

b5.addEventListener('click',function(){
    for(i=0;i<black.length;i++){
        black[i].style.cursor = 'default'
        if(i != 4){
            black[i].style.display = 'none'
        }
    }
    b5.style.width = '100%'
    b5.style.height = '100%'
    b5.style.margin = '0px'
    b5.style.borderRadius = '0px'

    middle.style.widtht = '100%'
    middle.style.height = '100%'

    B5.style.display = 'none'
})

b6.addEventListener('click',function(){
    for(i=0;i<black.length;i++){
        black[i].style.cursor = 'default'
        if(i != 5){
            black[i].style.display = 'none'
        }
    }
    b6.style.width = '100%'
    b6.style.height = '100%'
    b6.style.margin = '0px'
    b6.style.borderRadius = '0px'
    b6_botton.style.display = ''

    middle.style.widtht = '100%'
    middle.style.height = '100%'

    B6.style.display = 'none'
})

b7.addEventListener('click',function(){
    for(i=0;i<black.length;i++){
        black[i].style.cursor = 'default'
        if(i != 6){
            black[i].style.display = 'none'
        }
    }
    b7.style.width = '100%'
    b7.style.height = '100%'
    b7.style.margin = '0px'
    b7.style.borderRadius = '0px'

    middle.style.widtht = '100%'
    middle.style.height = '100%'

    B7.style.display = 'none'
})

// b8.addEventListener('click',function(){
//     for(i=0;i<black.length;i++){
//         black[i].style.cursor = 'default'
//         if(i != 7){
//             black[i].style.display = 'none'
//         }
//     }
//     b8.style.width = '100%'
//     b8.style.height = '100%'
//     b8.style.margin = '0px'
//     b8.style.borderRadius = '0px'

//     middle.style.widtht = '100%'
//     middle.style.height = '100%'
// })

// b9.addEventListener('click',function(){
//     for(i=0;i<black.length;i++){
//         black[i].style.cursor = 'default'
//         if(i != 8){
//             black[i].style.display = 'none'
//         }
//     }
//     b9.style.width = '100%'
//     b9.style.height = '100%'
//     b9.style.margin = '0px'
//     b9.style.borderRadius = '0px'

//     middle.style.widtht = '100%'
//     middle.style.height = '100%'
// })

// b10.addEventListener('click',function(){
//     for(i=0;i<black.length;i++){
//         black[i].style.cursor = 'default'
//         if(i != 9){
//             black[i].style.display = 'none'
//         }
//     }
//     b10.style.width = '100%'
//     b10.style.height = '100%'
//     b10.style.margin = '0px'
//     b10.style.borderRadius = '0px'

//     middle.style.widtht = '100%'
//     middle.style.height = '100%'
// })

// b11.addEventListener('click',function(){
//     for(i=0;i<black.length;i++){
//         black[i].style.cursor = 'default'
//         if(i != 10){
//             black[i].style.display = 'none'
//         }
//     }
//     b11.style.width = '100%'
//     b11.style.height = '100%'
//     b11.style.margin = '0px'
//     b11.style.borderRadius = '0px'

//     middle.style.widtht = '100%'
//     middle.style.height = '100%'
// })

// b12.addEventListener('click',function(){
//     for(i=0;i<black.length;i++){
//         black[i].style.cursor = 'default'
//         if(i != 11){
//             black[i].style.display = 'none'
//         }
//     }
//     b12.style.width = '100%'
//     b12.style.height = '100%'
//     b12.style.margin = '0px'
//     b12.style.borderRadius = '0px'

//     middle.style.widtht = '100%'
//     middle.style.height = '100%'
// })

circle.addEventListener('click',function(){

    for(i=0;i<black.length;i++){
        black[i].style.display = ''
        black[i].style.width = '100px'
        black[i].style.height = '100px'
        black[i].style.margin = '10px'
        black[i].style.marginBottom = '30px'
        black[i].style.borderRadius = '30px'
        black[i].style.cursor = 'pointer'

        middle.style.widtht = '100%'
        middle.style.height = '80%'

        if(i >= 8){
            black[i].style.marginBottom = '10px'
        }
    }
    
    B1.style.display = ''
    B2.style.display = ''
    B3.style.display = ''
    B4.style.display = ''
    B5.style.display = ''
    B6.style.display = ''
    B7.style.display = ''

    b6_botton.style.display = 'none'

    let b7_lock = document.getElementById('b7_lock')
    b7_lock.style.height = '100%'
    lock_number = []
    circle_number();
})

// 時間

let hr = document.getElementById('hr')
let min = document.getElementById('min')

let b2_hour = document.getElementById('b2_hr')
let b2_min = document.getElementById('b2_min')
let b2_sec = document.getElementById('b2_sec')

let b8_dateB = document.getElementById('b8_dateB')
let b8_monthB = document.getElementById('b8_monthB')

setInterval(function(){
    let time = new Date();

    hr.innerHTML = (time.getHours()<10?"0":"") + time.getHours();
    min.innerHTML = (time.getMinutes()<10?"0":"") + time.getMinutes();
    
    let hh = time.getHours()*30;
    let mm = time.getMinutes()*6;
    let ss = time.getSeconds()*6;


    b2_hour.style.transform = `rotate(${(hh+(mm/12))}deg)`;
    b2_min.style.transform = `rotate(${mm}deg)`;
    b2_sec.style.transform = `rotate(${ss}deg)`;

    switch(time.getDay()){
        case 1:
            b8_dateB.innerHTML = '週一'
            break
        case 2:
            b8_dateB.innerHTML = '週二'
            break
        case 3:
            b8_dateB.innerHTML = '週三'
            break
        case 4:
            b8_dateB.innerHTML = '週四'
            break
        case 5:
            b8_dateB.innerHTML = '週五'
            break
        case 6:
            b8_dateB.innerHTML = '週六'
            break
        case 7:
            b8_dateB.innerHTML = '週日'
            break
    }


    b8_monthB.innerHTML = time.getDate()

},1000)

// 頂部滑動

let hidden = document.getElementById('hidden')

let isResizing = false;
let startY, startHeight;

hidden.addEventListener('mousedown',(e)=>{

    isResizing = true;
    startY = e.clientY
    startHeight = parseInt(document.defaultView.getComputedStyle(hidden).height, 10);

})

hidden.addEventListener('mousemove',(e)=>{

    if (isResizing) {
        let height = startHeight + e.clientY - startY;
        hidden.style.height = height + 'px';
    }

});

hidden.addEventListener('mouseup', () => {

    if(hidden.style.height < '384px' ){
        hidden.style.height = '0%'
    }
    else if(hidden.style.height > '384px' ){
        hidden.style.height = '768px'
    }
  
    isResizing = false;

  });

// 計算機

let _1 = document.getElementById('_1')
let _2 = document.getElementById('_2')
let _3 = document.getElementById('_3')
let _4 = document.getElementById('_4')
let _5 = document.getElementById('_5')
let _6 = document.getElementById('_6')
let _7 = document.getElementById('_7')
let _8 = document.getElementById('_8')
let _9 = document.getElementById('_9')
let _0 = document.getElementById('_0')

let AC = document.getElementById('AC')
let _abs = document.getElementById('_abs')
let _remainder = document.getElementById('_remainder')
let _division = document.getElementById('_division')
let _multiplication = document.getElementById('_multiplication')
let _reduce = document.getElementById('_reduce')
let _add = document.getElementById('_add')
let _return = document.getElementById('_return')
let _dot = document.getElementById('_dot')

let NUMBER = ''
let NUMBER_ = ''
let NUMBER__ = ''

let ans = document.getElementById('ans')
let open = true
let math = ''

roundTo = function( num, decimal ) { 
    return Math.round( ( num + Number.EPSILON ) * Math.pow( 10, decimal ) ) / Math.pow( 10, decimal ); 
}


_1.addEventListener('click',function(){

    if(open){
        NUMBER += '1';
        ans.innerHTML = NUMBER
    }else{
        NUMBER_ += '1'
        ans.innerHTML = NUMBER_
    }

})
_2.addEventListener('click',function(){

    if(open){
        NUMBER += '2';
        ans.innerHTML = NUMBER
    }else{
        NUMBER_ += '2'
        ans.innerHTML = NUMBER_
    }

})
_3.addEventListener('click',function(){

    if(open){
        NUMBER += '3';
        ans.innerHTML = NUMBER
    }else{
        NUMBER_ += '3'
        ans.innerHTML = NUMBER_
    }
    
})
_4.addEventListener('click',function(){

    if(open){
        NUMBER += '4';
        ans.innerHTML = NUMBER
    }else{
        NUMBER_ += '4'
        ans.innerHTML = NUMBER_
    }
    
})
_5.addEventListener('click',function(){

    if(open){
        NUMBER += '5';
        ans.innerHTML = NUMBER
    }else{
        NUMBER_ += '5'
        ans.innerHTML = NUMBER_
    }
    
})
_6.addEventListener('click',function(){

    if(open){
        NUMBER += '6';
        ans.innerHTML = NUMBER
    }else{
        NUMBER_ += '6'
        ans.innerHTML = NUMBER_
    }
    
})
_7.addEventListener('click',function(){

    if(open){
        NUMBER += '7';
        ans.innerHTML = NUMBER
    }else{
        NUMBER_ += '7'
        ans.innerHTML = NUMBER_
    }
    
})
_8.addEventListener('click',function(){

    if(open){
        NUMBER += '8';
        ans.innerHTML = NUMBER
    }else{
        NUMBER_ += '8'
        ans.innerHTML = NUMBER_
    }
    
})
_9.addEventListener('click',function(){

    if(open){
        NUMBER += '9';
        ans.innerHTML = NUMBER
    }else{
        NUMBER_ += '9'
        ans.innerHTML = NUMBER_
    }
    
})
_0.addEventListener('click',function(){

    if(open){
        NUMBER += '0';
        ans.innerHTML = NUMBER
    }else{
        NUMBER_ += '0'
        ans.innerHTML = NUMBER_
    }

})

_dot.addEventListener('click',function(){

    if(open){
        NUMBER += '.';
        ans.innerHTML = NUMBER
    }else{
        NUMBER_ += '.'
        ans.innerHTML = NUMBER_
    }

})

AC.addEventListener('click',function(){
    ans.innerHTML = '0'
    NUMBER = ''
    NUMBER_ = ''
    open = true
    math = ''
})

_abs.addEventListener('click',function(){
    
    if(open){

        if(NUMBER > 0){
            NUMBER = '-' + NUMBER
            ans.innerHTML = NUMBER
        }else{
            NUMBER = Math.abs(NUMBER)
            ans.innerHTML = NUMBER
        }

    }else{

        if(NUMBER_ > 0){
            NUMBER_ = '-' + NUMBER_
            ans.innerHTML = NUMBER_
        }else{
            NUMBER_ = Math.abs(NUMBER_)
            ans.innerHTML = NUMBER_
        }

    }

})

_add.addEventListener('click',function(){

    if(open){
        math = 'add'
        open = false
        ans.innerHTML = ''
    }else{
        math = 'add'
        ans.innerHTML = ''
        NUMBER_ = ''
    }

})

_reduce.addEventListener('click',function(){

    if(open){
        math = 'reduce'
        open = false
        ans.innerHTML = ''
    }else{
        math = 'reduce'
        ans.innerHTML = ''
        NUMBER_ = ''
    }

})

_multiplication.addEventListener('click',function(){

    if(open){
        math = 'multiplication'
        open = false
        ans.innerHTML = ''
    }else{
        math = 'multiplication'
        ans.innerHTML = ''
        NUMBER_ = ''
    }

})

_division.addEventListener('click',function(){

    if(open){
        math = 'division'
        open = false
        ans.innerHTML = ''
    }else{
        math = 'division'
        ans.innerHTML = ''
        NUMBER_ = ''
    }

})

_return.addEventListener('click',function(){
    
    if(open){
        
    }else{  

        if(math === 'add'){
            ans.innerHTML = roundTo((parseFloat(NUMBER) + parseFloat(NUMBER_)),5) ;
            NUMBER = roundTo((parseFloat(NUMBER) + parseFloat(NUMBER_)),5);
        }else if(math === 'reduce'){
            ans.innerHTML = roundTo((parseFloat(NUMBER) - parseFloat(NUMBER_)),5) ;
            NUMBER = roundTo((parseFloat(NUMBER) - parseFloat(NUMBER_)),5);
        }else if(math === 'multiplication'){
            ans.innerHTML = roundTo((parseFloat(NUMBER) * parseFloat(NUMBER_)),5) ;
            NUMBER = roundTo((parseFloat(NUMBER) * parseFloat(NUMBER_)),5);
        }else if(math === 'division'){
            ans.innerHTML = roundTo((parseFloat(NUMBER) / parseFloat(NUMBER_)),5) ;
            NUMBER = roundTo((parseFloat(NUMBER) / parseFloat(NUMBER_)),5) ;
        }

        
    }
})

// YOUTUBE

let b3_2_box = document.getElementsByClassName('b3_2_box')

let b3_movie = document.getElementsByTagName('iframe')
let b3_p1 = document.getElementById('b3_p1')
let b3_p2 = document.getElementById('b3_p2')

b3_2_box[0].addEventListener('click',function(){

    b3_2_box[0].style.background = 'rgb(212, 212, 212)'
    b3_2_box[0].style.color = 'black'

    for(i=0;i<6;i++){
        if(i!=0){
            b3_2_box[i].style.background = 'rgb(26, 26, 26)'
            b3_2_box[i].style.color = 'white'
        }
    }

})

b3_2_box[1].addEventListener('click',function(){

    b3_2_box[1].style.background = 'rgb(212, 212, 212)'
    b3_2_box[1].style.color = 'black'

    b3_movie[0].src = 'https://www.youtube.com/embed/KMEiMOJIiCg?si=WXZCSM-6IpEvWCsi'
    b3_movie[1].src = 'https://www.youtube.com/embed/1wjB_pvjxSg?si=-s_MPB_0-a7Nv26Z'
    b3_p1.innerHTML = '2024抖音熱歌🔥 3月第一周抖音上著名的悲伤歌曲🎧 張妙格 - 我期待的不是雪, 總會有人 , 這是你期盼的長大嗎,一直很安靜, 承桓 - 我會等, 任夏 - 我要他'
    b3_p2.innerHTML = '三月熱門歌曲最火🔥2024流行歌曲【抖音破億神曲】Tiktok 抖音感動洗腦精選神曲必聽 : 承桓 - 總是會有人 , 也可 - 不如, 小阿七 - 從前說 , 盧盧快閉嘴 - 字字句句..'


    for(i=0;i<6;i++){
        if(i!=1){
            b3_2_box[i].style.background = 'rgb(26, 26, 26)'
            b3_2_box[i].style.color = 'white'
        }
    }
    
})

b3_2_box[2].addEventListener('click',function(){

    b3_2_box[2].style.background = 'rgb(212, 212, 212)'
    b3_2_box[2].style.color = 'black'

    b3_movie[0].src = 'https://www.youtube.com/embed/zYj_juMfOLw?si=XYCHziqih33phgtv'
    b3_movie[1].src = 'https://www.youtube.com/embed/sA0qrPOMy2Y?si=AWjD0xsDZyLQGXzI'
    b3_p1.innerHTML = 'Minecraft relaxing music ambience and campfire sounds to study and relax to'
    b3_p2.innerHTML = 'calm nintendo video game music for studying, sleep, work while its raining'


    for(i=0;i<6;i++){
        if(i!=2){
            b3_2_box[i].style.background = 'rgb(26, 26, 26)'
            b3_2_box[i].style.color = 'white'
        }
    }
    
})

b3_2_box[3].addEventListener('click',function(){

    b3_2_box[3].style.background = 'rgb(212, 212, 212)'
    b3_2_box[3].style.color = 'black'

    b3_movie[0].src = 'https://www.youtube.com/embed/FvFT3vJUewA?si=FSB1X3DIFeYRyRZ4'
    b3_movie[1].src = 'https://www.youtube.com/embed/0pIxQAwUeWE?si=jxca-hLYrRP12QgJ'
    b3_p1.innerHTML = '# 005 | Cyber Travel | NeuroMusic LoFi | Created with AI'
    b3_p2.innerHTML = '🚘 [2 Hours]【R&B Pop Chill Music】Chill Late Night Drive Chinese Playlist 深夜开车中文歌曲 (TC) | 二小时 | 2時間'

    for(i=0;i<6;i++){
        if(i!=3){
            b3_2_box[i].style.background = 'rgb(26, 26, 26)'
            b3_2_box[i].style.color = 'white'
        }
    }
    
})

b3_2_box[4].addEventListener('click',function(){

    b3_2_box[4].style.background = 'rgb(212, 212, 212)'
    b3_2_box[4].style.color = 'black'

    for(i=0;i<6;i++){
        if(i!=4){
            b3_2_box[i].style.background = 'rgb(26, 26, 26)'
            b3_2_box[i].style.color = 'white'
        }
    }
    
})

b3_2_box[5].addEventListener('click',function(){

    b3_2_box[5].style.background = 'rgb(212, 212, 212)'
    b3_2_box[5].style.color = 'black'

    for(i=0;i<6;i++){
        if(i!=5){
            b3_2_box[i].style.background = 'rgb(26, 26, 26)'
            b3_2_box[i].style.color = 'white'
        }
    }
    
})

// sitting

let b4_sbox_toggle_circle1 = document.getElementById('b4_sbox_toggle_circle1')
let b4_sbox_toggle_circle2 = document.getElementById('b4_sbox_toggle_circle2')
let up_b = document.getElementById('up_b')
let up_i1 = document.getElementById('up_i1')
let up_i2 = document.getElementById('up_i2')


b4_sbox_toggle_circle1.addEventListener('click',function(){

    if(b4_sbox_toggle_circle1.style.left === '0px'){
        b4_sbox_toggle_circle1.style.left = '45px'
        b4_sbox_toggle_circle2.style.width = '80px'
        up_b.style.visibility = 'hidden'
        up_i1.style.display = 'none'
        up_i2.style.display = ''
    }else{
        b4_sbox_toggle_circle1.style.left = '0px'
        b4_sbox_toggle_circle2.style.width = '35px'
        up_b.style.visibility = ''
        up_i1.style.display = ''
        up_i2.style.display = 'none'
    }

})

// sellpfone

let b5_box2_top1 = document.getElementById('b5_box2_top1')
let b5_box2_top3 = document.getElementById('b5_box2_top3')
let b5_opeen = false

let b5_box2_1 = document.getElementsByClassName('b5_box2_1')
let b5_box2_2 = document.getElementsByClassName('b5_box2_2')
let b5_box2_3 = document.getElementsByClassName('b5_box2_3')

b5_box2_top3.addEventListener('click',function(){
    if(b5_opeen){
        for(i=1;i<b5_box2_3.length;i++){
            b5_box2_2[i].style.transform = 'translateX(0px)'
            b5_box2_3[i].style.display = ''
            b5_box2_1[i].style.visibility = 'hidden'
        }
        b5_box2_top1.style.visibility = 'hidden'
        b5_opeen = false
    }else{
        for(i=1;i<b5_box2_3.length;i++){
            b5_box2_2[i].style.transform = 'translateX(40px)'
            b5_box2_3[i].style.display = 'none'
            b5_box2_1[i].style.visibility = 'visible'
        }
        b5_box2_top1.style.visibility = 'visible'
        b5_opeen = true
    }
})

let b5_botton_box1 = document.getElementById('b5_botton_box1')
let b5_botton_box2 = document.getElementById('b5_botton_box2')
let b5_botton_box3 = document.getElementById('b5_botton_box3')
let b5_botton_box4 = document.getElementById('b5_botton_box4')
let b5_botton_box5 = document.getElementById('b5_botton_box5')

let b5_top_box1 = document.getElementById('b5_top_box1')
let b5_top_box2 = document.getElementById('b5_top_box2')
let b5_top_box3 = document.getElementById('b5_top_box3')
let b5_top_box4 = document.getElementById('b5_top_box4')

let b5_bb = document.getElementsByClassName('b5_bb')
let b5_bb2 = document.getElementsByClassName('b5_bb2')

b5_botton_box1.addEventListener('click',function(){
    
    b5_top_box1.style.display = ''
    b5_top_box2.style.display = 'none'
    b5_top_box3.style.display = 'none'
    b5_top_box4.style.display = 'none'

    for(i=0;i<b5_bb.length;i++){
        if(i === 0){
            b5_bb[0].style.color = '#0072b4'
            b5_bb2[0].style.color = '#0072b4'
        }else{
            b5_bb[i].style.color = 'rgb(124, 124, 124)'
            b5_bb2[i].style.color = 'rgb(124, 124, 124)'
        }
    }


})

b5_botton_box2.addEventListener('click',function(){
    
    b5_top_box1.style.display = 'none'
    b5_top_box2.style.display = ''
    b5_top_box3.style.display = 'none'
    b5_top_box4.style.display = 'none'

    for(i=0;i<b5_bb.length;i++){
        if(i === 1){
            b5_bb[1].style.color = '#0072b4'
            b5_bb2[1].style.color = '#0072b4'
        }else{
            b5_bb[i].style.color = 'rgb(124, 124, 124)'
            b5_bb2[i].style.color = 'rgb(124, 124, 124)'
        }
    }
})

b5_botton_box3.addEventListener('click',function(){
    
    b5_top_box1.style.display = 'none'
    b5_top_box2.style.display = 'none'
    b5_top_box3.style.display = ''
    b5_top_box4.style.display = 'none'

    for(i=0;i<b5_bb.length;i++){
        if(i === 2){
            b5_bb[2].style.color = '#0072b4'
            b5_bb2[2].style.color = '#0072b4'
        }else{
            b5_bb[i].style.color = 'rgb(124, 124, 124)'
            b5_bb2[i].style.color = 'rgb(124, 124, 124)'
        }
    }
})

b5_botton_box4.addEventListener('click',function(){
    
    b5_top_box1.style.display = 'none'
    b5_top_box2.style.display = 'none'
    b5_top_box3.style.display = 'none'
    b5_top_box4.style.display = ''

    for(i=0;i<b5_bb.length;i++){
        if(i === 3){
            b5_bb[3].style.color = '#0072b4'
            b5_bb2[3].style.color = '#0072b4'
        }else{
            b5_bb[i].style.color = 'rgb(124, 124, 124)'
            b5_bb2[i].style.color = 'rgb(124, 124, 124)'
        }
    }
})

function phone(x){  
    let b5_top_box_box4_none = document.getElementById('b5_top_box_box4_none');
    let b5_top_box_box4_title = document.getElementById('b5_top_box_box4_title');

    if(x === 11){
        b5_top_box_box4_title.innerHTML = ''
        b5_top_box_box4_none.style.top = '10px'
        b5_top_box_box4_none.innerHTML = `<b>無法撥通此電話號碼<b>`
        setTimeout(function(){
            b5_top_box_box4_none.style = '-100px'
        },2000)
    }else{
        b5_top_box_box4_title.innerHTML = b5_top_box_box4_title.innerHTML + x;
    }
    
}

// IG

var isScrolling = false;

document.getElementById("b6_circle_box").addEventListener("mousedown", function(event) {
  isScrolling = true;
  this.style.cursor = "grabbing";
  this.style.userSelect = "none";
  this.scrollX = event.clientX;
});

document.addEventListener("mouseup", function() {
  isScrolling = false;
  document.getElementById("b6_circle_box").style.cursor = "default";
  document.getElementById("b6_circle_box").style.userSelect = "auto";
});

document.getElementById("b6_circle_box").addEventListener("mousemove", function(event) {
  if (isScrolling) {
    this.scrollBy((event.clientX - this.scrollX) * -1, 0); // Adjusted for horizontal scrolling
    this.scrollX = event.clientX;
  }
});

let b6_middle_img = document.getElementById('b6_middle_img')

let b6_middle_textbox_circle1 = document.getElementById('b6_middle_textbox_circle1')
let b6_middle_textbox_circle2 = document.getElementById('b6_middle_textbox_circle2')
let b6_middle_textbox_circle3 = document.getElementById('b6_middle_textbox_circle3')
let b6_middle_textbox_circle4 = document.getElementById('b6_middle_textbox_circle4')

b6_middle_textbox_circle1.addEventListener('click',function(){
    b6_middle_img.scrollLeft = 0;
    b6_middle_textbox_circle1.style.backgroundColor = 'rgb(66, 131, 250)'
    b6_middle_textbox_circle2.style.backgroundColor = 'rgb(82, 82, 82)'
    b6_middle_textbox_circle3.style.backgroundColor = 'rgb(82, 82, 82)'
    b6_middle_textbox_circle4.style.backgroundColor = 'rgb(82, 82, 82)'
})

b6_middle_textbox_circle2.addEventListener('click',function(){
    b6_middle_img.scrollLeft = 568;
    b6_middle_textbox_circle1.style.backgroundColor = 'rgb(82, 82, 82)'
    b6_middle_textbox_circle2.style.backgroundColor = 'rgb(66, 131, 250)'
    b6_middle_textbox_circle3.style.backgroundColor = 'rgb(82, 82, 82)'
    b6_middle_textbox_circle4.style.backgroundColor = 'rgb(82, 82, 82)'
})

b6_middle_textbox_circle3.addEventListener('click',function(){
    b6_middle_img.scrollLeft = 1136;
    b6_middle_textbox_circle1.style.backgroundColor = 'rgb(82, 82, 82)'
    b6_middle_textbox_circle2.style.backgroundColor = 'rgb(82, 82, 82)'
    b6_middle_textbox_circle3.style.backgroundColor = 'rgb(66, 131, 250)'
    b6_middle_textbox_circle4.style.backgroundColor = 'rgb(82, 82, 82)'
})

b6_middle_textbox_circle4.addEventListener('click',function(){
    b6_middle_img.scrollLeft = 1704;
    b6_middle_textbox_circle1.style.backgroundColor = 'rgb(82, 82, 82)'
    b6_middle_textbox_circle2.style.backgroundColor = 'rgb(82, 82, 82)'
    b6_middle_textbox_circle3.style.backgroundColor = 'rgb(82, 82, 82)'
    b6_middle_textbox_circle4.style.backgroundColor = 'rgb(66, 131, 250)'
})

// Line

let b7_lock_number_circle1 = document.getElementById('b7_lock_number_circle1')
let b7_lock_number_circle2 = document.getElementById('b7_lock_number_circle2')
let b7_lock_number_circle3 = document.getElementById('b7_lock_number_circle3')
let b7_lock_number_circle4 = document.getElementById('b7_lock_number_circle4')

let b7_lock_number_box1 = document.getElementById('b7_lock_number_box1')
let b7_lock_number_box2 = document.getElementById('b7_lock_number_box2')
let b7_lock_number_box3 = document.getElementById('b7_lock_number_box3')
let b7_lock_number_box4 = document.getElementById('b7_lock_number_box4')
let b7_lock_number_box5 = document.getElementById('b7_lock_number_box5')
let b7_lock_number_box6 = document.getElementById('b7_lock_number_box6')
let b7_lock_number_box7 = document.getElementById('b7_lock_number_box7')
let b7_lock_number_box8 = document.getElementById('b7_lock_number_box8')
let b7_lock_number_box9 = document.getElementById('b7_lock_number_box9')
let b7_lock_number_box0 = document.getElementById('b7_lock_number_box0')

let b7_lock_number_box = document.getElementById('b7_lock_number_box')

function check_number(){
    if(lock_number.length === 4){
        let number = ''
        lock_number.forEach((x)=>{
            number += x
        })
        if(number === '0000'){
            let b7_lock = document.getElementById('b7_lock')
            b7_lock.style.height = '0px'
        }else{
            let b7_lock_text = document.getElementById('b7_lock_text')
            b7_lock_text.innerHTML = '密碼輸入錯誤。'
            lock_number = []
            circle_number()
        }
    }
}

function circle_number(){
    switch(lock_number.length){
        case 0:
            b7_lock_number_circle1.style.backgroundColor = 'rgb(90, 90, 90)'
            b7_lock_number_circle2.style.backgroundColor = 'rgb(90, 90, 90)'
            b7_lock_number_circle3.style.backgroundColor = 'rgb(90, 90, 90)'
            b7_lock_number_circle4.style.backgroundColor = 'rgb(90, 90, 90)'
            break
        case 1:
            b7_lock_number_circle1.style.backgroundColor = 'white'
            b7_lock_number_circle2.style.backgroundColor = 'rgb(90, 90, 90)'
            b7_lock_number_circle3.style.backgroundColor = 'rgb(90, 90, 90)'
            b7_lock_number_circle4.style.backgroundColor = 'rgb(90, 90, 90)'
            break
        case 2:
            b7_lock_number_circle1.style.backgroundColor = 'white'
            b7_lock_number_circle2.style.backgroundColor = 'white'
            b7_lock_number_circle3.style.backgroundColor = 'rgb(90, 90, 90)'
            b7_lock_number_circle4.style.backgroundColor = 'rgb(90, 90, 90)'
            break
        case 3:
            b7_lock_number_circle1.style.backgroundColor = 'white'
            b7_lock_number_circle2.style.backgroundColor = 'white'
            b7_lock_number_circle3.style.backgroundColor = 'white'
            b7_lock_number_circle4.style.backgroundColor = 'rgb(90, 90, 90)'
            break
        case 4:
            b7_lock_number_circle1.style.backgroundColor = 'white'
            b7_lock_number_circle2.style.backgroundColor = 'white'
            b7_lock_number_circle3.style.backgroundColor = 'white'
            b7_lock_number_circle4.style.backgroundColor = 'white'
            break
    }
    check_number()
}

b7_lock_number_box1.addEventListener('click',()=>{
    if(lock_number.length<4){
        lock_number.push(1)
    }
    circle_number()
})
b7_lock_number_box2.addEventListener('click',()=>{
    if(lock_number.length<4){
        lock_number.push(2)
    }
    circle_number()
})
b7_lock_number_box3.addEventListener('click',()=>{
    if(lock_number.length<4){
        lock_number.push(3)
    }
    circle_number()
})
b7_lock_number_box4.addEventListener('click',()=>{
    if(lock_number.length<4){
        lock_number.push(4)
    }
    circle_number()
})
b7_lock_number_box5.addEventListener('click',()=>{
    if(lock_number.length<4){
        lock_number.push(5)
    }
    circle_number()
})
b7_lock_number_box6.addEventListener('click',()=>{
    if(lock_number.length<4){
        lock_number.push(6)
    }
    circle_number()
})
b7_lock_number_box7.addEventListener('click',()=>{
    if(lock_number.length<4){
        lock_number.push(7)
    }
    circle_number()
})
b7_lock_number_box8.addEventListener('click',()=>{
    if(lock_number.length<4){
        lock_number.push(8)
    }
    circle_number()
})
b7_lock_number_box9.addEventListener('click',()=>{
    if(lock_number.length<4){
        lock_number.push(9)
    }
    circle_number()
})
b7_lock_number_box0.addEventListener('click',()=>{
    if(lock_number.length<4){
        lock_number.push(0)
    }
    circle_number()
})
b7_lock_number_box.addEventListener('click',()=>{
    if(lock_number.length>0){
        lock_number.pop()
        console.log(lock_number)
    }
    circle_number()
})

let b7_send = document.getElementById('b7_send')

b7_send.addEventListener('click',()=>{
    let b7_scanf = document.getElementById('b7_scanf');
    let b7_messeage_textbox = document.querySelector('.b7_messeage_textbox'); // 小錯誤修正

    let text_box = document.createElement('div');
    text_box.classList.add('b7_messeage_text'); // 小錯誤修正
    text_box.innerHTML = `<b>${b7_scanf.value}</b>`;

    b7_messeage_textbox.appendChild(text_box);
    b7_scanf.value = '' 
})

