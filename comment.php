<?php 

$filename = 'Comment.txt';
$Content = "Name: " . $_POST['NAME'] . " | Suggestion: " . $_POST['SUGGESTION'] . " ||  ENDOFTEXT\r\n\n";
 
echo "open";
$handle = fopen($filename, 'a+');
echo " write";
fwrite($handle, $Content);
echo " close";
fclose($handle);
header("Location: index.php");

?>