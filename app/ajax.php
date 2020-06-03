<?
if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['email'])&&$_POST['email']!="")&&(isset($_POST['request'])&&$_POST['request']!="")&&(isset($_POST['phone'])&&_POST['phone']!='')){ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'velikanets@yandex.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Обратный звонок'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Email: '.$_POST['email'].'</p>   
                        <p>Телефон: '.$_POST['phone'].'</p>
                        <p>Название проекта: '.$_POST['project_name'].'</p>                      
                        <p>Коротко о задаче: '.$_POST['request'].'</p> 
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>
