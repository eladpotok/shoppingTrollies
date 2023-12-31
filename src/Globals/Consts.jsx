import { BiStore, BiPieChartAlt2 } from "react-icons/bi";
import { FaMapPin , FaCity, FaWarehouse } from "react-icons/fa";
import { IoStorefrontOutline } from "react-icons/io5";
import { BsBuildings } from "react-icons/bs";



export const ROLES = {
    HeadquarterManager: 1,
    BranchManager: 2
}

export const BranchIcon = <IoStorefrontOutline/>
export const CityIcon = <BsBuildings/>
export const RegionIcon = <FaMapPin/>
export const PieIcon = <BiPieChartAlt2 />
export const WarehouseIcon = <FaWarehouse/>