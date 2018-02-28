<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="icon" href="images/logo-large-square.png" type="image/png" sizes="16x16">
        <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
        <title>Thank you!</title>

        <!-- Bootstrap -->
        <link href="css/bootstrap/bootstrap.min.css" rel="stylesheet">
        <link href="css/style.css" rel="stylesheet">
        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>
    <body>
        <div class="navigation">
            <nav class="navbar navbar-default">
                <div class="container">
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#menu" aria-expanded="false">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="index.html">
                            <img src="images/logo-lg3.jpeg" width="170px">
                        </a>
                    </div>

                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse" id="menu">
                        <ul class="nav navbar-nav">
                            <li><a class="lang" href="index.html" data-key="home">Home<span class="sr-only">(current)</span></a></li>
                            <li><a class="lang" href="index.html#products">Products</a></li>
                            <li><a class="lang" href="index.html#aboutus" data-key="about">About</a></li>
                            <li><a class="lang" href="index.html#howto">How to use</a></li>
                            <li><a class="lang" href="en-contact.html">Contact us</a></li>
                        </ul>

                        <ul class="nav navbar-nav navbar-right rightMenu">
<!--                            <li><a class="translate lang" href="ar-contact.html" id="ar" data-key="arabic" style="font-weight: bold;">عربي <i class="fa fa-globe" aria-hidden="true"></i></a></li>-->
<!--                            <li><a class="translate lang" href="en-contact.html" id="en" data-key="english" style="font-weight: bold;">En</a></li>-->
                            <li><a href="https://www.facebook.com/jotolab/" class="social" target="_blank"><img src="images/fb.png" width="30"></a></li>
                            <li><a href="https://www.instagram.com/jotolab" class="social" target="_blank"><img src="images/insta.png" width="30"></a></li>
                            <li><a href="https://plus.google.com/u/0/112634243987855577283" class="social" target="_blank"><img src="images/go.png" width="30"></a></li>
                            <li><a href="https://www.snapchat.com/" class="social" target="_blank"><img src="images/snap.png" width="30"></a></li>
                        </ul>
                    </div><!-- /.navbar-collapse -->
                </div><!-- /.container-fluid -->
            </nav>
        </div><!-- /.navigation -->


        <?php
if(isset($_POST['email'])) {
 
    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "jotolab@gmail.com";
    $email_subject = "Your email subject line";
 
    function died($error) {
        // your error code can go here
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }
 
 
    // validation expected data exists
    if(!isset($_POST['first_name']) ||
        !isset($_POST['last_name']) ||
        !isset($_POST['email']) ||
        !isset($_POST['address']) ||
        !isset($_POST['telephone']) ||
        !isset($_POST['folderNumber']) ||
        !isset($_POST['comments'])) {
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
    }
 
     
 
    $first_name = $_POST['first_name']; // required
    $last_name = $_POST['last_name']; // required
    $email_from = $_POST['email']; // required
    $address_form = $_POST['address']; // required
    $telephone = $_POST['telephone']; //  required
    $comments = $_POST['comments']; // not required
    
    $packageValue = $_POST['packageValue']; // not required
    $itemValue = $_POST['itemValue']; // not required
    $sizeValue = $_POST['sizeValue']; // not required
    $qtyValue = $_POST['qtyValue']; // not required
    $folderNumber = $_POST['folderNumber']; // not required
    $totalValue = $_POST['totalValue']; // not required
 
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 

 
    $email_message = "Form details below.\n\n";
 
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
 
     
 
    $email_message .= "First Name: ".clean_string($first_name)."\n";
    $email_message .= "Last Name: ".clean_string($last_name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Address: ".clean_string($address_form)."\n";
    $email_message .= "Telephone: ".clean_string($telephone)."\n";
    $email_message .= "Comments: ".clean_string($comments)."\n";
    $email_message .= "package name: ".clean_string($packageValue)."\n";
    $email_message .= "item name: ".clean_string($itemValue)."\n";
    $email_message .= "size: ".clean_string($sizeValue)."\n";
    $email_message .= "qty: ".clean_string($qtyValue)."\n";
    $email_message .= "Folder Number: ".clean_string($folderNumber)."\n";
    $email_message .= "total: ".clean_string($totalValue)."\n";
    
 
// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);  
?>
 
<!-- include your own success html here -->
 <div class="container thanksText">
 	<p class="lead">Thank you :)<br> We will be in touch with you very soon.</p>
 </div>

 
<?php
 
}
?>
        
        
        <div class="footer" style="">
            <div class="container-fluid">
                <div class="row">
                    <ul>
                        <li class="col-md-3 smallLogo">
                            <img src="images/logo-large5.jpeg" width="280px">
                        </li>
                        <li class="col-md-3">
                            <p><b>Products</b></p>
                            <table>
                                <tr>
                                    <td><a href="en-item-small.html">Small Size</a></td>
                                    <td><a href="en-item-custom.html">Custom Order</a></td>
                                </tr>
                                <tr>
                                    <td><a href="en-item-med.html">Medium Size</a></td>
<!--                                    <td>Item One</td>-->
                                </tr>
                                <tr>
                                    <td><a href="en-item-big.html">Big Size</a></td>
                                </tr>
                            </table>

                        </li>
                        <li class="col-md-3">
                            <p><b>Menu</b></p>
                            <table>
                                <tr>
                                    <td><a href="index.html">Home<span class="sr-only">(current)</span></a></td>
                                    <td><a href="index.html#howto">How to use</a></td>
                                </tr>
                                <tr>
                                    <td><a href="index.html#products">Products</a></td>
                                    <td><a href="en-contact.html">Contact us</a></td>
                                </tr>
                                <tr>
                                    <td><a href="index.html#aboutus">About</a></td>
<!--                                    <td><a href="ar-contact.html">عربي <i class="fa fa-globe" aria-hidden="true"></i></a></td>-->
                                </tr>
                            </table>
                        </li>

                        <li class="col-md-3 col-sm-12 socialButtons">
                            <p><b>Stay Connected</b></p>
                            <a href="https://www.facebook.com/jotolab/" target="_blank"><i class="fa fa-facebook-square fa-3x" aria-hidden="true"></i></a>
                            <a href="https://www.instagram.com/jotolab" target="_blank"><i class="fa fa-instagram fa-3x" aria-hidden="true"></i></a>
                            <a href="https://plus.google.com/u/0/112634243987855577283" target="_blank"><i class="fa fa-google-plus-square fa-3x" aria-hidden="true"></i></a><br>
                            <a href="https://www.snapchat.com/" target="_blank"><i class="fa fa-snapchat-square fa-3x" aria-hidden="true"></i></a>    
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-12 text-center" style=""><h6>&copy; 2018 Jotolab. All rights reserved |<a href="policy.html"> Privacy Policy</a> |<a href="terms.html"> Terms Of Ues</a></h6></div>


        <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <!-- Include all compiled plugins (below), or include individual files as needed -->
        <script src="js/bootstrap/bootstrap.min.js"></script>
        <!-- Custome Js file -->
        <script language="JavaScript" type="text/javascript" src="js/javascript.js"></script>
    </body>
</html>