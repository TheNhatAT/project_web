<html>
<style>
body {
    max-width: max-content;
    margin: auto;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 100%;  
}
img{
    margin-top: 20%;
}
ul {
  list-style-type: none;
  counter-reset: css-counters 0; /* intializes counter, set -1 for zero-based counters */
}

ul li:before {
  counter-increment: css-counters;
  content: counters(css-counters, ".") " "; /* generates inherited counters from parents */
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.container {
  padding: 2px 16px;
}
</style>
<body>
<img src = "images.jpg"/>
<div class = "card">
    <div class="container">
<h2>Thông tin cá nhân của bạn</h2>
Họ và tên: <?php echo $_GET["name"]; ?><br>
Trường: <?php echo $_GET["school"]; ?><br>
Lớp:<?php echo $_GET["class"]; ?><br>
Sở thích của bạn:

<?php
echo'<ul>';
if(!empty($_GET['hobby'])){
    echo ' <li>'.'.'.$_GET['hobby'] ."</li> ";
    } 
?>
<?php
if(isset($_GET['hobbies'])){
if(!empty($_GET['hobbies'])){
foreach($_GET['hobbies'] as $selected){
echo '<li>'.'.'. $selected."</li> ";
}
}
}
echo '</ul>';
?>
</div></div>
</body>
</html>