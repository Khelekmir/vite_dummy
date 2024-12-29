import React, { useState, createContext, useContext } from "react"
import useLocalStorage from "../customhooks/useLocalStorage";
export const ContextStore = createContext(null);
export default ({ children }) => {
    const baseUrl = "http://localhost:5173";
    
    const urls = {
        // placeholder
        home: `${baseUrl}/`,
        vocab: `${baseUrl}/vocab`,
        vocabWord: (id) => `${baseUrl}/vocab/${id}`,
        vocabWordEdit: (id) => `${baseUrl}/vocab/${id}/edit`,
    };

    const request = {
        get: async (url, callback, key = null) => {
            const response = await fetch(url)
            if (response.ok) {
                let data = await response.json();
                if (key) {
                    data = data[key];
                }
                const value = callback(data);
                setIsPending(false)
                return value;
            } else {
                console.log(response);
            }
        },
        post: async (url, data, callback) => {
            const fetchConfig = {
                method: "post",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const response = await fetch(url, fetchConfig);
            if (response.ok) {
                callback();
            } else {
                console.log(response);
            };
        },
        put: async (url, data, callback) => {
            const fetchConfig = {
                method: "put",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const response = await fetch(url, fetchConfig);
            if (response.ok && callback instanceof Function) {
                callback();
            } else {
                console.log(response)
            };
        },
        patch: async (url, data, callback) => {
            const fetchConfig = {
                method: "PATCH",  // caps necessary for CORS with patch
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const response = await fetch(url, fetchConfig);
            if (response.ok && callback instanceof Function) {
                callback();
            } else {
                console.log(response)
            };
        },
        delete: async (url, callback) => {
            const fetchConfig = {
                method: "delete",
            };
            const response = await fetch(url, fetchConfig);
            if (response.ok) {
                callback();
            } else {
                console.log(response)
            }
        },
    };

    const [isPending, setIsPending] = useState(true);
    const store = {
        urls: urls,
        request: request,
        isPending: isPending
    }
    return (
        <ContextStore.Provider value={store}>
            {children}
        </ContextStore.Provider>
    )
};

export const useContextStore = () => useContext(ContextStore)

