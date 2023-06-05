const { useState, createContext } = require("react");

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  return (
    <BlogContext.Provider value={{ dark, setDark }}>
      {children}
    </BlogContext.Provider>
  );
};
