(function(win,doc){
    function change(){
        doc.documentElement.style.fontSize = 20 * document.documentElement.clientWidth / 375 + 'px';
    };
    win.addEventListener('resize',change,false);
    change();
})(window,document);

Zepto(function($){
    var oSecBg = $('.secBg');
    var oHeader = $('header');
    var oNav = $('nav');

    var aNavL = $('nav li');
    var aNavA = $('nav li a');
    var oSection = $('section');
    var aDiv = oSection.children();

    var aVList = $('.vList li a');

    //*********************背景*************************
    var secH = $(window).height() - oHeader.height() - oNav.height();
    oSecBg.css('height',secH+'px');

    //*********************导航切换*************************
    aNavL.on('click',function () {
        aDiv.hide();
        aDiv.eq($(this).index()).css('display','block');
        aNavL.removeClass('active');
        aNavA.css('color','#fff');
        $(this).addClass('active');
        aNavA.eq($(this).index()).css('color','#62E809');
    });

    //***********************测试点*************************
    aVList.on('click',function () {
        aVList.removeClass('active');
        $(this).addClass('active');
    });



    var beginTest = $('#beginTest');
    var resetTest = $('#resetTest');
    var panelBox = $('.panelBox');
    var testResult = $('.testResult');
    beginTest.on('click',function () {
        panelBox.css('display','none');
        testResult.css('display','block');
    });
    resetTest.on('click',function () {
        testResult.css('display','none');
        panelBox.css('display','block');
    })
});