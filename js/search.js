$(document).ready(function(){
    $('#search-filter-icon').click(function(){
        $('.filter-cloumn').slideToggle('slow');
    $("input:checkbox").click(function () {
        var $box = $(this); 

        if ($box.is(":checked")) {
     
            var group = "input:checkbox[name='" + $box.attr("name") + "']";
            $(group).prop("checked", false); // نقوم بجعل جميع صناديق التأشير ضمن العمود غير مفعّلة
            $box.prop("checked", true); // تفعيل الصندوق الذي تم الضغط عليه 
        }
    });
    });
});