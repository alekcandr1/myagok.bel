<? require_once "PHPMailerAutoload.php";

$name=$_POST["name"];
$body=$_POST["body"];

$msg='<p>Мягкие окна: заявка (из галереи).</p><p><strong>Имя:</strong> '.$name.'</p><p><strong>Телефон:</strong> '.$body.'</p>';

$mail = new PHPMailer(true);
$mail->CharSet = "utf-8";
$mail->IsSMTP();
$mail->Host = "ssl://smtp.yandex.ru";
$mail->SMTPAuth = true;
$mail->Port = 465; //25   465    143
$mail->SMTPDebug = 0;
$mail->Username = "jalusipinsk@yandex.by";
$mail->Password = "ejgccezixmocfbjw";
$mail->SetFrom("jalusipinsk@yandex.by", "МягОК.бел");

$mail->AddAddress("alekcandrmain@gmail.com","Александр");
$mail->AddAddress("yura5111980@gmail.com","Юрий");
$mail->Subject = 'Заявка';
$mail->IsHTML(true);
$mail->Body = $msg;

if ($body == "") {}
else {
	if(!$mail->send()) {
  echo 'Message was not sent.';
  echo 'Mailer error: ' . $mail->ErrorInfo;
} else {
  header("Location: ".$_SERVER['HTTP_REFERER']."?zv=ok");
}
}
?>