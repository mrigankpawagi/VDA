var map1 = L
    .map('map1')
    .setView([21, 79], 4);
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '',
    maxZoom: 6,
}).addTo(map1);
L.svg().addTo(map1);
var markers = [
    { long: 77.1025, lat: 28.7041 }, // Delhi
    { long: 72.8777, lat: 19.0760 },  // Mumbai
    { long: 77.57946, lat: 12.9716 }, // Bengaluru
    { long: 88.3639, lat: 22.5726 }, // Kolkata
];
d3.select("#map1")
    .select("svg")
    .selectAll("myCircles")
    .data(markers)
    .enter()
    .append("circle")
    .attr("cx", function (d) { return map1.latLngToLayerPoint([d.lat, d.long]).x })
    .attr("cy", function (d) { return map1.latLngToLayerPoint([d.lat, d.long]).y })
    .attr("r", 25)
    .style("fill", "red")
    .attr("stroke", "red")
    .attr("stroke-width", 3)
    .attr("fill-opacity", .4)
function update() {
    d3.selectAll("circle")
        .attr("cx", function (d) { return map1.latLngToLayerPoint([d.lat, d.long]).x })
        .attr("cy", function (d) { return map1.latLngToLayerPoint([d.lat, d.long]).y })
}
map1.invalidateSize();
map1.on("moveend", update);
var map2 = L
    .map('map2')
    .setView([21, 79], 4);
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '',
    maxZoom: 6,
}).addTo(map2);
L.svg().addTo(map2);
var markers = [
    { long: 77.1025, lat: 28.7041 }, // Delhi
    { long: 72.8777, lat: 19.0760 },  // Mumbai
    { long: 77.57946, lat: 12.9716 }, // Bengaluru
    { long: 88.3639, lat: 22.5726 }, // Kolkata
];
d3.select("#map2")
    .select("svg")
    .selectAll("myCircles")
    .data(markers)
    .enter()
    .append("circle")
    .attr("cx", function (d) { return map2.latLngToLayerPoint([d.lat, d.long]).x })
    .attr("cy", function (d) { return map2.latLngToLayerPoint([d.lat, d.long]).y })
    .attr("r", 15)
    .style("fill", "green")
    .attr("stroke", "green")
    .attr("stroke-width", 3)
    .attr("fill-opacity", .4)
function update() {
    d3.selectAll("circle")
        .attr("cx", function (d) { return map2.latLngToLayerPoint([d.lat, d.long]).x })
        .attr("cy", function (d) { return map2.latLngToLayerPoint([d.lat, d.long]).y })
}
map2.invalidateSize();
map2.on("moveend", update);
var map3 = L
    .map('map3')
    .setView([21, 79], 4);
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '',
    maxZoom: 6,
}).addTo(map3);
L.svg().addTo(map3);
var markers = [
    { long: 77.1025, lat: 28.7041 }, // Delhi
    { long: 72.8777, lat: 19.0760 },  // Mumbai
    { long: 77.57946, lat: 12.9716 }, // Bengaluru
    { long: 88.3639, lat: 22.5726 }, // Kolkata
];
d3.select("#map3")
    .select("svg")
    .selectAll("myCircles")
    .data(markers)
    .enter()
    .append("circle")
    .attr("cx", function (d) { return map3.latLngToLayerPoint([d.lat, d.long]).x })
    .attr("cy", function (d) { return map3.latLngToLayerPoint([d.lat, d.long]).y })
    .attr("r", 20)
    .style("fill", "blue")
    .attr("stroke", "blue")
    .attr("stroke-width", 3)
    .attr("fill-opacity", .4)
function update() {
    d3.selectAll("circle")
        .attr("cx", function (d) { return map3.latLngToLayerPoint([d.lat, d.long]).x })
        .attr("cy", function (d) { return map3.latLngToLayerPoint([d.lat, d.long]).y })
}
map3.invalidateSize();
map3.on("moveend", update);

$("#resultsModal .collapsible-header").click(function () {
    setTimeout(function () { map1.invalidateSize(); map2.invalidateSize(); map3.invalidateSize(); }, 1000);
});