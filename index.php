<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<title>Evil Dwarves</title>
<meta http-equiv="content-type" content="text/html;charset=utf-8" />
<meta http-equiv="Content-Style-Type" content="text/css" />
<meta name="robots" content="noindex, nofollow" />
<meta name="author" content="Corbin Matschull">
<meta name="keywords" content="Art,Code,Team">
<meta name="robots" content="index, nofollow">
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, user-scalable=no">
<link rel="icon" type="image/png" href="images/FaviCon.png">
<!--<link rel="stylesheet" type="text/css" href="screen.css">-->
<link rel="stylesheet" type="text/css" href="main-style.css>
<script type="text/javascript" charset="utf-8" src="chrome-extension://cpngackimfmofbokmjmljamhdncknpmg/js/page_context.js"></script>
</head>

<body>
<script src="Jquerry.min.js"></script>
<script src="main.js"></script>
<script src="tools.js"></script>
<script src="dwarves.js"></script>
<script src="clickscript.js"></script>
<script src="dwarves.js"></script>
<script src="resources.js"></script>
<script src="save-game.js"></script>
<script src="commandinput.js"></script>

<button type="button" id="SaveAll">Save All</button>
<button type="button" id="LoadAll">Load All</button>
<button type="button" id="ClearSave">Clear Save</button>
<br>
<button type="button" id="ConsoleIn">Enter Command</button>
</br>
<a href="commands.txt" traget="_BLANK">Commands List</a>   <a href="recipies.txt" traget="_BLANK">Recipie List</a>

<table id="status">
<td>


<table id="dwarf-table" border="1px" padding="2px" style="text-align: center;">
<tr>
<th> Item: </th> 
<th> Count: </th>
</tr>
<tr>
<td> Dwarves </td>
<td id="DwarfCount"> 9.00 </td>
</tr>
<tr>
<td> Pickaxes </td>
<td id="PickaxesCount"> 2.00 </td>
</tr>
<tr>
<td> Axes </td>
<td id="AxeCount"> 2.00 </td>
</tr>
<tr>
<td> Hoes </td>
<td id="HoeCount"> 2.00 </td>
</tr>
<tr>
<td> Bows </td>
<td id="BowCount"> 2.00 </td>
</tr>
<tr>
<td> FishingRods </td>
<td id="FishingRodCount"> 2.00 </td>
</tr>
<td> Shears</td>
<td id="ShearCount"> 2.00 </td>
</tr>
<tr>
<td> Cane </td>
<td id="CaneCount"> 2.00 </td>
</tr>
<tr>
<td> Stove </td>
<td id="StoveCount"> 2.00 </td>
</tr>
</table>
</td>
<td>


<table border="1px" padding="2px" style="text-align: center;">
<tr>
<th> Dwarf Occupation: </th>
<th> Count: </th>
</tr>
<tr>
<td> None: </td>
<td id="DwarfNoneCount"> 1.00 </td>
</tr>
<tr>
<td> Miner: </td>
<td id="DwarfMinerCount"> 1.00 </td>
</tr>
</tr>
<tr>
<td> Farmer: </td>
<td id="DwarfFarmerCount"> 1.00 </td>
</tr>
<tr>
<td> Logger: </td>
<td id="DwarfLoggerCount"> 1.00 </td>
</tr>
<tr>
<td> Hunter: </td>
<td id="DwarfHunterCount"> 1.00 </td>
</tr>
<tr>
<td> Fisher: </td>
<td id="DwarfFisherCount"> 1.00 </td>
</tr>
<tr>
<td> Shepherd: </td>
<td id="DwarfShepherdCount"> 1.00 </td>
</tr>
<tr>
<td> Rancher: </td>
<td id="DwarfRancherCount"> 1.00 </td>
</tr>
<tr>
<td> Cook: </td>
<td id="DwarfCookCount"> 1.00 </td>
</tr>
</table>
</td>
<td>


<table border="1px" padding="2px" style="text-align: center;">
<tr>
<th> Resource: </th>
<th> Count: </th>
</tr>
<tr>
<td> Stone </td>
<td id="StoneCount"> 0.00 </td>
</tr>
<tr>
<td> Coal </td>
<td id="CoalCount"> 0.00 </td>
</tr>
<tr>
<td> Dirt </td>
<td id="DirtCount"> 0.00 </td>
</tr>
<tr>
<td> Iron </td>
<td id="IronCount"> 0.00 </td>
</tr>
<tr>
<td> Gold </td>
<td id="GoldCount"> 0.00 </td>
</tr>
<tr>
<td> Wood </td>
<td id="WoodCount"> 0.00 </td>
</tr>
<tr>
<td> Brick </td>
<td id="BrickCount"> 0.00 </td>
</tr>
<tr>
<td> Meat </td>
<td id="MeatCount"> 0.00 </td>
</tr>
<tr>
<td> Fish </td>
<td id="FishCount"> 0.00 </td>
</tr>
<tr>
<td> Wheat </td>
<td id="WheatCount"> 0.00 </td>
</tr>
<tr>
<td> Bread </td>
<td id="BreadCount"> 0.00 </td>
</tr>
<tr>
<td> Wool </td>
<td id="WoolCount"> 0.00 </td>
</tr>
</table>
</td>
<table>

</body>
</html>
