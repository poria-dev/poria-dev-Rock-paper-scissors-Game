const imguser1 = document.getElementById("imguser1")
const imguser2 = document.getElementById("imguser2")
const h2 = document.getElementById("h2")

let points1 = document.getElementById("points1")
let points2 = document.getElementById("points2")



function imguser(img) {

    window.img = img

    console.log(img);



    setTimeout(() => {

        if (img == 0) {
            imguser1.src = "img/cut.jpg"
            imguser1.style.scale = '1'


       

        } else if (img == 1) {
            imguser1.src = "img/ka.jpg"
            imguser1.style.scale = '1'
        

        } else {
            imguser1.src = "img/stone.jpg"
            imguser1.style.scale = '1'

         
        }

    }, 300);
    user2()

}













let point1 = 0
let point2 = 0
function user2() {

    let ran = parseInt(Math.random() * 3)

    console.log(ran);

    setTimeout(() => {

        if (ran == 0) {
            imguser2.src = "img/cut.jpg"
            imguser2.style.scale = "1"
            if (img == 0) {

                setTimeout(() => {
                    // alert("equal Try Again ..")
                    h2.innerHTML = " 🚫 equal 🚫"

                }, 150);

                // setTimeout(() => {
                //     imguser2.src = ""
                //     imguser2.style.scale = "0"
                //     imguser1.src = ""
                //     imguser1.style.scale = "0"
                // }, 500);

            } else if (img == 1) {

                setTimeout(() => {

                    h2.innerHTML = "💔 user 2 won 💔"

                }, 150);

                point2++

                console.log(point2);

                points2.innerHTML = "user 2 : " + point2



                // setTimeout(() => {

                //     imguser2.src = ""
                //     imguser2.style.scale = "0"
                //     imguser1.src = ""
                //     imguser1.style.scale = "0"

                // }, 500);









            } else if (img == 2) {
                setTimeout(() => {

                    h2.innerHTML = "💛 user 1 won 💛"

                }, 150);

                point1++

                console.log(point1);

                points1.innerHTML = "user 1 : " + point1




                // setTimeout(() => {

                //     imguser2.src = ""
                //     imguser2.style.scale = "0"
                //     imguser1.src = ""
                //     imguser1.style.scale = "0"

                // }, 500);

            }








        } else if (ran == 1) {
            imguser2.src = "img/ka.jpg"
            imguser2.style.scale = "1"
            if (img == 1) {
                setTimeout(() => {
                    // alert("equal Try Again ..")
                    h2.innerHTML = " 🚫 equal 🚫"

                }, 150);

                // setTimeout(() => {
                //     imguser2.src = ""
                //     imguser2.style.scale = "0"
                //     imguser1.src = ""
                //     imguser1.style.scale = "0"
                // }, 500);


            } else if (img == 0) {

                setTimeout(() => {
                    h2.innerHTML = "💛 user 1 won 💛"
                }, 150);


                point1++

                console.log(point1);

                points1.innerHTML = "user 1 : " + point1


                // setTimeout(() => {

                //     imguser2.src = ""
                //     imguser2.style.scale = "0"
                //     imguser1.src = ""
                //     imguser1.style.scale = "0"

                // }, 500);



            } else if (img == 2) {
                setTimeout(() => {
                    h2.innerHTML = "💔 user 2 won 💔"
                }, 250);

                point2++
                console.log(point2);
                points2.innerHTML = "user 2 : " + point2



                // setTimeout(() => {
                //     imguser2.src = ""
                //     imguser2.style.scale = "0"
                //     imguser1.src = ""
                //     imguser1.style.scale = "0"
                // }, 500);
            }

        } else if (ran == 2) {
            imguser2.src = "img/stone.jpg"
            imguser2.style.scale = "1"

            if (img == 2) {
                setTimeout(() => {
                    // alert("equal Try Again ..")
                    h2.innerHTML = " 🚫 equal 🚫"
                }, 150);
                // setTimeout(() => {
                //     imguser2.src = ""
                //     imguser2.style.scale = "0"
                //     imguser1.src = ""
                //     imguser1.style.scale = "0"
                // }, 500);

            } else if (img == 0) {
                setTimeout(() => {
                    h2.innerHTML = "💔 user 2 won 💔"
                }, 150);

                point2++
                console.log(point2);
                points2.innerHTML = "user 2 : " + point2



                // setTimeout(() => {
                //     imguser2.src = ""
                //     imguser2.style.scale = "0"
                //     imguser1.src = ""
                //     imguser1.style.scale = "0"
                // }, 500);

            } else if (img == 1) {
                setTimeout(() => {

                    h2.innerHTML = "💛 user 1 won 💛"

                }, 150);

                point1++

                console.log(point1);
                points1.innerHTML = "user 1 : " + point1


                // setTimeout(() => {
                //     imguser2.src = ""
                //     imguser2.style.scale = "0"
                //     imguser1.src = ""
                //     imguser1.style.scale = "0"
                // }, 500);
            }

        }



        if (point2 == 5) {

            setTimeout(() => {
                alert("💔 user 2 won finish the game ...  💔")
                imguser2.src = ""
                imguser2.style.scale = "0"
                imguser1.src = ""
                imguser1.style.scale = "0"
                point1 = 0
                point2 = 0
                points2.innerHTML = "user 2 : "
                points1.innerHTML = "user 1 : "
                h2.innerHTML = "برای شروع روی عکسا کلیک کن"
            }, 400);

            return

        }

        if (point1 == 5) {

            setTimeout(() => {
                alert("💛 user 1 won finish the game ...  💛")
                imguser2.src = ""
                imguser2.style.scale = "0"
                imguser1.src = ""
                imguser1.style.scale = "0"
                point1 = 0
                point2 = 0
                points2.innerHTML = "user 2 : "
                points1.innerHTML = "user 1 : "
                h2.innerHTML = "برای شروع روی عکسا کلیک کن"
            }, 400);

            return

        }


    }, 650);


}