import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Box, Flex, Text } from "@chakra-ui/react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiArrowDropDownLine, RiCoinLine, RiCoupon2Fill, RiOrderPlayLine, RiProfileLine } from "react-icons/ri";

import { RiCustomerService2Fill } from "react-icons/ri";
import { FaArrowTrendUp } from "react-icons/fa6";
import { CgSoftwareDownload } from "react-icons/cg";
import { AiOutlineUser } from "react-icons/ai";
import "./styles/dropdown.css";
import "./styles/threedot.css";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { GrOrderedList } from "react-icons/gr";
/**
 * @author
 * @function ThreeDot
 **/

export const LoginDropdown = (props) => {
	const [isHovered, setIsHovered] = React.useState(false);
	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};
	return (
		<Box className="category">
			<Flex
			    gap={2}
				fontSize={"lg"}
				size={"lg"}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<AiOutlineUser size={"30"}/>
				Login
				<RiArrowDropDownLine
					size={"35"}
					style={
						isHovered
							? { transform: "rotate(180deg) ", transitionDuration: "0.5s" }
							: { transform: "rotate(0deg)" }
					}
				/>
			</Flex>

			{isHovered && (
				<Box
					color={"black"}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					className="dropdown-menu dropDownList"
					style={{ color: "black"}}
					width={"20%"}
					
					
					size={"lg"}
				>
					<p>
						<RiProfileLine /> My Profile
					</p>
					<p>
						<RiCoinLine />supercoins Zone
					</p>
					<p>
						{" "}
						<FaArrowTrendUp /> Flipkart Zone
					</p>
					<p>
						{" "}
						<GrOrderedList />  Orders
					</p>
					<p>
						{" "}
						<RiOrderPlayLine />  Play
					</p>
					<p>
						<RiCoupon2Fill/>Coupon
					</p>

				</Box>
			)}
		</Box	>
	);
};
