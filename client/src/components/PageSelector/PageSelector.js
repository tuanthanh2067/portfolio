import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
// context
import { PageContext } from "../../context/PageContext";

const PageSelector = () => {
  const { currentPage } = useContext(PageContext);

  const history = useHistory();

  useEffect(() => {
    if (currentPage === 1) {
      history.push("/");
    } else if (currentPage === 2) {
      history.push("/skills");
    } else if (currentPage === 3) {
      history.push("/projects");
    } else if (currentPage === 4) {
      history.push("/timeline");
    } else if (currentPage === 5) {
      history.push("/contact");
    }
  }, [history, currentPage]);

  return null;
};

export default PageSelector;
