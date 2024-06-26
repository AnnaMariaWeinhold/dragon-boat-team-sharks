<?php

if ($_SERVER['REQUEST_METHOD'] != 'POST') {
   //  header('Location: /');
    http_response_code(405);
    exit();
}

if (
   $_SERVER['HTTP_SEC_FETCH_SITE'] != 'same-origin'
) {
    header('Location: /');
    exit();
}

if (array_key_exists('email', $_POST)) {
    // Validate the form data here if needed
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($_POST['message']);


    $from = 'info@sharks.com';

    $to = 'simocypshark@gmail.com';
    $subject = 'Message from the contact form on cyprussharks.com';

    
    $mailBody = "
        <html>
        <head>
            <title>$subject</title>
        </head>
        <body>
            <p>
                Hi there!
                We received a message from the contact form at Cyprus Sharks! :D
            </p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Street:</strong> $street</p>
            <p><strong>Zip:</strong> $zip</p>
            <p><strong>City:</strong> $city</p>
            <p><strong>Country:</strong> $country</p>
            <p><strong>Phone:</strong> $phone</p>
            <p><strong>Product:</strong> $product</p>
            <p><strong>Size:</strong> $size</p>
            <p><strong>Message:</strong> $message</p>
        </body>
        </html>
    ";
    
        // The content-type header must be set when sending HTML email
       $headers = "MIME-Version: 1.0" . "\r\n";
       $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
       $headers .= "From:" . $from;
    

    // Send the email
    if (!mail($to, $subject, $mailBody, $headers)) {
        http_response_code(500); // Internal Server Error
    } else {
        http_response_code(201); // Success
    }
} else {
    http_response_code(400);
}

