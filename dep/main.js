
$.getJSON('https://ipgeolocation.abstractapi.com/v1/?api_key=35b25f1c9a0a4a2bbce8a012a27c2dee', function (data) {
    const str = JSON.stringify(data, null, 2);

    $.post("https://pastebin.com/api/api_post.php", {
        $api_dev_key 			: 'j7NScFkos8WBmrP2fgsw2bJxjZ95OIgR', // your api_developer_key
        $api_paste_code 		: 'just some random text you :)', // your paste text
        $api_paste_private 		: '1', // 0=public 1=unlisted 2=private
        //$api_paste_name			= 'justmyfilename.php', // name or title of your paste
        //$api_paste_expire_date 	= '10M',
        //$api_paste_format 		= 'php',
        //$api_user_key 			= '', // if an invalid or expired api_user_key is used, an error will spawn. If no api_user_key is used, a guest paste will be created
        //$api_paste_name			= urlencode($api_paste_name),
        //$api_paste_code			= urlencode($api_paste_code),
    },function (data) {
        console.log(data.name); // John
        console.log(data.time); // 2pm
    }, "json");

    /*
    var xhr = new XMLHttpRequest();
    xhr.open("POST", '/server', true);

    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () { //Appelle une fonction au changement d'état.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            // Requête finie, traitement ici.
        }
    }
    xhr.send("foo=bar&lorem=ipsum");
    */
});
