function submitOnclick() {
	var firstname = document.getElementById('firstnameInput').value;
	var lastname = document.getElementById('lastnameInput').value;
	var phone_number = document.getElementById('phoneInput').value;
	var user_id = document.getElementById('useridInput').value;

	var firebaseRef = firebase.database().ref("User");
	firebaseRef.push({
		firstname:firstname,
		lastname:lastname,
		user:user_id,
		phone:phone_number
	});

	alert("Add user complete");
}