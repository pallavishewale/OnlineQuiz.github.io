<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>Online Quiz</title>
  <link rel="stylesheet" href="./main.css">

</head>
<body>
<!-- partial:index.partial.html -->
    <br>
<div class="box-form">
	<div class="left">
		<div class="overlay">
            <h1>Online Quiz</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur et est sed felis aliquet sollicitudin</p>
            <!--<span>
                <p>login with social media</p>
                <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i> Login with Twitter</a>
            </span>-->
		</div>
	</div>
	
	
    <div class="right">
            <form method="post" action="login.php">
                <h5>Login</h5>
                <p>Don't have an account? <a href="#">Creat Your Account</a> it takes less than a minute</p>
                <div class="inputs">
                    <input type="text" placeholder="user name" name="uname">
                    <br>
                    <input type="password" placeholder="password" name="pass">
                </div>

                <br><br>

                <div class="remember-me--forget-password">
                        <label>
                            <input type="checkbox" name="item" checked/>
                            <span class="text-checkbox">Remember me</span>
                        </label>
                    <p>forget password?</p>
                </div>

                <br>
                <input type="submit" value="submit" >
            </form>
	</div>
	
</div>
<div>
    
</div>
<!-- partial -->
</body>
</html>
