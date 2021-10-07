var termekek=[];

$(function(){
    
    
    $.ajax(
        {
            url: "jsontermekek.json", 
            success: function(result)
            {
               console.log(result);
               termekek = result.termeklista;
               console.log(termekek);
               megjelenit();

               
            }
        }
      );
    });

    function megjelenit(){;
        $("section").append("<table>");
        $("section table").append("<tr><th>Terméknév</th><th>Leírás</th><th>Készlet</th><th>Ár</th></tr>");
        for (var i = 0; i < termekek.length; i++) {
            $("section table").append("<tr></tr>");
    
            for (var item in termekek[i]) {
                $("section table tr").eq(i + 1).append("<td>" + termekek[i][item] + "</td>");
            }
            
     
        }
        //$("section table tr").append("<button>Módosít</button>");
        
        for (var i = 0; i <= $("section table tr").length; i++) {
            $("section table tr button").eq(i).attr('id', i);
        }
    }
