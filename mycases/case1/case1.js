

// 依赖也可以存在顺序?
define(['./rules', './store'], function(rules, store){
	console.info('now inside case1.js');
	console.info('----------- call inside case1.js, this rand2 function is inherieted from random module passed by rules module');
	rules.rand2();
})