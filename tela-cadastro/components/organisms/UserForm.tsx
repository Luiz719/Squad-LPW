"use client";
import React, { useState } from "react";
import { FormField } from "../molecules/FormField";
import { Checkbox } from "../atoms/checkbox";
import { Button } from "../atoms/button";
import { Loader } from "../atoms/loader";

export const UserForm: React.FC = () => {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    aceitarTermos: false,
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simples validação de exemplo
    const newErrors: { [key: string]: string } = {};
    if (!form.nome) newErrors.nome = "O nome é obrigatório.";
    if (!form.email) newErrors.email = "O email é obrigatório.";
    if (!form.senha) newErrors.senha = "A senha é obrigatória.";
    if (!form.aceitarTermos)
      newErrors.aceitarTermos = "Você deve aceitar os termos.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      // Simula envio de dados
      setTimeout(() => {
        setLoading(false);
        alert("Cadastro realizado com sucesso!");
      }, 1500);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md space-y-4"
    >
      <h2 className="text-xl font-semibold text-gray-800 text-center">
        Cadastro de Usuário
      </h2>

      <FormField
        label="Nome completo"
        id="nome"
        name="nome"
        placeholder="Digite seu nome"
        value={form.nome}
        onChange={handleChange}
        error={errors.nome}
      />

      <FormField
        label="Email"
        id="email"
        name="email"
        type="email"
        placeholder="Digite seu email"
        value={form.email}
        onChange={handleChange}
        error={errors.email}
      />

      <FormField
        label="Senha"
        id="senha"
        name="senha"
        type="password"
        placeholder="Digite sua senha"
        value={form.senha}
        onChange={handleChange}
        error={errors.senha}
      />

      <div className="flex items-center gap-2">
        <Checkbox
          id="aceitarTermos"
          name="aceitarTermos"
          checked={form.aceitarTermos}
          onChange={handleChange}
        />
        <label htmlFor="aceitarTermos" className="text-sm text-gray-700">
          Aceito os termos e condições
        </label>
      </div>
      {errors.aceitarTermos && (
        <span className="text-xs text-red-500">{errors.aceitarTermos}</span>
      )}

      <div className="pt-4 flex justify-center">
        <Button type="submit" disabled={loading}>
          {loading ? <Loader /> : "Cadastrar"}
        </Button>
      </div>
    </form>
  );
};

export default UserForm;
