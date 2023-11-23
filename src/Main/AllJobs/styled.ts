import { Tabs, Grid } from "antd";
import styled from "styled-components";

export const AllJobsHeaderContainer = styled(Flex)`
  width: 100%;
  height: 152px;
`;

export const AllJobsTitle = styled.h1`
  width: 364px;
  height: 152px;
  flex-shrink: 0;
  font-family: Koulen-Regular;
  color: #143903;
  text-align: center;
  font-size: 87px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const AllJobsFilter = styled(Tabs)`
  width: 522px;
  height: 62px;
  flex-shrink: 0;
  border-radius: 7px;
  background: #143903;
`;

export const UserContainer = styled.div`
  width: 306px;
  height: 111px;
  flex-shrink: 0;
  border-radius: 13px;
  background: #d9d9d9;
`;
