import React from "react";

import { useCore } from "../../../Hooks/Context";

import QueryBuilder from "../../Organisms/QueryBuilder";

const HomePage = () => {
  const { query } = useCore();
  return (
    <>
      <QueryBuilder />
    </>
  );
};

export default HomePage;
