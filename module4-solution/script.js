(function(){
	var names = ["John","Paula", "Joyce","Larry", "jason",   "Frank","Jim", "Laura","jen"]


for (var i = 0; i < names.length; i++){
	var firstLetter = names[i].charAt(0).toLowerCase();
	if(firstLetter === "j"){
		byeSpeaker.sayBye(names[i]);
	}
	else{
		helloSpeaker.sayHello(names[i]);
	}
}

})();

