
// how much modules should i set for rules
define(['./random', './url_utility'], function(random, url_utility){
 
  console.info('call before return inside rules.js');
  console.info('call function from random module in rules module');
  random.sayHello();

  return {
  	random:function() {
  		console.info('Random Number from inner rules', Math.random());
  	},
  	rand2:function() {
  		random.sayHello();
  	}
  }
});
