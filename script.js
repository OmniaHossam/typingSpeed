var words = ["certainly", "chair", "challenge", "chance", "change", "character", "charge", "check", "child", "choice", "choose", "church", "citizen", "city", "civil", "claim", "class", "clear", "clearly", "close", "coach", "cold", "collection", "college", "color", "come", "commercial", "common", "community", "company", "compare", "computer", "concern", "condition", "conference", "congress", "consider", "consumer", "contain", "continue", "control", "cost", "could", "country", "couple", "course", "court", "cover", "create", "crime", "cultural", "culture", "cup", "current", "customer", "cut", "dark", "data", "daughter", "day", "dead", "deal", "death", "debate", "decade", "decide", "decision", "deep", "defense", "degree", "democrat", "democratic", "describe", "design", "despite", "detail", "determine", "develop", "development", "die", "difference", "different", "difficult", "dinner", "direction", "director", "discover", "discuss", "discussion", "disease", "doctor", "dog", "door", "down", "draw", "dream", "drive", "drop", "drug", "during"];
    var num = 0;
    getVal = () => {
      const x = Math.floor(Math.random() * 100);
      var text = words[x];
      if (((document.getElementById('text').value).toLowerCase()) == (document.getElementById('word').innerHTML)) {
        num++;
        document.getElementById("text").value = "";
        document.getElementById("word").innerHTML = words[x];
        document.getElementById("score").innerHTML = "Score: " + num;

      }
    }
    timeHard = () => {
      document.querySelector('body').style.background = "red";
      document.getElementById('img').style.display = "none";
      document.querySelector('strong').innerHTML = "Hard level";
      document.getElementById('text').disabled=false;
      let timeleft = 10;
      let downloadTimer = setInterval(function () {
        if (timeleft == 0) {
          clearInterval(downloadTimer);
          document.getElementById("text").type = "hidden";
          document.getElementById("word").style.display = "none";
          document.getElementById("btn").style.display = "none";
          document.getElementById("bt").style.visibility = "visible";
        }

        document.getElementById("btn").innerHTML = "<span class='spinner-border spinner-border-sm'></span> " + timeleft;
        timeleft -= 1;
      }, 1000);
    }

    timeMedium = () => {
      document.querySelector('body').style.background = "rgb(226, 195, 18)";
      document.getElementById('img').style.display = "none";
      document.querySelector('strong').innerHTML = "Medium level";
      document.getElementById('text').disabled=false;
      let timeleft = 12;
      let downloadTimer = setInterval(function () {
        if (timeleft == 0) {
          clearInterval(downloadTimer);
          document.getElementById("text").type = "hidden";
          document.getElementById("word").style.display = "none";
          document.getElementById("btn").style.display = "none";
          document.getElementById("bt").style.visibility = "visible";
        }
        document.getElementById("btn").innerHTML = "<span class='spinner-border spinner-border-sm'></span> " + timeleft;
        timeleft -= 1;
      }, 1000);
    }


    timeEasy = () => {
      document.querySelector('body').style.background = "green";
      document.getElementById('img').style.display = "none";
      document.querySelector('strong').innerHTML = "Easy level";
      document.getElementById('text').disabled=false;
      let timeleft = 15;
      let downloadTimer = setInterval(function () {
        if (timeleft == 0) {
          clearInterval(downloadTimer);
          document.getElementById("text").type = "hidden";
          document.getElementById("word").style.display = "none";
          document.getElementById("btn").style.display = "none";
          document.getElementById("bt").style.visibility = "visible";
        }

        document.getElementById("btn").innerHTML = "<span class='spinner-border spinner-border-sm'></span> " + timeleft;
        timeleft -= 1;
      }, 1000);
    }

    playAgain = () => {
      num = 0;
      document.getElementById("text").type = "text";
      document.getElementById("text").value = "";
      document.getElementById("word").style.display = "block";
      document.getElementById("btn").style.display = "inline-block";
      document.getElementById("bt").style.visibility = "hidden";
      document.getElementById("score").innerHTML = "Score: " + num;
      document.querySelector('body').style.background = "rgb(12, 135, 184)";
      document.getElementById('img').style.display = "inline-block";
      document.querySelector('strong').innerHTML = "Important: Easy level takes 15s, Medium level takes 12s, Hard level takes 10s";
      document.getElementById("btn").innerHTML = "<span class='spinner-border spinner-border-sm'></span> ";
    }

