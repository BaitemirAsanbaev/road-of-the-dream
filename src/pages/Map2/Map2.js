import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  Polyline,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import marker_icon from "../../assets/marker.svg";
import axios from "axios";
const customIcon = L.icon({
  iconUrl: marker_icon,
  iconSize: [32, 32],
});

const Map2 = () => {
  const [groupedData, setGroupedData] = useState([]);

  function convertApiToArray(api) {
    const groupedData = {};

    // Group objects by street
    api.forEach((item) => {
      const street = item.street;
      if (groupedData.hasOwnProperty(street)) {
        groupedData[street].push([ item.latitude, item.longitude]);
      } else {
        groupedData[street] = [[item.latitude, item.longitude]];
      }
    });

    // Convert grouped data to array format
    const convertedArray = Object.values(groupedData).map((group) => {
      return [...group];
    });
    setGroupedData(convertedArray);
  }
  // function divideByStreets(input) {
  //     const result = {};

  //     for (let i = 0; i < input.length; i++) {
  //       const { street, lat, lng } = input[i];
  //       const coordinates = [lat, lng];

  //       if (!result.hasOwnProperty(street)) {
  //         result[street] = [coordinates];
  //       } else {
  //         result[street].push(coordinates);
  //       }
  //     }

  //     const output = Object.values(result).map((coordinates) => {
  //       return [coordinates, coordinates, coordinates];
  //     });

  //     return output;
  //   }

  //   function getStreets(input){
  //     let output = []
  //     input.forEach(element => {
  //           output.push(element.street)
  //     });
  //     return output
  //   }

  useEffect(() => {
    axios.get("http://192.168.100.64:8000/review-view/").then((res) => {
      convertApiToArray(res.data);
    });
  }, []);

  groupedData.forEach((el)=>{
    console.log(el);
  })
  return (
    <>
      <MapContainer
        center={[42.8746, 74.5698]}
        zoom={12}
        style={{ height: "700px", width: "95%", margin: "20px auto" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {/* <Polyline color="red" positions={groupByStreet(position).} /> */}
        {groupedData.map((el, index) => {
            return <Polyline key={index} pathOptions={{color:"red"}} positions={el}/>
          })}
      </MapContainer>
    </>
  );
};

export default Map2;
