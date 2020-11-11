<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Document</title>
</head>
<body>
<?php
if(!empty($_POST['name'] ))
{
$to = "Tovarka3000@gmail.com";
$from = 'Апостол';
$subject = "Заявка";
$message = 'Имя: '.$_POST['name'].'; Телефон: '.$_POST['telephone'].'; Почта: '.$_POST['e-mail'].';';
$headers = "Content-type: text/html; charset=UTF-8 \r\n";
$headers .= "From: <Tovarka3000@gmail.com>\r\n";
$result = mail($to, $subject, $message, $headers);

    if ($result){ 
        echo "<p>Cообщение успешно отправленно. Пожалуйста, оставайтесь на связи</p>";
    }
    else{
        echo "<p>Cообщение не отправленно. Пожалуйста, попрбуйте еще раз</p>";
    }
}
else {
echo "<p>Обязательные поля не заполнены. Введите номер телефона</p>";
}

?>
</body>
</html>