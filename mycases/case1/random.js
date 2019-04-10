define(['./rand/rand1', './rand/rand2'],function(rand1, rand2){
	return {
		sayHello:function() {
			console.info('Hello from inner module random.js, this file refer to rand1 and rand2', Math.random());
		}
	}
});