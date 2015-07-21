$(document).ready(function(){ 
    $("aside").hide();
    $("#menu").click(function(){
        $("aside").slideToggle('fast');
    });

    $("#showall").click(function(){
        $(".development,.html,.general,.javascript,.jquery,.bootstrap,.prototype, .css").slideDown(1000);
        $("aside").slideUp();
    });  

    $("#css").click(function(){
        $(".development,.html,.general,.javascript,.jquery,.bootstrap,.prototype").slideUp(1000);
        $(".css").slideDown(1000);
        $("aside").slideUp();
    });

    $("#html").click(function(){
        $(".development,.css,.general,.javascript,.jquery,.bootstrap,.prototype").slideUp(1000);
        $(".html").slideDown(1000);
        $("aside").slideUp();
    });

    $("#general").click(function(){
        $("development,.css,.html,.javascript,.jquery,.bootstrap,.prototype").slideUp(1000);
        $(".general").slideDown(1000);
        $("aside").slideUp();
    });

    $("#prototype").click(function(){
        $("development,.css,.html,.javascript,.jquery,.bootstrap,.general").slideUp(1000);
        $(".prototype").slideDown(1000);
        $("aside").slideUp();
    });

    $("#jquery").click(function(){
        $(".development,.css,.html,.javascript,.prototype,.bootstrap,.general").slideUp(1000);
        $(".jquery").slideDown(1000);
        $("aside").slideUp();
    });

    $("#bootstrap").click(function(){
        $(".development,.css,.html,.javascript,.prototype,.jquery,.general").slideUp(1000);
        $(".bootstrap").slideDown(1000);
        $("aside").slideUp();
    });

    $("#javascript").click(function(){
        $(".development,.css,.html,.jquery,.prototype,.bootstrap,.general").slideUp(1000);
        $(".javascript").slideDown(1000);
        $("aside").slideUp();
    });

    $("#development").click(function(){
        $(".javascript,.css,.html,.jquery,.prototype,.bootstrap,.general").slideUp(1000);
        $(".development").slideDown(1000);
        $("aside").slideUp();
    });




   /* $("#ifelsestructure").click(function(){
        $(".whatjavascript,.functionStructure,.variableDeclare,.dayOne,.dayTwo,.dry,.colors,.whatdevelop,.console,.partsDevelop,.whatprime,.greeting,.prototyping,.htmlcss,.nocss").slideUp(1000);
        $(".ifelsestructure").slideDown(1000);
        $("aside").slideUp();
    });

    $("#console").click(function(){
        $(".ifelsestructure,.functionStructure,.variableDeclare,.dayOne,.dayTwo,.dry,.colors,.whatjavascript,.prototyping,.whatdevelop,.partsDevelop,.whatprime,.greeting,.htmlcss,.nocss").slideUp(1000);
        $(".console").slideDown(1000);
        $("aside").slideUp();
    });

    $("#partsDevelop").click(function(){
        $(".ifelsestructure,.functionStructure,.variableDeclare,.dayOne,.dayTwo,.dry,.colors,.nocss,.console,.whatjavascript,.whatdevelop,.whatprime,.greeting,.htmlcss,.prototyping").slideUp(1000);
        $(".partsDevelop").slideDown(1000);
        $("aside").slideUp();
    });*/

    $("#jquery").click(function(){
        $(".functionStructure,.partsDevelop,.dry,.colors,.ifelsestructure,.variableDeclare,.dayOne,.dayTwo,.nocss,.console,.whatjavascript,.whatdevelop,.whatprime,.greeting,.htmlcss,.prototyping").slideUp(1000);
        $(".jquery").slideDown(1000);
        $("aside").slideUp();
    }); 
    $("#objects").click(function(){
        $(".dry,.partsDevelop,.colors,.functionStructure, .variableDeclare, .dayOne,.dayTwo,.ifelsestructure,.nocss,.console,.whatjavascript,.whatdevelop,.whatprime,.greeting,.htmlcss,.prototyping").slideUp(1000);
        $(".objects").slideDown(1000);
        $("aside").slideUp();
    });
   





    
    $("#july").click(function(){
        $(".july").slideDown(1000);
        $("aside").slideUp();
    });
});