import React from "react";

const InformationTable = props => {
  const { values } = props;
  const informations = values.map(value => {
    return (
      <tr key={value.property}>
        <th>{value.property}</th>
        <td>
          <p>{value.value}</p>
        </td>
      </tr>
    );
  });
  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            <abbr />
          </th>
          <th />
          <th>
            <abbr />
          </th>
        </tr>
      </thead>
      <tbody>{informations}</tbody>
    </table>
  );
};

export default InformationTable;
