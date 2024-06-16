import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SettingsIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <Path
      d="M158.8 33c-16.2 2.8-33.8 12.5-44.9 24.9-3.9 4.3-15.2 22.9-41.4 68.2-55.6 96.3-56.2 97.4-58.9 104.9-5.5 15.2-5.5 34.9.1 50.2 1.6 4.5 20.5 38.4 48.7 87.2 50.7 87.9 50.7 87.9 66 98 9.1 6 18.6 10.1 28.5 12.2 10.2 2.1 188 2.1 198.5-.1 15.7-3.2 28.7-10.4 40.1-21.9 8.4-8.6 10.3-11.7 90.2-150.8 5.6-9.7 11.3-20.9 12.7-24.8 5.5-15.1 5.5-34.9 0-50.1-1.4-3.9-6.5-13.9-11.3-22.3-89.1-154.7-83-144.4-91.6-153.2-10.2-10.4-20.1-16.2-36-21.2-4.4-1.4-16.3-1.6-100.5-1.8-52.5-.1-97.6.2-100.2.6zm192.8 32.4c2.9.7 7.6 2.7 10.5 4.2 11.6 6.3 11.6 6.3 59.5 89.4 24.6 42.6 45.6 79.7 46.7 82.5 2.7 7 2.7 22 0 29-2.6 6.6-90.7 159.2-94.1 162.9-4.3 4.6-14 10.5-21 12.6-6.2 1.9-9.5 2-97.2 2s-91-.1-97.2-2c-7-2.1-16.7-8-21-12.6-3.3-3.7-91.5-156.2-94.1-162.9-2.7-7-2.7-22 0-29 1.1-2.8 22.1-39.9 46.7-82.5 47.9-83.2 47.9-83.1 59.6-89.4 10.2-5.6 7.3-5.4 105.5-5.5 74.1-.1 92 .2 96.1 1.3z"
      style={{
        fill: props.color,
      }}
    />
    <Path
      d="M245 162c-39.8 5-71.6 33.5-81.2 72.7-3 12.2-3 30.4 0 42.6 8.7 35.5 35.5 62.2 70.9 70.9 12.2 2.9 30.4 2.9 42.6 0 35.4-8.7 62.2-35.5 70.9-70.9 4.4-18.1 2.4-40.7-5.2-58.5-9.2-21.5-29.6-41.7-50.9-50.3-13.6-5.6-33.2-8.3-47.1-6.5zm26 33.2c2.5.5 8.3 2.9 13 5.1 15.9 7.7 29 24.2 33.1 41.7 1.6 7.1 1.6 20.9 0 28-4.1 17.5-17.2 34-33.1 41.7-10.6 5.1-17.1 6.7-28 6.7-17.1 0-31.8-6.1-44-18.4-12.3-12.2-18.4-26.9-18.4-44 0-10.9 1.6-17.4 6.7-28 12.6-25.8 42-39.5 70.7-32.8z"
      style={{
        fill: props.color,
      }}
    />
  </Svg>
);
export default SettingsIcon;
