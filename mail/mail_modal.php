<?php

    $recepient = "sasha4474@ukr.net";
    $siteName = "edisonmarketing.com.ua";

    $name = trim($_POST["name"]);
    $email = trim($_POST["email"]);
    $phone = trim($_POST["phone"]);
    $message = "Телефон: $phone, Почта: $email, Имя: $name"; 

    $pagetitle = "Заявка с сайта \"$siteName\"";
    mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>