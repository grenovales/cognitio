module.exports = {
	index: function(request,response){
		response.render('home',{"logo":"http://cognitiodev.com/images/cognitioLogo.png"});
	}
}