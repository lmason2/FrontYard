import React, { useState } from "react";
import { Layout } from "antd";
import { AllJobsHeader } from "./header";
import { AllJobsTable } from "./table";

export const AllJobs = () => {
  const [filter, setFilter] = useState("current")
  return (
    <Layout.Content>
      <AllJobsHeader filter={filter} setFilter={setFilter}/>
      <AllJobsTable filter={filter}/>
    </Layout.Content>
  )
}
