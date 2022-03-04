import React from "react";

function ProjectList({ proList, users }) {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {proList.map((project) => (
          <tr key={project.id}>
            <td>{project.name}</td>
            <td>
              {users.find((user) => user.id === project.personId)?.name ||
                "UNKNOW"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProjectList;
