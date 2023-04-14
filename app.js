function search() {
    var input, filter, ul, li, a, i, txtValue;

    input = document.getElementById("search-item");

    filter = input.value.toUpperCase();
    ul = document.getElementById("product-list");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h2")[0];
        txtValue = a.textContent || a.innerText;
        console.log(i+"a.innerText"+a.innerText);
        console.log(i+ "txtvalue "+txtValue)
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}



