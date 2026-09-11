import React, { useState } from 'react'

// -----------------------------------------------------------------------
// Laboratorio 2 - Manejo de Hooks (useState)
// Página que calcula el área del triángulo, el rectángulo y el cuadrado.
// Cada figura usa useState para capturar los valores digitados por el
// usuario y para guardar el resultado que se muestra al presionar el botón.
// -----------------------------------------------------------------------

function Triangulo() {
  // Hooks: 2 variables de entrada (base y altura) + 1 variable de resultado
  const [base, setBase] = useState('')
  const [altura, setAltura] = useState('')
  const [area, setArea] = useState(null)

  const calcularArea = () => {
    const b = parseFloat(base)
    const h = parseFloat(altura)
    if (isNaN(b) || isNaN(h)) {
      setArea('Por favor ingrese valores numéricos válidos')
      return
    }
    const resultado = (b * h) / 2
    setArea(resultado.toFixed(2))
  }

  return (
    <div className="card shadow-sm h-100">
      <div className="card-body">
        <h3 className="card-title text-primary">Triángulo</h3>
        <p className="card-text text-muted">Área = (base × altura) / 2</p>

        <div className="mb-3">
          <label className="form-label">Base</label>
          <input
            type="number"
            className="form-control"
            value={base}
            onChange={(e) => setBase(e.target.value)}
            placeholder="Ingrese la base"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Altura</label>
          <input
            type="number"
            className="form-control"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            placeholder="Ingrese la altura"
          />
        </div>

        <button className="btn btn-primary w-100" onClick={calcularArea}>
          Calcular área
        </button>

        {area !== null && (
          <div className="alert alert-info mt-3 mb-0">
            <strong>Resultado:</strong> {area}
          </div>
        )}
      </div>
    </div>
  )
}

function Rectangulo() {
  const [base, setBase] = useState('')
  const [altura, setAltura] = useState('')
  const [area, setArea] = useState(null)

  const calcularArea = () => {
    const b = parseFloat(base)
    const h = parseFloat(altura)
    if (isNaN(b) || isNaN(h)) {
      setArea('Por favor ingrese valores numéricos válidos')
      return
    }
    const resultado = b * h
    setArea(resultado.toFixed(2))
  }

  return (
    <div className="card shadow-sm h-100">
      <div className="card-body">
        <h3 className="card-title text-success">Rectángulo</h3>
        <p className="card-text text-muted">Área = base × altura</p>

        <div className="mb-3">
          <label className="form-label">Base</label>
          <input
            type="number"
            className="form-control"
            value={base}
            onChange={(e) => setBase(e.target.value)}
            placeholder="Ingrese la base"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Altura</label>
          <input
            type="number"
            className="form-control"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            placeholder="Ingrese la altura"
          />
        </div>

        <button className="btn btn-success w-100" onClick={calcularArea}>
          Calcular área
        </button>

        {area !== null && (
          <div className="alert alert-info mt-3 mb-0">
            <strong>Resultado:</strong> {area}
          </div>
        )}
      </div>
    </div>
  )
}

function Cuadrado() {
  const [lado, setLado] = useState('')
  const [area, setArea] = useState(null)

  const calcularArea = () => {
    const l = parseFloat(lado)
    if (isNaN(l)) {
      setArea('Por favor ingrese un valor numérico válido')
      return
    }
    const resultado = l * l
    setArea(resultado.toFixed(2))
  }

  return (
    <div className="card shadow-sm h-100">
      <div className="card-body">
        <h3 className="card-title text-danger">Cuadrado</h3>
        <p className="card-text text-muted">Área = lado × lado</p>

        <div className="mb-3">
          <label className="form-label">Lado</label>
          <input
            type="number"
            className="form-control"
            value={lado}
            onChange={(e) => setLado(e.target.value)}
            placeholder="Ingrese el lado"
          />
        </div>

        <button className="btn btn-danger w-100" onClick={calcularArea}>
          Calcular área
        </button>

        {area !== null && (
          <div className="alert alert-info mt-3 mb-0">
            <strong>Resultado:</strong> {area}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Figuras() {
  return (
    <div className="container py-5">
      <header className="text-center mb-5">
        <h1 className="fw-bold">Calculadora de Áreas con React Hooks</h1>
        <p className="text-muted">
          Laboratorio 2 · useState · Universidad Libre · Programación Web
        </p>
      </header>

      <div className="row g-4">
        <div className="col-12 col-md-4">
          <Triangulo />
        </div>
        <div className="col-12 col-md-4">
          <Rectangulo />
        </div>
        <div className="col-12 col-md-4">
          <Cuadrado />
        </div>
      </div>
    </div>
  )
}
