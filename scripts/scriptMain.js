$(document).ready(function() {
    $("#createBtn").click(function() {
        if($("#username").val() != "" && $("#userlink").val() != "") {
            document.getElementById("final").style.visibility = "visible";
        }else {
            document.getElementById("myModal").style.display = "block";
        }
        });
        $("#usercheckBtn").click(function() {
            $.ajax({
                url: "https://www.rapidtables.com/",
                type: 'GET',
                success: function(res) {
                    console.log(res);
                    alert(res);
                }
            });
        });

    document.getElementsByClassName("close")[0].onclick = function() {
        $("#myModal").fadeOut("fast");
    }

    $("#closeBtn").click(function() {
        document.getElementById("myModal").style.display = "none";
    });

    window.onclick = function(event) {
        if (event.target == document.getElementById("myModal")) {
            $("#myModal").fadeOut("fast");
        }
    }
});