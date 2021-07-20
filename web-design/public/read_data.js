function submitOnclick() {

	var user_id = document.getElementById('useridInput').value;

	var ref = firebase.database().ref("User");

	ref.orderByChild('user').equalTo(user_id).on("value", function(snapshot) {
		snapshot.forEach(function(data) {
			var id = data.key;

			ref.once("value")
			.then(function(snapshot){
				var firstname = snapshot.child(id).child("firstname").val();
				var lastname = snapshot.child(id).child("lastname").val();
				var phone = snapshot.child(id).child("phone").val();

				document.getElementById("firstname").innerHTML = "First name : "+firstname;
				document.getElementById("lastname").innerHTML = "Last name : "+lastname;
				document.getElementById("phone").innerHTML = "Phone: "+phone;
			});
		});
	});
}

window.onload = function() {
	var table = document.getElementById("myTable");
	var ref = firebase.database().ref("User");
	ref.orderByChild('user').on('child_added', function(snapshot) {
		var user = snapshot.val();

		var row = table.insertRow(-1);
		var cell1 = row.insertCell(-1);
		var cell2 = row.insertCell(-1);
		var cell3 = row.insertCell(-1);
		var cell4 = row.insertCell(-1);
		cell1.innerHTML = user.user;
		cell2.innerHTML = user.firstname;
		cell3.innerHTML = user.lastname;
		cell4.innerHTML = user.phone;
	});
}