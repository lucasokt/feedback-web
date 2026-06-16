<?php
include("conexao.php");
$tipo=$_POST["tipo"];
$categoria=$_POST["categoria"];
$mensagem=$_POST["mensagem"];
$sql="INSERT INTO feedbacks(tipo,categoria,mensagem,data_envio) VALUES(?,?,?,NOW())";
$stmt=$conexao->prepare($sql);
$stmt->bind_param("sss",$tipo,$categoria,$mensagem);
if($stmt->execute()){
header("Location:index.html?sucesso=1");
exit();
}else{
echo "Erro: ".$stmt->error;
}
$stmt->close();
$conexao->close();
?>