import EducationIcon from "../assets/svg/EducationIcon";
import EntertainmentIcon from "../assets/svg/EntertainmentIcon";
import FoodIcon from "../assets/svg/FoodIcon";
import GymIcon from "../assets/svg/GymIcon";
import HospitalIcon from "../assets/svg/HospitalIcon";
import HotelIcon from "../assets/svg/HotelIcon";
import MallIcon from "../assets/svg/MallIcon";
import MarketIcon from "../assets/svg/MarketIcon";
import NewIcon from "../assets/svg/NewIcon";
import ParkIcon from "../assets/svg/ParkIcon";
import TempleIcon from "../assets/svg/TempleIcon";
import TravelIcon from "../assets/svg/TravelIcon";
import Category from "../models/category";

export const CATEGORIES = [
  new Category("c1", "New", ["#fdc006", "#FFFFFF"], <NewIcon />),
  new Category("c2", "Temple", ["#FCD664", "#FFFFFF"], <TempleIcon />),
  new Category("c3", "Parks", ["#78C2A4", "#FFFFFF"], <ParkIcon />),
  new Category("c4", "Hospitals", ["#E74424", "#FFFFFF"], <HospitalIcon />),
  new Category("c5", "Food", ["#A3E440", "#FFFFFF"], <FoodIcon />),
  new Category("c6", "Hotels", ["#fcd1a4", "#FFFFFF"], <HotelIcon />),
  new Category("c7", "Education", ["#1D2870", "#FFFFFF"], <EducationIcon />),
  new Category("c8", "Entertainment", ["#fd9600", "#FFFFFF"], <EntertainmentIcon />),
  new Category("c9", "Mall", ["#d95a6c", "#FFFFFF"], <MallIcon />),
  new Category("c10", "Market", ["#e8a958", "#FFFFFF"], <MarketIcon />),
  new Category("c11", "Travel", ["#fd654d", "#FFFFFF"], <TravelIcon />),
  new Category("c12", "Gyms", ["#1588fa", "#FFFFFF"], <GymIcon />),
];
