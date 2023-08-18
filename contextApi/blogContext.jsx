const { useState, createContext } = require("react");

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [dark, setDark] = useState(true);
  const [showModal, setShowModal] = useState(false);

  return (
    <BlogContext.Provider value={{ dark, setDark, showModal, setShowModal }}>
      {children}
    </BlogContext.Provider>
  );
};
