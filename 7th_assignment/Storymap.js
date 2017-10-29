// storymap_data can be an URL or a Javascript object
//var storymap_data = '//media.knightlab.com/StoryMapJS/demo/demo.json';

var storymap_data = {

  storymap: {
    slides: [{
      type: "overview",
      date: "2014",
      text: {
        headline: "AMBER'S TRAVEL JOURNEY OF 2014",
        text: "<p> This year I spent a month traveling some places with my friends. </p>"
      },
      media: {
        url: "https://unsplash.com/photos/lRssALOk1fU",
        credit: "Ⓒunsplash",
        caption: "2014"
      }
    }, {
      date: "2014",
      text: {
        headline: "JINAN",
        text: "<p> My home! </p>"
      },
      location: {
        name: "JINAN",
        icon: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=329482523,693959420&fm=27&gp=0.jpg",
        lat: 36.67, 
        lon: 116.98,
        zoom: 16,
        line: true
      },
      media: {
        url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509268569168&di=cfe5737b05867d938e0ea0b6c7aaa0c8&imgtype=0&src=http%3A%2F%2Fhuoche.tianqi.com%2Fuploads%2Farticleimg%2F15-10-15%2FXBVP_151015080336_1.jpg",
        type: 		"image",
        credit: "Ⓒunsplash",
        caption: "2014"
      }
    },
      
    {
      date: "2014",
      text: {
        headline: "BEIJING",
        text: "<p>One hour distance from my hometown. Nothing special.</p> "
      },
    
      media: {
        url: "https://unsplash.com/photos/pvYyjSTQolc",
        credit: "Ⓒunsplash",
        caption: "2014"
      },
        location: {
        name: "BEIJING",
        icon: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=329482523,693959420&fm=27&gp=0.jpg",
        lat: 39.92,
        lon: 116.38,
        zoom: 16,
        line: true
      }
      
    },
    {
      date: "2014",
      text: {
        headline: "DUBAI",
        text: "<p>This is the place where I knew gold is nothing.</p> "
      },
    
      media: {
        url: "https://unsplash.com/photos/agS3wwE1xTM",
        credit: "Ⓒunsplash",
        caption: "2014"
      },
        location: {
        name: "DUBAI",
        icon: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=329482523,693959420&fm=27&gp=0.jpg",
        lat: 25.26,
        lon: 55.30,
        zoom: 16,
        line: true
      }
    },
    {
      date: "2014",
      text: {
        headline: "LONDON",
        text: "<p>I really enjoy this city's mood.</p> "
      },
    
      media: {
        url: "https://unsplash.com/photos/QvPRGI8LfOc",
        credit: "Ⓒunsplash",
        caption: "2014"
      },
        location: {
        name: "LONDON",
        icon: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=329482523,693959420&fm=27&gp=0.jpg",
        lat: 51.30,
        lon: 0.74,
        zoom: 16,
        line: true
      }
      {
      date: "2014",
      text: {
        headline: "GLASGOW",
        text: "<p>Nice place to have a rest. I really miss the friendly people.</p> "
      },
    
      media: {
        url: "https://unsplash.com/photos/s9yfl37JPBs",
        credit: "Ⓒunsplash",
        caption: "2014"
      },
        location: {
        name: "GLASGOW",
        icon: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=329482523,693959420&fm=27&gp=0.jpg",
        lat: 55.51,
        lon: 4.15,
        zoom: 16,
        line: true
      }
      
      
    }]
  }
}

// certain settings must be passed within a separate options object
var storymap_options = {
  language: 'en', // required; two-letter ISO language code
  map_type: 'osm:standard',          // required
  // map_type: 'zoomify',
  map_as_image: false, // required
  calculate_zoom: true,
  map_subdomains: '01234', // optional
};

var storymap = new VCO.StoryMap('mapdiv', storymap_data, storymap_options);
window.onresize = function(event) {
  storymap.updateDisplay(); // this isn't automatic
}
