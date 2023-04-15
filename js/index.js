// Initialize and add the map
let map;

async function initMap() {
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
    zoom: 17,
    center: position_taranto,
    mapId: "DEMO_MAP_ID",
  });

  // Create an info window to share between markers.
  const infoWindow = new google.maps.InfoWindow();
  const icon = {
    url: "./img/start.png", // url
    scaledSize: new google.maps.Size(50, 50), // scaled size
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
  tourStops.forEach(([position, title], i, icon) => {
    const marker = new google.maps.Marker({
      position,
      map,
      title: `${i + 1}. ${title}`,
      label: `${i + 1}`,
      optimized: false,
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

  const myLatLng = { lat: 40.471780, lng: 17.239286 };
  //const image ="../img/capolinea.png";
  //const image="./img/start.png"

  new google.maps.Marker({
    position: myLatLng,
    map,
    icon: icon,
  });
  // The marker, positioned at Uluru
  /*const marker = new AdvancedMarkerView({
    map: map,
    position: position_1,
    title: "Uluru",
  });*/
}


initMap();
