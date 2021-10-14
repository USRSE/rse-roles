$(function(){

    // Reset list
    $("#reset").click(function(){
        $(".alltags").show();    
    })

    // When clicking a tag, filter to tag
    $('.tag').click(function(event){

        // prevent navigation to role page when clicking tag
        event.preventDefault();
        tag = $(this).attr("data-id")
        $(".alltags").hide();
        $("." + tag).show();
    })
    $('.project.card').hover(
        // trigger when mouse hover
        function(){ $(this).animate({ marginTop: "-=1%", marginBottom: "+=1%" }, 200) },

        // trigger when mouse out
        function(){ $(this).animate({ marginTop: "+=1%", marginBottom: "-=1%" }, 200) }
    );

});
