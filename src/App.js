import React, { useState } from "react";
import "./style.css";
import { ReactInternetSpeedMeter } from "react-internet-meter";

export default function App() {
  const [speed, setSpeed] = useState("0.0");
  return (
    <div>
      <h1>Internet Speed 🌐</h1>
      <ReactInternetSpeedMeter
        txtSubHeading="Checking the speed"
        outputType="empty"
        customClassName={null}
        txtMainHeading="Opps..."
        pingInterval={4000} // milliseconds
        thresholdUnit="megabyte" // "byte" , "kilobyte", "megabyte"
        threshold={100}
        imageUrl="https://images.pexels.com/photos/3396664/pexels-photo-3396664.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        downloadSize="1781287" //bytes
        callbackFunctionOnNetworkDown={speed =>
          console.log(`Internet speed is down ${speed}`)
        }
        callbackFunctionOnNetworkTest={speed => setSpeed(speed)}
      />
      <h2>Download Size: {1781287 * 0.000001} mb</h2>
      <h2>Ping Interval: 1000 ms</h2>
      <h2>Down Speed {speed} mb</h2>
      <h4>
        <strong>Image being Downloaded : </strong>
        <u>
          https://res.cloudinary.com/dcwxsms2l/image/upload/v1610376487/pexels-ivan-samkov-6291574_bzqgps.jpg
        </u>
      </h4>
    </div>
  );
}
