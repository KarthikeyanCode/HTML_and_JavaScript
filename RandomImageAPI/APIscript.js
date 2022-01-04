function refresh_page()
{
    location.reload();
}
function xml_api_call() 
{
    
    var image_link;
    
    var xhr = new XMLHttpRequest();
    xhr.open("HEAD", "https://picsum.photos/200/300.jpg");
    xhr.send();
    
    //catching the redirect 
    xhr.onreadystatechange = function()
    {
        if(this.readyState == this.DONE)
        {
            image_link = this.responseURL;
            console.log(this.responseURL);
        }
        var image_random_1 = document.getElementById("image1");
        image_random_1.setAttribute("src", image_link);    
    }
}
function fetch_api_call()
{
    fetch("https://picsum.photos/200/300")
    .then(response => {
        console.log(response);
        var image_random_1 = document.getElementById("image1");
        image_random_1.setAttribute("src", response["url"]);
    });
}