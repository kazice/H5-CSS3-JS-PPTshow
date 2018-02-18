//1、数据传输
var data = [
    {img:1,h1:'Creative',h2:'DUET'},
    {img:2,h1:'Friendly',h2:'DEVIL'},
    {img:3,h1:'Tranquilent',h2:'COMPATRIOT'},
    {img:4,h1:'Insecure',h2:'HUSSLER'},
    {img:5,h1:'Loving',h2:'REBEL'},
    {img:6,h1:'Passionate',h2:'SEEKER'},
    {img:7,h1:'Crazy',h2:'FRIEND'}
]

//2、通用函数
var g = function(id){
    if(id.substr(0,1) === '.'){
        return document.getElementsByClassName(id.substr(1));
    }
    return document.getElementById(id);
}

//3.添加幻灯片操作（所有幻灯片&对应的按钮）
function addSlider(){
    //3.1 获取模板
    var tp_main = g('temp_main').innerHTML.replace('^\s*','').replace('\s*$','');
    var tp_ctrl = g('temp_ctrl').innerHTML.replace('^\s*','').replace('\s*$','');
    //3.2 定义最终输出HTML的变量
    var out_main = [];
    var out_ctrl = [];
    //3.3 遍历所有的数据，构建最终输出的HTML
    for(i in data){
        var html_main = tp_main.replace(/{{index}}/g,data[i].img).replace(/{{h2}}/g,data[i].h1).replace(/{{h3}}/g,data[i].h2);
        var html_ctrl = tp_ctrl.replace(/{{index}}/g,data[i].img);
        out_main.push(html_main);
        out_ctrl.push(html_ctrl);
    }
    //3.4 定义何时处理幻灯片输出
    g('temp_main').innerHTML = out_main.join('');
    g('temp_ctrl').innerHTML = out_ctrl.join('');
}

//5. 幻灯片切换
function sliderPPT(n){
    //5.1 获得要展现的幻灯排&控制按钮DOM
    var main = g('main_' + n);
    var ctrl = g('ctrl_' + n);
    //5.2 获得所有的幻灯片及控制按钮
    var clear_main = g('.main-i');
    var clear_ctrl = g('.ctrl-i');
    //5.3 清楚他们的active样式
    for(i = 0;i < clear_ctrl.length; i++){
        clear_main[i].className = clear_main[i].className.replace(' main-i_active','');
        clear_ctrl[i].className = clear_ctrl[i].className.replace(' ctrl-i_active','');
    }
    //5.4 添加active样式
    main.className += ' main-i_active';
    ctrl.className += ' ctrl-i_active';
    //7.2 切换时，复制上一张幻灯片到main-bg中
    
    // setTimeout(function(){
    //     g('main-bg').innerHTML = main.innerHTML;
    // },100); 
    }

 
//4、定义何时处理幻灯片输出
window.onload = function () {
    
    //6. 动态调整图片的margin-top
    function movePics(){
        var pics = g('.picture');
        for (let index = 0; index < pics.length; index++) {
        pics[index].style.marginTop = (-1 * pics[index].clientHeight/2) + 'px';    
    }
}

    setTimeout(movePics,10);
    addSlider();
    sliderPPT(1);
}
    

    
