// src/components/Contact.js
import React from 'react';
import './Contact.css'; // Import your CSS for styling
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; // Import React Leaflet for the map
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS for styling the map

const Contact = () => {
  const position = [19.0460013030381, 72.88921769582556]; // Coordinates for Mumbai

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <table className="contact-table">
        <tbody>
          <tr>
            <td>Address:</td>
            <td>Hashu Advani Memorial Complex, Collector’s Colony, Chembur, Mumbai – 400 074. India.</td>
          </tr>
          <tr>
            <td>Tel:</td>
            <td>+91-22-61532510 / 27 (Admission)</td>
          </tr>
          <tr>
            <td>Fax:</td>
            <td>+91-22-61532555</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>
              <ul>
                <li>vesit@ves.ac.in</li>
                <li>vesit.admission@ves.ac.in</li>
                <li>vesit.website@ves.ac.in</li>
                <li>exam.vesit@ves.ac.in (Transcripts / Exam)</li>
                <li>vesit.research@ves.ac.in (R&D)</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

      <MapContainer center={position} zoom={15} style={{ height: "400px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            Hashu Advani Memorial Complex, Chembur, Mumbai.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Contact;
