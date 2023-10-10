import { useState, useEffect } from "react";

const baseUri = 'http://127.0.0.1:5000/'

function useGetApiString(endpoint) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(baseUri + endpoint, {
          method: 'GET',
          mode: 'cors', // Asegúrate de usar 'cors' aquí
          credentials: 'include', // Para enviar cookies
          headers: {
            // Agrega cualquier encabezado necesario aquí
          }
        });
        const jsonData = await response.json();
        setData(jsonData.message);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
}

function useGetApiTales(endpoint) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(baseUri + endpoint, {
          method: 'GET',
          mode: 'cors', // Asegúrate de usar 'cors' aquí
          credentials: 'include', // Para enviar cookies
          headers: {
            // Agrega cualquier encabezado necesario aquí
          }
        });
        const jsonData = await response.json();
        setData(jsonData.message);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
}

function useGetApiTalePDF(endpoint) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      async function fetchData() {
          try {
              const response = await fetch(baseUri + 'pdf/' + endpoint, {
                method: 'GET',
                mode: 'cors', // Asegúrate de usar 'cors' aquí
                credentials: 'include', // Para enviar cookies
                headers: {
                  // Agrega cualquier encabezado necesario aquí
                }
              });
              const blob = await response.blob();
              setData(blob);
              setLoading(false);
          } catch (error) {
              setError(error);
              setLoading(false);
          }
      };
      fetchData();
    }, [endpoint]);

    return { data, loading, error };
}

export {useGetApiString, useGetApiTales, useGetApiTalePDF};