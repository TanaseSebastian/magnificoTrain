// Initialize and add the map
let map;

async function initMap() {
  const myLatLng = { lat: 40.471780, lng: 17.239286 };
  // The location of Taranto
  const position_taranto = { lat: 40.469219, lng: 17.240061 };

  //location of 1st step
  const position_1 = {lat: 40.4716458, lng: 17.2393879};
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");


  // The map, centered at Taranto
  map = new Map(document.getElementById("map"), {
    zoom: 18,
    center: myLatLng,
    mapId: "DEMO_MAP_ID",
  });

  // Create an info window to share between markers.
  const infoWindow = new google.maps.InfoWindow();
  const icon = {
    url: "./img/start.png", // url
    scaledSize: new google.maps.Size(150, 150), // scaled size
    size: new google.maps.Size(150,150), //size
    //origin: null, //origin
    //anchor: null, //anchor
    //scale: new google.maps.Size(8,8) //scale
    //origin: new google.maps.Point(0,0), // origin
    //anchor: new google.maps.Point(0, 0) // anchor
  };
  const tourStops = [
    [{ lat: 40.471702, lng: 17.239620 }, "Parrocchia Maria Santissima Del Monte Carmelo"],
    [{ lat: 40.469160, lng: 17.248284 }, "Parrocchia San Francesco di Paola"],
    [{ lat: 40.469641, lng: 17.252364 }, "Arsenale Militare Marittimo"],
    [{ lat: 40.473077, lng: 17.243583 }, "Dopolavoro Ferroviario"],
    [{ lat: 40.473885, lng: 17.242067 }, "Villa Peripato"],
    [{ lat: 40.473477, lng: 17.238421 }, "Museo Archeologico Nazionale di Taranto (MArTa)"],
    [{ lat: 40.473200, lng: 17.235387 }, "Ponte Girevole di San Francesco di Paola"],
    [{ lat: 40.476113, lng: 17.231093 }, "Parrocchia San Giuseppe"],
    [{ lat: 40.478982, lng: 17.228322 }, "Pensilina Liberty"],
    [{ lat: 40.480108, lng: 17.226752 }, "Ponte di Pietra"],
    [{ lat: 40.480447, lng: 17.224630 }, "Porto Mercantile"],
    [{ lat: 40.478749, lng: 17.227618 }, "Torre dell'Orologio"],
    [{ lat: 40.478011, lng: 17.227098 }, "Chiesa di San Domenico Maggiore"],
    [{ lat: 40.476432, lng: 17.224428 }, "Porto Turistico"],
    [{ lat: 40.476023, lng: 17.228755 }, "Cattedrale di San Cataldo"],
    [{ lat: 40.474603, lng: 17.230144 }, "Museo Ipogeo Spartano di Taranto"],
    [{ lat: 40.474171, lng: 17.231036 }, "Palazzo D'ayala Valva"],
    [{ lat: 40.473767, lng: 17.233031 }, "Colonne Doriche"],
    [{ lat: 40.472763, lng: 17.234099 }, "Castello Aragonese"],
    [{ lat: 40.471873, lng: 17.235655 }, "Monumento al Marinaio"],
    [{ lat: 40.471021, lng: 17.237307 }, "Ex Biblioteca della Provincia"],
    [{ lat: 40.470849, lng: 17.238052 }, "Palazzo del Governo"],
  ];


  // Create the markers.
  tourStops.forEach(([position, title], i) => {
    let icon = {
      url: "./img/"+i+".png", // url
      scaledSize: new google.maps.Size(150, 150), // scaled size
      size: new google.maps.Size(150,150), //size
    };
    const marker = new google.maps.Marker({
      position,
      map,
      title: `${i + 1}. ${title}`,
      label: `${i + 1}`,
      //optimized: false,
      icon:icon,
    });

    // Add a click listener for each marker, and set up the info window.
    marker.addListener("click", () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });
  });


  //const image =
    //"./image/capolinea.png";
  //const partenzaMarker = new google.maps.Marker({
    //position: { lat: 40.471780, lng: 17.239286 },
    //map,
    //icon: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.svgheart.com%2Fproduct%2Ftrain-locomotive-silhouette-svg-file%2F&psig=AOvVaw2wLEWSh-C_TduhBcnYXGo1&ust=1681655724185000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCODJgfKNrP4CFQAAAAAdAAAAABAE",
  //});


  //const image ="../img/capolinea.png";
  //const image="./img/start.png"

  new google.maps.Marker({
    position: myLatLng,
    map,
    icon: icon,
  });

  //when the map zoom changes, resize the icon based on the zoom level so the marker covers the same geographic area
/*
  google.maps.event.addListener(map, 'zoom_changed', function() {
    var pixelSizeAtZoom0 = 8; //the size of the icon at zoom level 0
    var maxPixelSize = 350; //restricts the maximum size of the icon, otherwise the browser will choke at higher zoom levels trying to scale an image to millions of pixels

    var zoom = map.getZoom();
    var relativePixelSize = Math.round(pixelSizeAtZoom0*Math.pow(2,zoom)); // use 2 to the power of current zoom to calculate relative pixel size.  Base of exponent is 2 because relative size should double every time you zoom in

    if(relativePixelSize > maxPixelSize) //restrict the maximum size of the icon
      relativePixelSize = maxPixelSize;

    //change the size of the icon
    marker.setIcon(
      new google.maps.MarkerImage(
     marker.getIcon().url, //marker's same icon graphic
      null,//size
      null,//origin
      null, //origin
      null, //anchor
      new google.maps.Size(relativePixelSize, relativePixelSize) //changes the scale
      )
    );
  });

  */






  // The marker, positioned at Uluru
  /*const marker = new AdvancedMarkerView({
    map: map,
    position: position_1,
    title: "Uluru",
  });*/
}


initMap();
