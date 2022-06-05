function Move() {

    var phi = Math.PI / 6;

    const elem = document.getElementById("animate1");
    const body = document.getElementById("animation_container1");

    elem.style.left = 50 + "px"; 
    elem.style.top = 50 + "px";

    var x = Math.cos(phi);
    var y = Math.sin(phi);


    var id = setInterval(insideMove, 1);
    function insideMove() {
        x += Math.cos(phi);
        y += Math.sin(phi);
        elem.style.left  = x + "px"; 
        elem.style.top =  y + "px"; 
        if (elem.offsetLeft + elem.offsetWidth >= body.clientWidth ||
            elem.offsetTop + elem.offsetHeight >= body.clientHeight ||
            elem.offsetLeft <= 0 ||
            elem.offsetTop <= 0
        )
        {
            phi += Math.PI / 3; 
        }
    }
}
