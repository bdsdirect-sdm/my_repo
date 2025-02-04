$(window).scroll(function(){
    if($(this).scrollTop()>600){
        $('#showdiv').hide(300);
    }
    else{
    $("#showdiv").show(1000);
}
});