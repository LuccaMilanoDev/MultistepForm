import React from "react";

const UserForm = ({ data, upadateFieldHandler }) => {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Digite seu nome"
          required
          value={data.name || ""}
          onChange={(e) => upadateFieldHandler("name", e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Digite seu nome"
          required
          value={data.email || ""}
          onChange={(e) => upadateFieldHandler("email", e.target.value)}
        />
      </div>
    </div>
  );
};

export default UserForm;
