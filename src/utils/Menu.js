import {AiOutlineSearch} from "react-icons/ai"
import {MdVideoLibrary} from "react-icons/md"
import {BiImage} from "react-icons/bi"
import {AiOutlineBook} from "react-icons/ai"
import {BiNews} from "react-icons/bi"
import {FiMoreVertical} from "react-icons/fi"

export const options = [
    {name: "All", icon:  <AiOutlineSearch />},
    {name: "Videos", icon: <MdVideoLibrary />},
    {name: "Images", icon:  <BiImage />},
    {name: "Books", icon:  <AiOutlineBook />},
    {name: "News", icon:  <BiNews />},
    {name: "More", icon:  <FiMoreVertical />},
];
