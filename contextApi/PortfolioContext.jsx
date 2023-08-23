const { useState, createContext } = require("react");

export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [dark, setDark] = useState(true);
  const [showModal, setShowModal] = useState(false);

  return (
    <PortfolioContext.Provider
      value={{ dark, setDark, showModal, setShowModal }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};
