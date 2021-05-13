var markers = [
    { coords: { long: 77.1025, lat: 28.7041 }, color: 'red', values: [15 + Math.random() * 35, 15 + Math.random() * 35, 15 + Math.random() * 35] }, // Delhi
    { coords: { long: 72.8777, lat: 19.0760 }, color: 'green', values: [15 + Math.random() * 35, 15 + Math.random() * 35, 15 + Math.random() * 35] },  // Mumbai
    { coords: { long: 77.57946, lat: 12.9716 }, color: 'blue', values: [15 + Math.random() * 35, 15 + Math.random() * 35, 15 + Math.random() * 35] }, // Bengaluru
    { coords: { long: 88.3639, lat: 22.5726 }, color: 'purple', values: [15 + Math.random() * 35, 15 + Math.random() * 35, 15 + Math.random() * 35] }, // Kolkata
];

var map1 = L
    .map('map1')
    .setView([21, 79], 4);
var map2 = L
    .map('map2')
    .setView([21, 79], 4);
var map3 = L
    .map('map3')
    .setView([21, 79], 4);

function addPoint(id, point, map, val) {
    d3.select(id)
        .select("svg")
        .selectAll("myCircles")
        .data([point.coords])
        .enter()
        .append("circle")
        .attr("cx", function (d) { return map.latLngToLayerPoint([d.lat, d.long]).x })
        .attr("cy", function (d) { return map.latLngToLayerPoint([d.lat, d.long]).y })
        .attr("r", val)
        .style("fill", point.color)
        .attr("stroke", point.color)
        .attr("stroke-width", 3)
        .attr("fill-opacity", .3)
}

function createMaps(points) {
    L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '',
        maxZoom: 6,
    }).addTo(map1);
    L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '',
        maxZoom: 6,
    }).addTo(map2);
    L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '',
        maxZoom: 6,
    }).addTo(map3);

    L.svg().addTo(map1);
    L.svg().addTo(map2);
    L.svg().addTo(map3);

    for (var x = 0; x < points.length; x++) {
        addPoint('#map1', points[x], map1, points[x].values[0]);
    }
    for (var x = 0; x < points.length; x++) {
        addPoint('#map2', points[x], map2, points[x].values[1]);
    }
    for (var x = 0; x < points.length; x++) {
        addPoint('#map3', points[x], map3, points[x].values[2]);
    }
    function update() {
        d3.selectAll("circle")
            .attr("cx", function (d) { return map1.latLngToLayerPoint([d.lat, d.long]).x })
            .attr("cy", function (d) { return map1.latLngToLayerPoint([d.lat, d.long]).y })
    }
    map1.on("moveend", update);

    function update() {
        d3.selectAll("circle")
            .attr("cx", function (d) { return map2.latLngToLayerPoint([d.lat, d.long]).x })
            .attr("cy", function (d) { return map2.latLngToLayerPoint([d.lat, d.long]).y })
    }
    
    map2.on("moveend", update);
   
    function update() {
        d3.selectAll("circle")
            .attr("cx", function (d) { return map3.latLngToLayerPoint([d.lat, d.long]).x })
            .attr("cy", function (d) { return map3.latLngToLayerPoint([d.lat, d.long]).y })
    }
    map3.invalidateSize();
    map3.on("moveend", update);
}

$("#resultsModal .collapsible-header").click(function () {
    setTimeout(function () { map1.invalidateSize(); map2.invalidateSize(); map3.invalidateSize(); }, 1000);
});