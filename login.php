<?php
    session_start();

    $user = dataFilter($_POST['uname']);
    $pass = dataFilter($_POST['pass']);
    $unm = "admin";
    $pas = 12345;
   
    if($user == $unm && $pass == $pas)
        
    {
       
         header("location: quizForm.html");
        
    }
     function dataFilter($data)
    {
    	$data = trim($data);
     	$data = stripslashes($data);
    	$data = htmlspecialchars($data);
      	return $data;
    }

?>