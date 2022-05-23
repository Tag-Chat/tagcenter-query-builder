import React, { useState, useCallback } from "react";
import { Query, Builder, Utils as QbUtils } from "react-awesome-query-builder";
// types
import {
  JsonGroup,
  Config,
  ImmutableTree,
  BuilderProps,
} from "react-awesome-query-builder";

import { config } from "../../../../Data/QueryBuilder";

const queryValue: JsonGroup = { id: QbUtils.uuid(), type: "group" };

const QueryBuilder = () => {
  const [state, setState] = useState({
    tree: QbUtils.checkTree(QbUtils.loadTree(queryValue), config),
    config: config,
  });

  const onChange = useCallback(
    (immutableTree: ImmutableTree, config: Config) => {
      setState({ tree: immutableTree, config: config });

      const jsonTree = QbUtils.getTree(immutableTree);
      console.log(jsonTree);
    },
    []
  );

  const renderBuilder = useCallback(
    (props: BuilderProps) => (
      <div className="query-builder-container" style={{ padding: "10px" }}>
        <div className="query-builder qb-lite">
          <Builder {...props} />
        </div>
      </div>
    ),
    []
  );

  return (
    <div>
      <Query
        {...config}
        value={state.tree}
        onChange={onChange}
        renderBuilder={renderBuilder}
      />
      <div className="query-builder-result">
        <div>
          JsonLogic:{" "}
          <pre>
            {JSON.stringify(QbUtils.jsonLogicFormat(state.tree, state.config))}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default QueryBuilder;
