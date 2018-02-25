// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
	if(currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};

    var array1 = [50, 25,10,5,1];
    var array2 = ['H','Q','D','N','P'];
   	
    var object = {};

    for(var i = 0;i<array1.length;++i)
    {
    	if( Math.floor(currency / array1[i])  > 0 )
    		object[array2[i]] = Math.floor(currency / array1[i]) ;
    	currency -= Math.floor(currency / array1[i]) * array1[i];
    }

    return object;
}
