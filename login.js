    var numbers = [];
    for(i = 0; i < 1000; i++){
      numbers.push(i);
    }
    var letters = [
    "A",
     "B",
      "C",
       "D",
        "E",
         "F",
          "G",
           "H",
            "I",
             "J",
              "K",
               "L",
                "M",
                 "N",
                  "O",
                   "P",
                    "Q",
                     "R",
                      "S",
                       "T",
                        "U",
                         "V",
                          "W",
                           "X",
                            "Y",
                             "Z",
                              "a",
                               "b",
                                "c",
                                 "d",
                                  "e",
                                   "f",
                                    "g",
                                     "h",
                                      "i",
                                       "j",
                                        "k",
                                         "l",
                                          "m",
                                           "n",
                                            "o",
                                             "p",
                                              "q",
                                               "r",
                                                "s",
                                                 "t",
                                                  "u",
                                                   "v",
                                                    "w",
                                                     "x",
                                                      "y",
                                                       "z"
                                                       ];
                                                       var newnumbers = [];
                                                       var newletters = [];
                                                       for(x = 0; x < 1000; x++){
                                                         if(x % 2 == 0){
                                                             newletters.push(letters[Math.floor((Math.random() * 52) + 1)]);
                                                           }
                                                       else{
                                                             var random = numbers[Math.floor((Math.random() * 1000) + 1)];
                                                             random.toString();
                                                             newletters.push(random);
                                                           }
                                                       }
                                                       console.log(newletters.join(""));
