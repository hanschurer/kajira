import React, { useEffect, useState } from "react";

function SearchPanel({ param, setParam, users }) {
  return (
    <form>
      <div>
        <input
          type="text"
          value={param.name}
          onChange={(evt) =>
            setParam({
              ...param,
              name: evt.target.value,
            })
          }
        />
        {/* 查询的项目名称传入param的name */}
        <select
          value={param.personId}
          onChange={(evt) =>
            setParam({
              ...param,
              personId: evt.target.value,
            })
          }
        >
          {/* 查询负责人的id传入param的personId */}
          <option value={""}>负责人</option>
          {users.map((user) => (
            <option key={user.name} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
}

export default SearchPanel;
