
cicly = (7*period);
fullcicly = Math.floor(days/cicly);
total = ( (5*workDayAmount) + (2*weekendAmount) )*fullcicly + workDayAmount*Math.floor( (days - fullcicly*cicly)/period) ;

total = ( (5*workDayAmount) + (2*weekendAmount) )* Math.floor(days/(7*period)) + workDayAmount*Math.floor( (days -  Math.floor(days/(7*period))*(7*period))/period) ;
if (( ( 6 % period ) == 0 ) && ( Math.floor((days-(7*period)*Math.floor(days/(7*period)))/period) >=  6/period ))	{ total = total - workDayAmount + weekendAmount; }
else if ( ( (20 % period) == 0 ) && ( Math.floor((days-(7*period)*Math.floor(days/(7*period)))/period) >= 20/period ))	{ total = total - workDayAmount + weekendAmount; }



total = 0;
step = 0 ;
total = workDayAmount * (Math.floor(days/period)-Math.floor(days/(7*period))) + Math.floor(days/(7*period))*weekendAmount;
for (i = period; i <= days; i+=period) {
 	step+=1 ;
 	if ( ((step % 7) * period == 6) || ((step % 7) * period == 20) ) {
 		total = total - workDayAmount + weekendAmount ;
 	}
}



<?php

 $days = 15; // Дней в периоде
 $period = 3; // Как часто я ем протеин (раз в три дня)
 $workDayAmount = 200; // Количество протеина в будние
 $weekendAmount = 100; // Количество протеина в выходные
 $total = 0;

 $cicly = 0;
 $fullcicly = 0; 

$cicly = (7*$period);
$fullcicly = intval($days/$cicly);
$fullcicly = (intval($days/(7*$period)));

$total = ((5*$workDayAmount) + (2*$weekendAmount) ) * intval($days/(7*$period))  + $workDayAmount *intval( ( ($days - (intval($days/(7*$period))*(7*$period)))/$period) );
if (   intval(($days-$fullcicly*$cicly)/$period)   >= ( ( (($period+(1-2*($period % 2) ))*$period) / $period ) % 6)    ) { $total = $total - $workDayAmount + $weekendAmount;}
echo $total." ----->" ;

$total = (((5*$workDayAmount) + (2*$weekendAmount) ) * intval($days/(7*$period))) 
+ ($workDayAmount*intval( ( ($days - (intval($days/(7*$period))*(7*$period)))/$period) )) 
+ (ceil( (intval(  ( intval(($days-(intval($days/(7*$period)))*(7*$period))/$period) )  / (   (($period+(1-2*($period % 2) ))*$period) / $period )  ))/10)) * ($weekendAmount - $workDayAmount) ;

echo $total ;
?>


<?php

 $days = 15; // Дней в периоде
 $period = 3; // Как часто я ем протеин (раз в три дня)
 $workDayAmount = 200; // Количество протеина в будние
 $weekendAmount = 100; // Количество протеина в выходные
 $total = 0;
 $step = 0 ;

//  $total = $workDayAmount * ( intval($days/$period)-intval($days/(7*$period)) ) + $weekendAmount * intval($days/(7*$period)) ;

//  for ($i = $period; $i <= $days; $i=$i+$period) {	
//  	$step = $step + 1 ;	
//  	if (($step % 7) * $period == 6) or ($step * $period == 20) {
//  		$total = $total - $workDayAmount + weekendAmount ;
//  	}
//  }
// echo $total ;





?>