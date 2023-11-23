import React from 'react';
import { Col, Row } from 'antd';

interface AllJobsHeaderProps {
    filter: string;
    setFilter: (filter: string) => void;
}
export const AllJobsHeader = ({ filter, setFilter }: AllJobsHeaderProps) => {

    return (
        <AllJobsHeaderContainer>
            <AllJobsTitle>
                All Jobs
            </AllJobsTitle>
            <AllJobsFilter>
                <AllJobsFilterButton
                    onClick={() => setFilter("past")}
                    active={filter === "past"}
                >
                    PAST
                </AllJobsFilterButton>
                <AllJobsFilterButton
                    onClick={() => setFilter("current")}
                    active={filter === "current"}
                >
                    CURRENT
                </AllJobsFilterButton>
                <AllJobsFilterButton
                    onClick={() => setFilter("upcoming")}
                    active={filter === "upcoming"}
                >
                    UPCOMING
                </AllJobsFilterButton>
            </AllJobsFilter>
            <UserContainer>
                <Col span={24}>
                  <UserAvatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                </Col>
                <Col span={24}>
                  <Row>
                    <UserName>John Doe</UserName>
                  </Row>
                  <Row>
                    <UserCompany>Company Name</UserCompany>
                  </Row>
                </Col>
            </UserContainer>
        </AllJobsHeaderContainer>
    );
};
