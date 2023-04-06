$(document).ready(function(){
     $(".button-3").text("Check all answers");
    answers = ["1991", "Nursultan Nazarbayev", "9th", "India","tenge"];
    questions = ["When did Kazakhstan gain independence?","Who was the first president of Kazakhstan?", "What is Kazakhstan's place among the countries of the world in terms of area?", "Which country does Kazakhstan not border with?","What is the national currency of Kazakhstan?"]
    choice_options = [["1998","1991","1989","1992"],["Nursultan Nazarbayev","Kassym-Zhomart Tokayev","Imangali Tasmagambetov","Alikhan Smailov"], ["6th", "2nd", "9th", "12th"],["Russia","China","Kyrgyzstan","India"], ["yuan", "tenge", "dollar", "som"]]



    quizBox = $("#quiz-box");
    
    quizBox.append ("<div class='question'>"); 
    $('.question').append ("<p class='d'> Q1. When did Kazakhstan gain independence? </p>");
    $('.question').append ("<label><input type='radio' name='q1' value='a'>1998</label>")
    $('.question').append ("<label><input type='radio' name='q1' value='a'>1991</label>")
    $('.question').append ("<label><input type='radio' name='q1' value='a'>1989</label>")
    $('.question').append ("<label><input type='radio' name='q1' value='a'>1992</label>")
    
    
    $('.question').append ("<p class='d'> Q2. Who was the first president of Kazakhstan?</p>");
    $('.question').append ("<label><input type='radio' name='q2' value='a'>Nursultan Nazarbayev</label>")
    $('.question').append ("<label><input type='radio' name='q2' value='a'>Kassym-Zhomart Tokayev</label>")
    $('.question').append ("<label><input type='radio' name='q2' value='a'>Imangali Tasmagambetov</label>")
    $('.question').append ("<label><input type='radio' name='q2' value='a'>Alikhan Smailov</label>")

  
    $('.question').append ("<p class='d'> Q3. What is Kazakhstan's place among the countries of the world in terms of area?</p>");
    $('.question').append ("<label><input type='radio' name='q3' value='a'>6th</label>")
    $('.question').append ("<label><input type='radio' name='q3' value='a'>2nd</label>")
    $('.question').append ("<label><input type='radio' name='q3' value='a'>9th</label>")
    $('.question').append ("<label><input type='radio' name='q3' value='a'>12th</label>")

  
    $('.question').append ("<p class='d'> Q4. Which country does Kazakhstan not border with?</p>");
    $('.question').append ("<label><input type='radio' name='q4' value='a'>Russia</label>")
    $('.question').append ("<label><input type='radio' name='q4' value='a'>China</label>")
    $('.question').append ("<label><input type='radio' name='q4' value='a'>Kyrgyzstan</label>")
    $('.question').append ("<label><input type='radio' name='q4' value='a'>India</label>")

    
    $('.question').append ("<p class='d'> Q5. What is the national currency of Kazakhstan?</p>");
    $('.question').append ("<label><input type='radio' name='q5' value='a'>yuan</label>")
    $('.question').append ("<label><input type='radio' name='q5' value='a'>tenge</label>")
    $('.question').append ("<label><input type='radio' name='q5' value='a'>dollar</label>")
    $('.question').append ("<label><input type='radio' name='q5' value='a'>som</label>")

    countCorrect = 0;
    reset = false;
    
    $("button").click(function(event){
   
    $("input[name=q1]").each(function(index){
    choice = $(this).parent().text();
    if ($(this).prop("checked") == true && answers[0] == choice){
    countCorrect += 1;
    };
    });
    
  
    $("input[name=q2]").each(function(index){
    choice = $(this).parent().text();
    if ($(this).prop("checked") == true && answers[1] == choice){
    countCorrect += 1;
    };
    });
    
   
    $("input[name=q3]").each(function(index){
    choice = $(this).parent().text();
    if ($(this).prop("checked") == true && answers[2] == choice){
    countCorrect += 1;
    };
    });
    
 
    $("input[name=q4]").each(function(index){
    choice = $(this).parent().text();
    if ($(this).prop("checked") == true && answers[3] == choice){
    countCorrect += 1;
    };
    });
    
    
    $("input[name=q5]").each(function(index){
    choice = $(this).parent().text();
    if ($(this).prop("checked") == true && answers[4] == choice){
    countCorrect += 1;
    };
    });
    
    $("#quiz-box").append("<h2>Result of the quiz is: " + countCorrect + "</h2>");
    });

})
