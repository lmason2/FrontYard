import { MenuOutlined } from "@ant-design/icons";
import { Layout, Flex } from "antd";
import styled from "styled-components";

export const PageHeader = styled(Layout.Header)`
  width: 100%;
  height: 89px;
  border-radius: 0px 0px 20px 20px;
  background: #b6cdb8;
  display: flex;
  align-items: center;
`;

export const HeaderContainer = styled(Flex)`
  width: 100%;
  height: 100%;
`;

export const LogoText = styled.h1`
  color: #143903;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Koulen-Regular;
  font-size: 59px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 28.91px;
`;

export const HardhatIcon = styled.img`
  position: absolute;
  top: 20px;
  left: -2px;
  color: #143903;
`;

export const LogoContainer = styled.div`
  position: relative;
`;

export const Menu = styled(MenuOutlined)`
  font-size: 37px;
`;

export const LogoLine = styled.div`
  width: 30px;
  height: 2px;
  background: #b6cdb8;
  position: absolute;
  top: 37px;
  left: -2px;
`;
