  function initMap() {
        var uluru = {lat: 41.881832, lng: -87.623177};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 1,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }