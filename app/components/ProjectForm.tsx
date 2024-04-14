import React from 'react'

function ProjectForm() {
  return (
    <form  className="p-8">
      <div className="mb-2">
        <label htmlFor="projectName" className="block text-base font-medium text-tag-color">
          Nombre de tu Proyecto
        </label>
        <input
          type="text"
          name="projectName"
          id="projectName"          
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"
          required
        />
      </div>

      <div className="mb-2">
        <label htmlFor="projectDescription" className="block text-base font-medium text-tag-color">
          Explica claramente de qué se Trata
        </label>
        <textarea
          name="projectDescription"
          id="projectDescription"          
          rows = {4} 
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"
          required
        ></textarea>
      </div>

      <div className="mb-2">
        <label className="block text-base font-medium text-tag-color">
          ¿Con cuánto dinero por mes puedes participar?
        </label>
        <select
          name="monthlyContribution"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"
          required
        >
          <option value="">Selecciona una opción</option>
          <option value="500">$500 pesos por mes</option>
          <option value="1000">$1000 pesos por mes</option>
        </select>
      </div>

      <div className="mb-2">
        <label htmlFor="donationPercentage" className="block text-base font-medium text-tag-color">
          ¿Cuál es el porcentaje de tu ganancia que donarás A B.free (mínimo 20%, máximo lo que tú decidas)
        </label>
        <input
          type="number"
          name="donationPercentage"
          id="donationPercentage"
          min="20"
          max="100"          
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"
          required
        />
      </div>

      <div className="mb-2">
        <label className="block text-md font-medium text-tag-color">
          Deja tus datos de contacto:
        </label>
        <input
          type="text"
          name="idNumber"
          placeholder="No. de INE"
          
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 mb-2 text-black"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Teléfono"
          
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 mb-2 text-black"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"
          required
        />
      </div>

      <div className="mb-2">
        <label htmlFor="productImage" className="block text-base font-medium text-tag-color">
          Sube una foto del producto que venderás
        </label>
        <input
          type="file"
          name="productImage"
          id="productImage"
          
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          required
        />
      </div>

      <button type="submit" className="w-full bg-button-color text-white rounded-md p-2">
        Enviar
      </button>
    </form>
  )
}

export default ProjectForm