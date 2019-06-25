
// ===============================================================================
// DATA
// Below data will hold all of the friends
// ===============================================================================

var friends = [
    {
      name:"Bob Dylan",
      photo:"https://cdn.pastemagazine.com/www/articles/2019/03/05/dylan-schatzberg-main.jpg",
      scores:[
        "5",
        "1",
        "4",
        "4",
        "5",
        "1",
        "2",
        "5",
        "4",
        "1"
      ]
    },
    {
      name: "Elon Musk",
      photo: "https://en.wikipedia.org/wiki/Elon_Musk#/media/File:Elon_Musk_2015.jpg",
      scores: [
        "5",
        "1",
        "4",
        "4",
        "5",
        "1",
        "2",
        "5",
        "4",
        "1"
      ]
    },
    {
      name: "John Lennon",
      photo: "http://www.johnlennon.com/wp-content/uploads/2018/02/Walls_Bridges_1974_Gruen_JohnLennon-home-slider-min.jpg",
      scores: [
        "3",
        "2",
        "1",
        "3",
        "2",
        "1",
        "3",
        "2",
        "1",
        "5"
      ]
    },
    {
      name: "Mick Jagger",
      photo: "https://pbs.twimg.com/profile_images/890611271028137984/_5xAXOi-.jpg",
      scores: [
        "5",
        "4",
        "3",
        "2",
        "1",
        "5",
        "4",
        "3",
        "2",
        "1"
      ]
    },
    {
      name: "Bono",
      photo: "https://camerawork.de/wp-content/uploads/2019/02/Bono_FORBES_062217_2_FR12_F.jpg",
      scores: [
        "5",
        "4",
        "3",
        "2",
        "1",
        "5",
        "4",
        "3",
        "2",
        "1"
      ]
    }
  ]

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;