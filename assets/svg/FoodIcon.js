import * as React from "react";
import Svg, { Path } from "react-native-svg";
const FoodIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="50mm" height="50mm" viewBox="0 0 200 200" {...props}>
    <Path
      d="M-104.283 729.127c.02-11.793.09-13.777.452-12.634.974 3.082 2.824 5.492 5.567 7.251 3.453 2.216-2.01 2.076 80.782 2.076 82.79 0 77.328.14 80.782-2.076 2.742-1.76 4.592-4.17 5.566-7.25.362-1.144.433.84.452 12.633l.023 13.99h-173.647zm.007-89.198-.03-70.459H69.342l-.029 70.46c-.016 38.752-.145 70.077-.288 69.61-.963-3.155-4.047-6.847-6.795-8.134l-1.706-.8v-11.003l2.744-.125c3.562-.162 3.7-.34 3.7-4.76 0-4.35-.278-4.684-3.9-4.684h-2.544v-25.806l-.832-.833c-1.017-1.017-2.176-1.062-3.361-.13-.8.63-.894.933-.894 2.884v2.18H2.126l1.6-1.781c11.45-12.734 13.992-31.273 6.378-46.514-5.961-11.932-16.493-19.852-29.877-22.469-4.33-.846-11.121-.763-15.685.193-12.1 2.534-22.585 10.425-28.423 21.393-.745 1.4-1.681 3.46-2.08 4.579l-.726 2.035-3.182-.108c-12.398-.418-24.294 7.145-29.24 18.59-2.01 4.655-2.316 6.348-2.295 12.72.017 5.373.083 5.962.967 8.648 2.904 8.824 8.432 15.271 16.31 19.026 3.468 1.652 6.082 2.465 9.247 2.876l1.786.232-.09 11.063-.09 11.063-10.683.17-10.683.169-2.035.95c-3.307 1.542-6.255 4.92-7.313 8.377-.143.466-.273-30.859-.289-69.612zm36.26 48.962v-11.153l1.95-.242c6.37-.792 13.2-4.406 18.137-9.597l1.942-2.041 2.7 1.167c3.142 1.358 8.04 2.662 11.306 3.01l2.29.243v29.766h-38.325zm43.412-3.725v-14.88l2.12-.23c2.686-.292 7.09-1.318 9.357-2.18l1.75-.664v12.822h-2.544c-3.622 0-3.9.334-3.9 4.684 0 4.42.138 4.598 3.7 4.76l2.744.125V700.044h-13.227zm18.314 9.622v-5.257h61.726v10.513H-6.29Zm0-19.163v-4.409h61.726V680.034H-6.29Z"
      style={{
        fill: "#fefefe",
      }}
      transform="translate(12.86 -14.468)"
    />
    <Path
      d="M176.896 145.615c.463-.493.923-.897 1.022-.897.098 0-.2.404-.664.897-.463.493-.923.897-1.022.897-.098 0 .2-.404.664-.897zM47.377 138.26l-2.69-.23 2.58-.064c1.418-.036 2.679.097 2.8.294.123.197.173.33.112.294-.061-.035-1.322-.168-2.802-.294zm135.179-.263c.844-.076 2.135-.075 2.87.002.735.077.044.139-1.534.138-1.579-.001-2.18-.065-1.336-.14zm12.278-3.863c.464-.493.924-.897 1.022-.897.1 0-.2.404-.663.897s-.923.897-1.022.897c-.098 0 .2-.404.663-.897zm-169.88-23.859c.357-.394.73-.717.828-.717.099 0-.113.323-.47.717-.357.395-.73.718-.829.718-.098 0 .113-.323.47-.718zm4.475-1.335c1.277-.076 2.46-.331 2.628-.567.215-.302.263-.27.16.108-.11.41-.743.546-2.628.568l-2.483.03zm94.756-1.546c-1.814-4.014-6.006-7.663-11.147-9.702-1.887-.75-2.16-.971-1.948-1.588.577-1.684.577-4.506 0-5.388-.828-1.263-1.665-1.336-6.488-.573-2.368.375-4.422.612-4.565.526-.57-.345-.96-2.857-.65-4.21.444-1.95 2.354-3.754 6.365-6.014 3.96-2.232 5.129-3.415 5.129-5.196 0-2.217-1.44-4.022-4.458-5.593l-1.05-.547 1.409-.932c2.42-1.602 5.307-2.39 8.754-2.39 3.972 0 6.205.675 9.243 2.793l2.426 1.692 4.259-.1c6.316-.147 9.725.901 13.103 4.03 2.244 2.078 2.714 2.278 6.328 2.688 3.99.454 6.9 1.78 9.65 4.402 1.692 1.613 2.522 2.104 4.678 2.765 2.926.898 5.861 2.704 7.086 4.36 1.031 1.396 2.511 2.276 4.725 2.812 3.517.852 7.112 3.465 8.494 6.174.858 1.68 2.128 2.577 4.695 3.317 3.629 1.046 7.409 4.2 8.513 7.104l.343.902-9.926.236c-5.459.13-22.126.236-37.039.236l-27.113.001zm-90.442-2.254c0-.062.525-.586 1.166-1.166l1.166-1.054-1.053 1.166c-.983 1.087-1.279 1.331-1.279 1.054zm13.275-10.069c0-.074.283-.357.628-.628.57-.446.582-.433.136.136-.47.597-.764.787-.764.492zm22.603-12.96c.464-.493.924-.897 1.022-.897.099 0-.2.404-.663.897-.464.494-.923.897-1.022.897-.099 0 .2-.403.663-.897zm5.561-6.637c.357-.395.73-.718.829-.718.099 0-.113.323-.47.718-.357.395-.73.717-.829.717-.098 0 .113-.322.47-.717zm1.704-.965c.346-.09.91-.09 1.256 0 .345.09.063.164-.628.164-.69 0-.973-.074-.628-.164zm19.285-19.262c0-.075.282-.357.628-.628.569-.446.581-.434.135.136-.469.597-.763.787-.763.492zm6.77-3.721c-.446-.57-.433-.582.136-.136.598.469.788.763.493.763-.075 0-.357-.282-.628-.627z"
      style={{
        fill: "#fdecd5",
      }}
      transform="translate(-9.645 44.61)"
    />
    <Path
      d="M62.737 149.496c.26-.104.569-.091.688.028.119.12-.093.204-.471.188-.418-.017-.503-.102-.217-.216zM46.106 137.89c-4.44-.214-6.58-.987-9.395-3.397-2.042-1.748-12.66-18.683-12.89-20.556-.18-1.491.71-3.256 2.102-4.157.723-.469 11.677-.548 89.263-.647 48.641-.063 84.69-.07 80.11-.017l-8.33.096 1.279 1.172c1.002.918 1.317 1.518 1.456 2.774.173 1.557.019 1.857-5.434 10.571-3.086 4.934-6.21 9.584-6.94 10.335-.73.751-2.374 1.882-3.653 2.512l-2.324 1.146-60.641.18c-33.353.098-62.424.093-64.603-.012zm159.805-27.525c-.447-.569-.434-.582.135-.135.598.468.788.763.493.763-.075 0-.357-.283-.628-.628zm-85.187-7.714-1.053-1.166 1.166 1.054c.64.58 1.166 1.104 1.166 1.166 0 .277-.296.033-1.279-1.054zm-20.118-2.944c-3.307-1.68-5.178-5.91-3.4-7.687.417-.418 1.162-.76 1.656-.76.493 0 .896-.17.896-.38 0-.209.122-.307.27-.217.148.09 2.206-.141 4.574-.512 5.382-.842 5.067-.852 6.115.196 1.324 1.324 1.246 4.143-.176 6.386-2.267 3.574-6.348 4.796-9.935 2.974zM79.311 84.589c-.69-.299-1.634-.898-2.098-1.331-.952-.888-2.21-3.166-2.21-4.003 0-.303-.13-.552-.287-.552-.61 0 .041-2.493.851-3.254.849-.797.868-.798 6.648-.375 3.188.233 6.106.59 6.485.793 2.597 1.39.61 6.935-3.088 8.615-1.764.801-4.59.85-6.301.107zm21.703-1.222c.357-.395.73-.718.829-.718.099 0-.113.323-.47.718-.357.395-.73.718-.829.718-.099 0 .113-.323.47-.718zm-55.761-1.286c.017-.418.102-.503.216-.216.104.259.091.568-.028.687-.12.12-.204-.092-.188-.47zm1.048-2.796c0-.074.282-.357.627-.628.57-.446.582-.433.136.136-.469.597-.763.787-.763.492zm31.242-7.608c.017-.418.102-.503.216-.217.104.26.091.569-.028.688-.12.119-.204-.093-.188-.471zm0-3.947c.017-.418.102-.503.216-.216.104.259.091.568-.028.687-.12.12-.204-.093-.188-.47zm12.483-7.953c-.447-.569-.434-.581.135-.135.345.27.628.553.628.628 0 .295-.295.105-.763-.493zm14.9-5.92-.683-.807.807.684c.759.642.971.93.684.93-.068 0-.431-.362-.807-.806zm-7.14-.269c.356-.394.73-.717.828-.717.099 0-.113.323-.47.717-.357.395-.73.718-.829.718-.099 0 .113-.323.47-.718zm2.331-2.646c0-.075.283-.357.628-.628.57-.447.582-.434.136.135-.47.598-.764.788-.764.493zm1.748-.493c-.446-.569-.433-.582.136-.135.345.27.628.553.628.628 0 .295-.295.105-.764-.493z"
      style={{
        fill: "#bae871",
      }}
      transform="translate(-9.645 44.61)"
    />
    <Path
      d="M171.77 137.38c2.045-.638 4.347-2.037 5.736-3.485.631-.658 3.673-5.232 6.76-10.166 5.454-8.715 5.608-9.014 5.435-10.571-.14-1.258-.454-1.856-1.463-2.78l-1.286-1.179 8.516.005c6.044.004 8.766.134 9.378.448 1.435.738 2.368 2.31 2.353 3.968-.011 1.297-.695 2.584-5.084 9.571-6.334 10.083-6.854 10.794-8.929 12.222-3.19 2.195-4.923 2.49-14.439 2.464-7.57-.022-8.325-.075-6.977-.497zM79.598 74.86c-.735-.112-1.076-.464-1.427-1.47-.717-2.06-.552-5.997.365-8.722.827-2.457 3.733-8.41 4.487-9.192.338-.35 1.033-.017 3.29 1.576 1.574 1.11 3.61 2.641 4.523 3.402l1.662 1.382.463-1.12c.62-1.497 3.152-4.927 6-8.132l2.328-2.618.883.824c1.454 1.36 5.674 6.462 6.616 8 1.08 1.763 2.289 4.652 2.56 6.114.192 1.035.113 1.122-1.531 1.706-.953.338-2.517 1.18-3.474 1.87-2.646 1.907-3.191 2.055-6.589 1.789-5.21-.408-9.566.81-12.803 3.58-1.4 1.2-1.608 1.263-3.933 1.212-1.35-.03-2.889-.12-3.42-.2z"
      style={{
        fill: "#9fde3d",
      }}
      transform="translate(-9.645 44.61)"
    />
    <Path
      d="M61.79 149.373c-5.285-.77-10.034-5.151-11.376-10.497l-.245-.975 65.606.083c36.083.045 61.892.13 57.353.19l-8.251.106-1.01 2.488c-1.3 3.204-3.568 5.735-6.417 7.158-1.208.604-2.452 1.133-2.766 1.176-.314.043 2.82.17 6.964.28 4.143.11-16.2.217-45.206.235-29.008.02-53.6-.09-54.651-.244z"
      style={{
        fill: "#2eb081",
      }}
      transform="translate(-9.645 44.61)"
    />
    <Path
      d="M155.795 148.704c4-1.595 6.501-4.06 8.08-7.963l1.002-2.472 7.982-.004c4.39-.002 7.983.087 7.983.198 0 .112-.55 1.392-1.22 2.845-1.471 3.184-3.592 5.413-6.513 6.848l-2.133 1.047-8.432.086-8.43.086z"
      style={{
        fill: "#26a970",
      }}
      transform="translate(-9.645 44.61)"
    />
    <Path
      d="M32.308 108.552c0-.926 1.826-3.678 3.217-4.849 1.507-1.268 3.233-2.14 5.867-2.966 2.165-.678 3.264-1.66 5.347-4.77 1.644-2.456 4.228-4 8.504-5.084 1.156-.293 2.172-.972 3.738-2.5 1.183-1.154 2.689-2.388 3.346-2.742.657-.354 1.197-.89 1.2-1.19.004-.38.087-.418.275-.122.204.32.789.28 2.389-.166 1.597-.445 2.611-1.04 4.12-2.42 3.233-2.96 4.692-3.733 4.692-2.488 0 .837 1.258 3.115 2.212 4.005 2.046 1.908 5.712 2.441 8.397 1.222 3.717-1.688 5.684-7.226 3.065-8.627-.391-.21-1.327-.388-2.08-.396l-1.369-.015 1.56-1.41c3.226-2.918 7.625-4.185 13.036-3.757 2.51.199 3.348.134 4.274-.328 1.53-.763 1.536-.762 3.672.658 2.16 1.435 3.11 2.852 3.11 4.641 0 1.66-1.505 3.196-4.864 4.962-6.257 3.29-7.765 5.698-6.414 10.243.206.692.107.807-.699.807-1.377 0-2.374 1.175-2.374 2.8 0 3.22 3.797 6.528 7.492 6.528 2.026 0 4.404-1.13 5.71-2.716l1.003-1.216 3.638 1.784c5.163 2.533 8.654 5.907 10.111 9.772l.372.987H78.582c-44.36 0-46.274-.027-46.274-.647zm50.031-.041c.309-.499-1.91-10.75-2.53-11.697-.299-.455-1.12-1.102-1.827-1.437-1.225-.582-1.464-.574-5.172.165-9.274 1.847-10.116 2.701-8.868 8.993.372 1.874.748 3.61.835 3.857.19.543 17.23.658 17.562.119z"
      style={{
        fill: "#99493a",
      }}
      transform="translate(-9.645 44.61)"
    />
    <Path
      d="M64.777 108.392c-.087-.247-.463-1.983-.835-3.857-1.248-6.292-.406-7.146 8.868-8.993 3.708-.74 3.947-.747 5.172-.165.706.335 1.528.982 1.827 1.437.62.948 2.839 11.198 2.53 11.697-.333.54-17.371.424-17.562-.12zM48.02 92.754c-.752-1.306-2.59-10.525-2.316-11.618.379-1.51 1.637-2.755 3.216-3.182 3.883-1.05 9.463-2.055 10.388-1.87 1.82.365 2.947 1.9 3.612 4.926.813 3.702.787 3.887-.654 4.664-.69.371-2.023 1.468-2.96 2.436-1.959 2.022-2.8 2.517-5.293 3.12-.986.239-2.614.895-3.618 1.457l-1.824 1.024z"
      style={{
        fill: "#602b22",
      }}
      transform="translate(-9.645 44.61)"
    />
  </Svg>
);
export default FoodIcon;
