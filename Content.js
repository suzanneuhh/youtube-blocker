const generateSTYLES = () => {
    return `<style>@import url('https://fonts.googleapis.com/css?family=Abril+Fatface|Lato');

body {
    background-color: #7c9eaa !important;
} 

.top {
    margin-top: 30px;
}

h1 {
    font-family: 'Abril Fatface', serif;
    color: #EDEDED;
    text-align: center;
    font-size: 9em;
    margin: 0;
    text-shadow: -1px 0 #BFC0C0, 0 1px #BFC0C0, 1px 0 #BFC0C0, 0 -1px #BFC0C0;
}

h2 {
    font-family: 'Lato', sans-serif;
    font-size: 2em;
    text-transform: uppercase;
    text-align: center;
    color: #BFC0C0;
    margin-top: -20px;
    font-weight: 900;
}

h3 {
    font-family: 'Lato', sans-serif;
    font-size: 1em;
    text-transform: uppercase;
    text-align: center;
    color: #BFC0C0;
    margin-top: -20px;
    font-weight: 900;
}

.container {
    margin: 0 auto;
    position: relative;
    width: 250px;
    height: 250px;
    margin-top: -40px;
}

.octopus {
    width: 50%;
    height: 53%;
    left: 25%;
    top: 10%;
    position: absolute;
    border-radius: 50%;
    background: #e97a07;
    border: 1px solid #BFC0C0;
    border-bottom: none;
    animation: float 2s ease-out infinite;
}

.octopus-copy {
    width: 50%;
    height: 53%;
    left: 25%;
    top: 10%;
    position: absolute;
    border-radius: 50%;
    background: #e97a07;
    border: 1px solid #BFC0C0;
    border-bottom: none;
    animation: float 2s ease-out infinite;
    z-index: 0;
}

.face {
    position: absolute;
    width: 100%;
    height: 60%;
    top: 20%;
}

.eye,
.eye-right {
    position: absolute;
    background: #585959;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    top: 40%;
}

.eye {
    left: 25%;
}

.eye-right {
    right: 25%;
}

.mouth {
    position: absolute;
    top: 60%;
    left: 45%;
    width: 10px;
    height: 10px;
    border: 3px solid;
    border-radius: 50%;
    border-color: transparent #585959 #585959 transparent;
    transform: rotate(45deg);
}

.one,
.two,
.three,
.four {
    position: absolute;
    background: #e97a07;
    top: 60%;
    width: 25%;
    height: 90%;
    border: 1px solid #BFC0C0;
    z-index: 0;
}

.one {
    border-radius: 0 0 100% 30%;
    left: -1px;
}

.two {
    left: 23%;
    border-radius: 0 0 50% 50%;
}

.three {
    left: 50%;
    border-radius: 0 0 50% 50%;
}

.four {
    left: 74.5%;
    border-radius: 0 0 30% 100%;
}

.shadow {
    position: absolute;
    width: 30%;
    height: 7%;
    background: #585959;
    left: 35%;
    top: 100%;
    border-radius: 50%;
    animation: scale 2s infinite;
}

@keyframes scale {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.1);
    }

    100% {
        transform: scale(1);
    }
}

@keyframes float {
    50% {
        transform: translateY(20px);
    }
}
     </style>`;
  };
  
  const generateHTML = (pageName) => {
    return `
     
   <div class="background"></div>
        <div class="top">
            <h1>404</h1>
            <h2>Tsk tsk tsk... </h2>
            <h3>Study > ${pageName} blackhole </h3>
        </div>
    <div class="container">
        <div class="octopus-copy">
            <div class="one"></div>
            <div class="two"></div>
            <div class="three"></div>
            <div class="four"></div>
    
        </div>
        <div class="octopus">
            <div class="face">
                <div class="eye"></div>
                <div class="eye-right"></div>
                <div class="mouth"></div>
            </div>
        </div>
        <div class="shadow"></div>
    </div>

     `;
  };
  
  switch (window.location.hostname) {
    case "www.youtube.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("YT");
      break;
    case "www.facebook.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("FACEBOOK");
      break;
    case "www.netflix.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("NETFLIX");
      break;
    case "www.instagram.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("INSTAGRAM");
      break;
  }


  